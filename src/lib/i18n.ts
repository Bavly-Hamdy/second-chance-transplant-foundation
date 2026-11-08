export type Language = "en" | "ar";

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  masthead: {
    badge: string;
    notice: string;
  };
  nav: {
    story: string;
    journey: string;
    connect: string;
    langToggle: string;
    ariaToggle: string;
  };
  hero: {
    badge?: string;
    title: string;
    foundationName: string;
    tagline: string;
    slogan: string;
    leadParagraph: string;
    stayConnectedBtn: string;
    readStoryBtn: string;
    scrollToStory: string;
  };
  impact: {
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    stat4Number: string;
    stat4Label: string;
  };
  chronicle: {
    kicker: string;
    date: string;
    title: string;
    p1: string;
    p2: string;
    quoteText: string;
    quoteCaption: string;
    p3: string;
    p4: string;
    signatureName: string;
    signatureRole: string;
  };
  chapters: {
    kicker: string;
    title: string;
    subtitle: string;
    c1Number: string;
    c1Title: string;
    c1Lead: string;
    c1Desc: string;
    c2Number: string;
    c2Title: string;
    c2Lead: string;
    c2Desc: string;
    c3Number: string;
    c3Title: string;
    c3Lead: string;
    c3Desc: string;
    c4Number: string;
    c4Title: string;
    c4Lead: string;
    c4Desc: string;
  };
  register: {
    kicker: string;
    title: string;
    subtitle: string;
    invitation: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMsg: string;
    errorMsg: string;
    privacyNotice: string;
    anotherSubmission: string;
  };
  footer: {
    foundationName: string;
    rights: string;
    tagline: string;
    missionNote: string;
    craftedBy: string;
    developerName: string;
  };
}

