export type Language = "en" | "ar";

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    langToggle: string;
    ariaToggle: string;
    connectBtn: string;
  };
  content: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMsg: string;
    anotherBtn: string;
    errorMsg: string;
    nameRequired: string;
    contactRequired: string;
    privacyNotice: string;
  };
  footer: {
    foundationName: string;
    rights: string;
    craftedBy: string;
    developerName: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    meta: {
      title: "Second Chance Transplant Foundation — Our Mission Begins Soon",
      description:
        "Second Chance Transplant Foundation. There are moments in life when the world quiets down, and you find yourself holding your breath in the spaces between uncertainty and hope. You are never alone.",
    },
    nav: {
      langToggle: "العربية",
      ariaToggle: "Switch to Arabic language",
      connectBtn: "Stay Connected",
    },
    content: {
      kicker: "Our Mission Begins Soon",
      title: "Second Chance Transplant Foundation",
      p1: "There are moments in life when the world quiets down, and you find yourself holding your breath in the spaces between uncertainty and hope. Whether you are currently waiting for the gift of any kind of organ transplant, or you have already walked through the valley of healing and are learning how to embrace life on the other side, please know this: you are never alone.",
      p2: "Our story was born from this exact journey. Our founder walked this very path, receiving a life-saving liver transplant on May 21st, 2016. That firsthand experience of profound grace, quiet strength, and renewal is the heartbeat of everything we are creating. We know what it means to look at the world through entirely new eyes, and we carry that deep understanding into our vision for the future.",
      p3: "A transplant is never just a medical procedure. It is a sacred bridge between heartbreak and hope, a profound act of human generosity, and a brand new sunrise.",
      p4: "As we officially establish the Second Chance Transplant Foundation, our mission is to stand beside you through every chapter of your story. For those who are waiting, we will offer a steady hand and a supportive voice. For those who are recovering, and for the families who stood beside them, we are building a warm, enduring community that walks with you for all the days and years ahead.",
      p5: "Right now, we are laying the groundwork and building our digital home so we can provide resources, guidance, and a loving network for patients, donors, and families in the near future. While our website and programs are coming together, our heart and our mission are already alive and reaching out.",
      p6: "If our vision touches your heart, and if you feel called to stand with us, support this journey, or help us lift others from the very beginning, please leave your name and contact information below. We would love to connect with you.",
    },
    form: {
      nameLabel: "Name:",
      namePlaceholder: "Your full name",
      contactLabel: "Email or Phone Number:",
      contactPlaceholder: "name@example.com or phone number",
      submitBtn: "Submit / Stay Connected",
      submittingBtn: "Connecting...",
      successTitle: "Thank you for reaching out",
      successMsg: "We have received your contact information and look forward to connecting with you.",
      anotherBtn: "Submit another inquiry",
      errorMsg: "We were unable to submit your information. Please check your contact details and try again.",
      nameRequired: "Please enter your name",
      contactRequired: "Please enter a valid email or phone number",
      privacyNotice: "We honor your privacy as a sacred trust. Your information is never shared or sold.",
    },
    footer: {
      foundationName: "Second Chance Transplant Foundation",
      rights: "© 2026 Second Chance Transplant Foundation. Dedicated to the gift of renewed life.",
      craftedBy: "Crafted with care by",
      developerName: "Bavly Hamdy",
    },
  },
  ar: {
    meta: {
      title: "مؤسسة الفرصة الثانية لزراعة الأعضاء — رسالتنا تبدأ قريباً",
      description:
        "مؤسسة الفرصة الثانية لزراعة الأعضاء. هناك لحظات في الحياة يهدأ فيها العالم، وتجد نفسك تحبس أنفاسك في المساحات الفاصلة بين الحيرة والرجاء. اعلم يقيناً: أنت لست وحدك أبداً.",
    },
    nav: {
      langToggle: "English",
      ariaToggle: "التبديل إلى اللغة الإنجليزية",
      connectBtn: "ابقَ على تواصل",
    },
    content: {
      kicker: "رسالتنا تبدأ قريباً",
      title: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      p1: "هناك لحظات في الحياة يهدأ فيها العالم، وتجد نفسك تحبس أنفاسك في المساحات الفاصلة بين الحيرة والرجاء. سواء كنت تنتظر حالياً هبة زراعة أي نوع من الأعضاء، أو كنت قد عبرت بالفعل وادي الشفاء وتتعلم كيف تعانق الحياة على الجانب الآخر، اعلم يقيناً: أنت لست وحدك أبداً.",
      p2: "وُلدت قصتنا من صميم هذه الرحلة تحديداً. لقد خاض مؤسسنا هذا المسار ذاته، ونال نعمة زراعة كبد أنقذت حياته في ٢١ مايو ٢٠١٦. تلك التجربة المباشرة المفعمة بالنعمة العميقة، والقوة الهادئة، والتجدد هي نبض القلب لكل ما نقوم بإنشائه. نحن ندرك ما يعنيه أن تنظر إلى الدنيا بعينين جديدتين كلياً، ونحمل هذا الفهم العميق في رؤيتنا للمستقبل.",
      p3: "زراعة الأعضاء ليست مجرد إجراء طبي قط. بل هي جسرٌ مقدس بين الألم والأمل، وعطاءٌ إنساني فياض، وشروقُ شمسٍ لحياة جديدة تماماً.",
      p4: "مع تأسيسنا الرسمي لمؤسسة الفرصة الثانية لزراعة الأعضاء، تتمثل رسالتنا في الوقوف إلى جانبكم في كل فصل من فصول قصتكم. لكل من ينتظر، سنقدم يداً ثابتة وصوتاً داعماً. ولكل من يتعافى، وللعائلات التي وقفت إلى جانبهم، نبني مجتمعاً دافئاً ومستداماً يسير معكم في كل الأيام والسنوات المقبلة.",
      p5: "في هذه اللحظة، نضع اللبنات الأساسية ونبني صرحنا الرقمي حتى نتمكن من تقديم الموارد والتوجيه وشبكة محبة للمرضى والمتبرعين والعائلات في القريب العاجل. وبينما تتكامل صفحات موقعنا وبرامجنا، فإن قلوبنا ورسالتنا تنبض بالحياة بالفعل وتمد أيديها إليكم.",
      p6: "إذا لامست رؤيتنا وجدانك، وشعرت برغبة في الوقوف معنا، أو دعم هذه المسيرة، أو مساندتنا في مساعدة الآخرين منذ البداية الأولى، فنرجو أن تترك اسمك وبيانات التواصل الخاصة بك أدناه. يسعدنا جداً أن نتواصل معك.",
    },
    form: {
      nameLabel: "الاسم:",
      namePlaceholder: "اسمك الكريم",
      contactLabel: "البريد الإلكتروني أو رقم الهاتف:",
      contactPlaceholder: "name@example.com أو رقم هاتفك",
      submitBtn: "تسجيل / ابقَ على تواصل",
      submittingBtn: "جاري التسجيل...",
      successTitle: "استقبلنا بياناتكم بكل التقدير",
      successMsg: "شكراً لتواصلك النبيل. تم استلام بياناتك بنجاح، ويسعدنا ويشرفنا كثيراً التواصل معك قريباً.",
      anotherBtn: "تسجيل بيانات تواصل أخرى",
      errorMsg: "تعذر إرسال البيانات حالياً، يرجى التحقق من صحة البيانات والمحاولة مجدداً.",
      nameRequired: "يرجى إدخال الاسم",
      contactRequired: "يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف صالح",
      privacyNotice: "نعتبر خصوصيتكم أمانة مقدسة، ولن يتم مشاركة بياناتكم لأي أغراض تجارية أو دعائية قط.",
    },
    footer: {
      foundationName: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      rights: "© ٢٠٢٦ مؤسسة الفرصة الثانية لزراعة الأعضاء. مكرسة لهبة الحياة وتجدد الأمل.",
      craftedBy: "تصميم وتطوير بواسطة",
      developerName: "بافلي حمدي",
    },
  },
};

// Backwards compatibility alias
export const content = translations;
