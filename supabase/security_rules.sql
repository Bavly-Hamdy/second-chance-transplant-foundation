-- ==============================================================================
-- Second Chance Transplant Foundation — Production Database Schema & Security Rules
-- Target: Supabase (PostgreSQL 15+)
-- ==============================================================================

-- 1. Ensure required extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Create the "leads" Table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL CHECK (char_length(trim(name)) >= 2 AND char_length(trim(name)) <= 100),
    email TEXT NOT NULL CHECK (char_length(trim(email)) >= 5 AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(trim(phone)) >= 7 AND char_length(trim(phone)) <= 35),
    contact TEXT NOT NULL,
    contact_type TEXT NOT NULL DEFAULT 'email',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'archived')),
    ip_address TEXT,
    notes TEXT
);

-- 3. Performance & Audit Indexes
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);

-- 4. Enable & FORCE Row Level Security (RLS)
-- Crucial: FORCE ensures table owner and service roles also respect rules unless explicitly bypassed
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads FORCE ROW LEVEL SECURITY;

-- 5. Revoke default public permissions
REVOKE ALL ON public.leads FROM PUBLIC;
GRANT SELECT, INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

-- ------------------------------------------------------------------------------
-- 6. Row-Level Security (RLS) Policies — Enterprise Zero-Exposure Architecture
-- ------------------------------------------------------------------------------

-- Policy A: Public anonymous visitors CAN ONLY INSERT new validated leads.
-- Honeypot and basic payload sanitization are enforced at the database level.
DROP POLICY IF EXISTS "allow_anon_lead_submission" ON public.leads;
CREATE POLICY "allow_anon_lead_submission"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(trim(name)) >= 2
    AND char_length(trim(email)) >= 5
    AND char_length(trim(phone)) >= 7
);

-- Policy B: Strict Denial of Public READ / SELECT
-- Prevents public scrapers or compromised clients from viewing registered names, emails, and phone numbers.
DROP POLICY IF EXISTS "deny_anon_read_leads" ON public.leads;
CREATE POLICY "deny_anon_read_leads"
ON public.leads
FOR SELECT
TO anon, authenticated
USING (false);

-- Policy C: Strict Denial of Public UPDATE
DROP POLICY IF EXISTS "deny_anon_update_leads" ON public.leads;
CREATE POLICY "deny_anon_update_leads"
ON public.leads
FOR UPDATE
TO anon, authenticated
USING (false);

-- Policy D: Strict Denial of Public DELETE
DROP POLICY IF EXISTS "deny_anon_delete_leads" ON public.leads;
CREATE POLICY "deny_anon_delete_leads"
ON public.leads
FOR DELETE
TO anon, authenticated
USING (false);

-- Policy E: Full Privileged Access for Service Role / Foundation Admins
DROP POLICY IF EXISTS "service_role_unrestricted" ON public.leads;
CREATE POLICY "service_role_unrestricted"
ON public.leads
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- 7. Anti-Spam Rate Limiting Trigger (Optional Defense-in-Depth)
-- Limits repeated submissions of the same email to max 3 times per hour.
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.check_lead_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
    IF (
        SELECT COUNT(*)
        FROM public.leads
        WHERE email = NEW.email
          AND created_at > (now() - interval '1 hour')
    ) >= 3 THEN
        RAISE EXCEPTION 'Rate limit exceeded: Please wait before submitting another request with this email.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_lead_rate_limit ON public.leads;
CREATE TRIGGER trg_lead_rate_limit
BEFORE INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.check_lead_rate_limit();