export const content: Record<Language, Translations> = {
  en: {
    meta: {
      title: "Second Chance Transplant Foundation — Our Website Is Coming Soon",
      description:
        "There are moments in life when the world quiets down. Standing beside organ transplant patients, donors, and families through waiting, healing, and lifelong renewal.",
    },
    masthead: {
      badge: "FOUNDATION IN FORMATION",
      notice: "A non-profit humanitarian initiative dedicated to the sacred gift of life.",
    },
    nav: {
      story: "The Journey",
      journey: "Four Chapters",
      connect: "Stay Connected",
      langToggle: "العربية",
      ariaToggle: "Switch to Arabic language",
    },
    hero: {
      badge: "COMING SOON",
      title: "Our Website Is Coming Soon",
      foundationName: "Second Chance Transplant Foundation",
      tagline: "Second Chance Transplant Foundation",
      slogan: "A Second Chance A New Life",
      leadParagraph:
        "There are moments in life when the world quiets down, and you find yourself holding your breath in the spaces between uncertainty and hope. Whether you are waiting for the gift of an organ transplant or healing on the other side, please know: you are never alone.",
      stayConnectedBtn: "Stay Connected",
      readStoryBtn: "Read Our Story",
      scrollToStory: "Scroll to read our story",
    },
    impact: {
      stat1Number: "10 Years",
      stat1Label: "Of Renewed Life & Daily Grace",
      stat2Number: "May 21, 2016",
      stat2Label: "Founder’s Liver Transplant Anniversary",
      stat3Number: "3,650+",
      stat3Label: "Mornings Greeted with Deep Gratitude",
      stat4Number: "100%",
      stat4Label: "Humanitarian Non-Profit Mission",
    },
    chronicle: {
      kicker: "OUR STORY & MISSION",
      date: "May 21, 2016 — A Journey of Grace",
      title: "Born From a Life-Saving Second Chance",
      p1: "There are moments in life when the world quiets down, and you find yourself holding your breath in the spaces between uncertainty and hope. Whether you are currently waiting for the gift of any kind of organ transplant, or you have already walked through the valley of healing and are learning how to embrace life on the other side, please know this: you are never alone.",
      p2: "Our story was born from this exact journey. Our founder walked this very path, receiving a life-saving liver transplant on May 21st, 2016. That firsthand experience of profound grace, quiet strength, and renewal is the heartbeat of everything we are creating. We know what it means to look at the world through entirely new eyes, and we carry that deep understanding into our vision for the future.",
      quoteText:
        "“A transplant is never just a medical procedure. It is a sacred bridge between heartbreak and hope, a profound act of human generosity, and a brand new sunrise.”",
      quoteCaption: "The Living Creed of Second Chance Transplant Foundation",
      p3: "As we officially establish the Second Chance Transplant Foundation, our mission is to stand beside you through every chapter of your story. For those who are waiting, we will offer a steady hand and a supportive voice. For those who are recovering, and for the families who stood beside them, we are building a warm, enduring community that walks with you for all the days and years ahead.",
      p4: "Right now, we are in the process of building both our website and our organization from the ground up, so we can soon provide resources, guidance, and a supportive network for patients, donors, and families.",
      signatureName: "Second Chance Transplant Foundation",
      signatureRole: "Rooted in the Liver Transplant of May 21, 2016",
    },
    chapters: {
      kicker: "THE ROAD OF RESTORATION",
      title: "Four Chapters of the Transplant Journey",
      subtitle:
        "A holistic human roadmap honoring every fragile and triumphant moment of the second chance.",
      c1Number: "CHAPTER I",
      c1Title: "The Horizon of Waiting",
      c1Lead: "When minutes feel like years and hope requires quiet bravery.",
      c1Desc:
        "Offering emotional endurance, steady companionship, and reassurance for patients and loved ones enduring the harrowing transplant waiting list.",
      c2Number: "CHAPTER II",
      c2Title: "The Call at Dawn",
      c2Lead: "The sacred bridge between another’s sacrifice and your tomorrow.",
      c2Desc:
        "Navigating the sudden telephone call, the whirlwind arrival at the surgical theater, and the reverent threshold where loss and life meet.",
      c3Number: "CHAPTER III",
      c3Title: "The Seasons of Healing",
      c3Lead: "Learning to embrace the world through entirely new eyes.",
      c3Desc:
        "Guiding post-operative realities, immunosuppressive discipline, psychological renewal, and celebrating every single annual milestone of renewed breath.",
      c4Number: "CHAPTER IV",
      c4Title: "The Sacred Legacy of Donors",
      c4Lead: "Eternal gratitude to the selfless souls whose gifts created life.",
      c4Desc:
        "Building an enduring sanctuary of tribute, extending solace and lifelong fellowship to donor families, and elevating the supreme nobility of organ donation.",
    },
    register: {
      kicker: "AN INVITATION TO CONNECT",
      title: "Stay Connected With Us",
      subtitle:
        "Be among the first to hear about our official foundation launch, community support circles, and patient guidance initiatives.",
      invitation:
        "If our vision touches your heart, and if you feel called to stand with us, support this journey, or help us lift others from the very beginning, please leave your name and contact information below. We would love to connect with you.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Sarah Jenkins or Dr. Michael Vance",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+1 (555) 000-0000",
      messageLabel: "Message or Note (Optional)",
      messagePlaceholder:
        "Share a few words on your story, patient journey, or how we may stand beside you...",
      submitBtn: "Stay Connected",
      submittingBtn: "Recording Your Information...",
      successTitle: "Your Presence is Received with Gratitude",
      successMsg:
        "Thank you for reaching out to the Second Chance Transplant Foundation. Your details have been warmly noted in our early circle. We will be in touch as our initiatives take wing.",
      errorMsg:
        "We were unable to record your details at this moment. Please check your connection and try again.",
      privacyNotice:
        "We honor your privacy as a sacred trust. Your contact information is never sold, shared, or used for commercial solicitation.",
      anotherSubmission: "Register another family member or colleague",
    },
    footer: {
      foundationName: "Second Chance Transplant Foundation",
      rights: "© 2026 Second Chance Transplant Foundation. Dedicated to the gift of renewed life.",
      tagline: "“A sacred bridge between heartbreak and hope, a profound act of human generosity, and a brand new sunrise.”",
      missionNote:
        "Second Chance Transplant Foundation is an independent non-profit organization established to advocate for transplant candidates, recipients, living donors, and donor families worldwide.",
      craftedBy: "Crafted with care by",
      developerName: "Bavly Hamdy",
    },
  },
  ar: {
    meta: {
      title: "مؤسسة الفرصة الثانية لزراعة الأعضاء — موقعنا ينطلق قريباً",
      description:
        "هناك لحظات في الحياة يهدأ فيها العالم من حولك. نقف إلى جانب مرضى زراعة الأعضاء والمتبرعين الكرام وعائلاتهم في مسارات الانتظار والتعافي وبدايات الحياة المتجددة.",
    },
    masthead: {
      badge: "المؤسسة قيد التأسيس الرسمي",
      notice: "مبادرة إنسانية غير ربحية مكرسة لخدمة مرضى زراعة الأعضاء وإجلال هبة الحياة.",
    },
    nav: {
      story: "رحلتنا وقصتنا",
      journey: "فصول الأمل",
      connect: "تواصل معنا",
      langToggle: "English",
      ariaToggle: "التبديل إلى اللغة الإنجليزية",
    },
    hero: {
      badge: "قريباً",
      title: "موقعنا ينطلق قريباً",
      foundationName: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      tagline: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      slogan: "فرصة ثانية.. حياة جديدة",
      leadParagraph:
        "هناك لحظات في الحياة يهدأ فيها العالم من حولك، وتجد نفسك تحبس أنفاسك في المسافات الفاصلة بين الحيرة والرجاء. وسواء كنت تنتظر حالياً هبة زراعة أي عضو لإنقاذ حياتك، أو كنت قد اجتزت وادي الشفاء، اعلم يقيناً: أنت لست وحدك أبداً.",
      stayConnectedBtn: "تواصل معنا",
      readStoryBtn: "اقرأ قصتنا",
      scrollToStory: "التمرير لأسفل لقراءة القصة",
    },
    impact: {
      stat1Number: "١٠ أعوام",
      stat1Label: "من تجدد الحياة والامتنان اليومي",
      stat2Number: "٢١ مايو ٢٠١٦",
      stat2Label: "تاريخ زراعة الكبد التي أنقذت حياة المؤسس",
      stat3Number: "+٣,٦٥٠",
      stat3Label: "صباحاً استُقبلت بقلب ممتن ومستبشر",
      stat4Number: "١٠٠٪",
      stat4Label: "رسالة إنسانية مخلصة غير ربحية",
    },
    chronicle: {
      kicker: "قصتنا ورسالتنا الإنسانية",
      date: "٢١ مايو ٢٠١٦ — رحلة نعمة وتجدد",
      title: "وُلدت مؤسستنا من صميم هذه الرحلة",
      p1: "هناك لحظات في الحياة يهدأ فيها العالم من حولك، وتجد نفسك تحبس أنفاسك في المسافات الفاصلة بين الحيرة والرجاء. وسواء كنت تنتظر حالياً هبة زراعة أي عضو لإنقاذ حياتك، أو كنت قد اجتزت وادي الشفاء وتتعلم كيف تعانق الحياة من جديد، اعلم يقيناً: أنت لست وحدك أبداً.",
      p2: "وُلدت قصتنا من صميم هذه الرحلة الإنسانية ذاتها. لقد خاض مؤسسنا هذا الطريق خطوة بخطوة، ونال نعمة زراعة كبد أنقذت حياته في ٢١ مايو ٢٠١٦. تلك التجربة المليئة بالفضل الإلهي، والقوة الهادئة، والتجدد هي النبض الحقيقي لكل ما نبنيه اليوم. نحن ندرك حقاً ما يعنيه أن تنظر إلى الدنيا بعينين جديدتين تماماً، ونحمل هذا الفهم العميق في صميم رؤيتنا للمستقبل.",
      quoteText:
        "«زراعة الأعضاء ليست مجرد إجراء طبي قط. بل هي جسرٌ مقدس بين الألم والأمل، وعطاءٌ إنساني نبيل، وشروقُ شمسٍ ليومٍ جديد.»",
      quoteCaption: "الميثاق الإنساني لمؤسسة الفرصة الثانية لزراعة الأعضاء",
      p3: "ومع تدشيننا الرسمي لمؤسسة الفرصة الثانية لزراعة الأعضاء، تتجسد رسالتنا في الوقوف بجانبكم في كل فصل من فصول حكايتكم. فلكل من ينتظر، سنقدم اليد الثابتة والصوت الداعم. ولكل من يتعافى، وللعائلات الكريمة التي وقفت بجانبهم، نبني مجتمعاً دافئاً وممتداً يسير معكم في كل الأيام والسنوات المقبلة.",
      p4: "في الوقت الحالي، نحن في مرحلة بناء وتأسيس كل من موقعنا الإلكتروني ومؤسستنا من الصفر، حتى نتمكن قريباً من توفير الموارد والتوجيه وشبكة داعمة للمرضى والمتبرعين والعائلات.",
      signatureName: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      signatureRole: "انطلقت من نعمة زراعة الكبد (٢١ مايو ٢٠١٦)",
    },
    chapters: {
      kicker: "مسار التجدد الإنساني",
      title: "فصول الأمل الأربعة في رحلة الزراعة",
      subtitle:
        "خارطة طريق إنسانية متكاملة تجل كل لحظة من لحظات الضعف والتجلي في مسيرة الفرصة الثانية.",
      c1Number: "الفصل الأول",
      c1Title: "مسار الانتظار الصامت",
      c1Lead: "حين تُقاس الدقائق بميزان الصبر، ويتطلب الأمل شجاعة هادئة.",
      c1Desc:
        "نوفر السند النفسي والإرشادي الراسخ، والتوجيه الطبي المبسط للمرضى وذويهم وهم يخوضون فترات ترقب العضو المناسب على قوائم الانتظار.",
      c2Number: "الفصل الثاني",
      c2Title: "نداء الفجر وبشرى الشفاء",
      c2Lead: "الجسر المقدس بين عطاء المتبرع وبداية غد جديد.",
      c2Desc:
        "مرافقة الأسر في اللحظة الحاسمة لتلقي الاتصال، وساعات الوصول السريعة لغرفة العمليات، وعبور عتبة الأمل التي يلتقي فيها الفقد بالحياة.",
      c3Number: "الفصل الثالث",
      c3Title: "مواسم التعافي وتجدد الأنفاس",
      c3Lead: "تعلم معانقة الدنيا بعينين جديدتين وروح ممتنة.",
      c3Desc:
        "إرشادات التأقلم ونمط الحياة بعد الزراعة، والانضباط الدوائي الدقيق للعلاجات المناعية، والاحتفاء السنوي بذكرى تجدد العافية والصحة.",
      c4Number: "الفصل الرابع",
      c4Title: "إجلال الخلود للمتبرعين الكرام",
      c4Lead: "امتنان سرمدي لأرواح نالت شرف إحياء الأنفس وصنع المعجزة.",
      c4Desc:
        "بناء صرح تذكاري مهيب يخلد نبل المتبرعين، وتقديم كل آيات الوفاء والمواساة الدائمة لعائلاتهم التي حولت لوعة الفراق إلى نبع حياة للآخرين.",
    },
    register: {
      kicker: "دعوة كريمة للتواصل",
      title: "ابقَ على تواصل معنا",
      subtitle:
        "كن أول من يعلم بالإطلاق الرسمي لمؤسستنا، وحلقات الدعم المجتمعي، والبرامج الإرشادية لمرضى الزراعة.",
      invitation:
        "إذا لامست رؤيتنا قلبك، وشعرت برغبة في الوقوف معنا، أو دعم هذه المسيرة، أو مساعدتنا في مساندة الآخرين منذ البداية، فنرجو ترك اسمك وبيانات التواصل الخاصة بك أدناه. يسعدنا ويشرفنا كثيراً التواصل معك.",
      nameLabel: "الاسم بالكامل",
      namePlaceholder: "مثال: د. أحمد محمد أو سارة إبراهيم",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+20 100 000 0000 أو رقم هاتفك",
      messageLabel: "رسالة أو ملاحظة (اختياري)",
      messagePlaceholder: "شاركنا بكلمات موجزة عن رحلتك أو تجربتك أو كيف يمكننا مساندتك...",
      submitBtn: "تسجيل التواصل",
      submittingBtn: "جاري حفظ بياناتكم...",
      successTitle: "استقبلنا بياناتكم بكل التقدير والامتنان",
      successMsg:
        "شكراً لتواصلكم النبيل مع مؤسسة الفرصة الثانية لزراعة الأعضاء. تم تدوين بياناتكم في دائرة الأمل الأولى، وسنكون على تواصل معكم مع كل خطوة نخطوها معاً.",
      errorMsg: "تعذر حفظ البيانات في الوقت الحالي، يرجى التحقق من اتصالكم والمحاولة مجدداً.",
      privacyNotice:
        "نعتبر خصوصيتكم أمانة مقدسة. بياناتكم الشخصية مشفرة بالكامل، ولن تُشارك أو تُستخدم لأي أغراض تجارية أو دعائية قط.",
      anotherSubmission: "تسجيل بيانات فرد آخر من العائلة",
    },
    footer: {
      foundationName: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      rights: "© ٢٠٢٦ مؤسسة الفرصة الثانية لزراعة الأعضاء. مكرسة لهبة الحياة وتجدد الأمل.",
      tagline: "«جسرٌ مقدس بين الألم والأمل، وعطاءٌ إنساني نبيل، وشروقُ شمسٍ لحياة جديدة.»",
      missionNote:
        "مؤسسة الفرصة الثانية لزراعة الأعضاء هي مبادرة إنسانية غير ربحية أُسست لمساندة مرشحي ومتلقي زراعة الأعضاء، والمتبرعين الأحياء، وعائلات المتبرعين الكرام حول العالم.",
      craftedBy: "تصميم وتطوير بكل إتقان وعناية بواسطة",
      developerName: "بافلي حمدي",
    },
  },
};
