# 🚀 Production Deployment & GoDaddy Domain Launch Guide

Official guide for taking the **Second Chance Transplant Foundation** web platform live on your custom domain via **GoDaddy**.

---

## 📋 Pre-Flight Checklist

Before connecting your GoDaddy domain, ensure the following steps are complete:

1. **Database Schema & Security Rules**:
   - Go to your production [Supabase Dashboard](https://supabase.com/dashboard).
   - Open the **SQL Editor**.
   - Copy and paste the contents of [`supabase/security_rules.sql`](./supabase/security_rules.sql) and click **Run**.
   - This creates the `leads` table and enforces strict **Row-Level Security (RLS)**:
     - ✅ Public anonymous visitors can only `INSERT` their own contact submissions.
     - 🛡️ Public `SELECT`, `UPDATE`, and `DELETE` are blocked (Zero-Exposure of patient & donor data).
     - ⚡ Anti-spam rate limiting is active.

2. **Environment Variables**:
   - Ensure your production hosting environment defines the variables listed in [`.env.example`](./.env.example):
     ```env
     VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_<your-key>
     VITE_SUPABASE_PROJECT_ID=<your-project-ref>
     SUPABASE_URL=https://<your-project-ref>.supabase.co
     SUPABASE_PUBLISHABLE_KEY=sb_publishable_<your-key>
     SUPABASE_PROJECT_ID=<your-project-ref>
     VITE_SITE_URL=https://<your-godaddy-domain>.com
     NOTIFICATION_EMAIL=bavly.hamdyai@gmail.com
     # RESEND_API_KEY=re_your_free_key_here
     ```

3. **Lead Email Notifications to `bavly.hamdyai@gmail.com`**:
   - The platform includes an automated email dispatch engine in [`src/lib/lead-notifications.ts`](./src/lib/lead-notifications.ts).
   - Every "Stay Connected" registration sends an HTML notification with:
     - Full Name, Email, Phone, Preferred Language, Cairo/UTC Timestamps.
     - Direct "Reply via Email" and "Chat on WhatsApp" action buttons.
   - To activate live inbox delivery to `bavly.hamdyai@gmail.com`:
     1. Create a free account at [resend.com](https://resend.com) (3,000 emails/month free).
     2. Generate an API Key under **API Keys** → **Create API Key**.
     3. Add `RESEND_API_KEY=re_...` to your production environment variables (e.g. in Vercel or your `.env`).
     4. That's it! Notifications will arrive directly to `bavly.hamdyai@gmail.com`.

---

## 🌐 Connecting Your GoDaddy Domain

### Option 1: Vercel (Recommended — 2-Minute Zero-Maintenance Setup)

Vercel provides automatic global edge deployment, seamless SSR support, and automated free SSL renewal.

1. **Deploy to Vercel**:
   - Push your code to GitHub.
   - Go to [Vercel](https://vercel.com) and click **Add New Project**.
   - Select your repository and configure the environment variables from `.env.example`.
   - Click **Deploy**.

2. **Add Your GoDaddy Domain in Vercel**:
   - In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
   - Enter your domain (e.g., `secondchancetransplant.org` and `www.secondchancetransplant.org`).

3. **Configure DNS Records in GoDaddy**:
   - Log in to your [GoDaddy Domain Portfolio](https://dcc.godaddy.com/).
   - Click your domain name, then click **Manage DNS** (or **DNS Records**).
   - Add/Update the following records:

   | Type      | Name  | Value                  | TTL                       | Notes                             |
   | :-------- | :---- | :--------------------- | :------------------------ | :-------------------------------- |
   | **A**     | `@`   | `76.76.21.21`          | 600 seconds (or 1/2 hour) | Points apex root domain to Vercel |
   | **CNAME** | `www` | `cname.vercel-dns.com` | 1 Hour                    | Routes `www` subdomain            |

4. **SSL Activation**:
   - Vercel automatically requests and installs a Let's Encrypt SSL certificate within 2–5 minutes once DNS propagates.

---

### Option 2: Cloudflare Pages / Workers (Native Nitro Module)

The project includes pre-configured Nitro build presets targeting Cloudflare.

1. **Deploy to Cloudflare**:
   - In [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
   - Build command: `npm run build`
   - Output directory: `.output/public`

2. **Connect GoDaddy Domain via Cloudflare Nameservers**:
   - In Cloudflare, add your site.
   - Cloudflare will provide 2 nameservers (e.g., `aria.ns.cloudflare.com`, `tony.ns.cloudflare.com`).
   - In GoDaddy: Navigate to **DNS** → **Nameservers** → **Change Nameservers** → Choose **I'll use my own nameservers** and paste the Cloudflare addresses.
   - Cloudflare automatically provides enterprise DDoS mitigation and edge SSL certificates.

---

### Option 3: GoDaddy Linux Hosting with cPanel (Node.js Application)

If hosting directly on GoDaddy VPS or Linux cPanel:

1. **Build the Production Bundle**:
   ```bash
   npm run build
   ```
2. **Setup Node.js App in cPanel**:
   - In cPanel, click **Setup Node.js App**.
   - Select **Node.js version 20.x or 22.x**.
   - Application Mode: **Production**.
   - Application root: `/home/username/public_html` (or project directory).
   - Application startup file: `.output/server/index.mjs`.
3. **Start Application** and verify domain resolution.

---

## ⚠️ Important GoDaddy Notes

> [!WARNING]
> **Preserve Existing Email (MX) Records**:
> If you have a business email account registered through GoDaddy (e.g. Microsoft 365 or Google Workspace), **DO NOT delete or change MX or TXT (SPF/DKIM) records**. Only edit the **A** and **CNAME** records specified above.

> [!TIP]
> **DNS Propagation**:
> DNS changes in GoDaddy typically take between 5 minutes to 2 hours to propagate globally. You can verify propagation using [whatsmydns.net](https://www.whatsmydns.net/).

---

## 🔒 Verification & Security Headers Check

Once live, verify that your site returns the configured HTTP security headers:

- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

You can test your score at [securityheaders.com](https://securityheaders.com) (aiming for an A/A+ grade).
