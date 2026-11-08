export type Language = "en" | "ar" | "fr" | "es";

export interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", label: "EN", nativeName: "English", dir: "ltr" },
  { code: "ar", label: "AR", nativeName: "العربية", dir: "rtl" },
  { code: "fr", label: "FR", nativeName: "Français", dir: "ltr" },
  { code: "es", label: "ES", nativeName: "Español", dir: "ltr" },
];

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
      langToggle: "Language",
      ariaToggle: "Select website language",
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
      langToggle: "اللغة",
      ariaToggle: "اختيار لغة الموقع",
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
  fr: {
    meta: {
      title: "Second Chance Transplant Foundation — Notre site internet arrive bientôt",
      description:
        "Il y a des moments dans la vie où le monde s'apaise. Aux côtés des patients greffés, des donneurs et des familles à travers l'attente, la guérison et le renouveau.",
    },
    masthead: {
      badge: "FONDATION EN COURS DE CRÉATION",
      notice: "Une initiative humanitaire à but non lucratif dédiée au don sacré de la vie.",
    },
    nav: {
      story: "Notre Histoire",
      journey: "Quatre Chapitres",
      connect: "Restons Connectés",
      langToggle: "Langue",
      ariaToggle: "Sélectionner la langue du site",
    },
    hero: {
      badge: "BIENTÔT DISPONIBLE",
      title: "Notre site internet arrive bientôt",
      foundationName: "Second Chance Transplant Foundation",
      tagline: "Second Chance Transplant Foundation",
      slogan: "A Second Chance A New Life",
      leadParagraph:
        "Il y a des moments dans la vie où le monde s'apaise, et où l'on retient son souffle dans l'intervalle entre l'incertitude et l'espoir. Que vous attendiez un don d'organe ou que vous soyez en voie de guérison, sachez-le : vous n'êtes jamais seul.",
      stayConnectedBtn: "Restons Connectés",
      readStoryBtn: "Lire Notre Histoire",
      scrollToStory: "Faites défiler pour lire notre histoire",
    },
    impact: {
      stat1Number: "10 Ans",
      stat1Label: "De vie renouvelée et de gratitude quotidienne",
      stat2Number: "21 Mai 2016",
      stat2Label: "Anniversaire de la greffe de foie du fondateur",
      stat3Number: "+3 650",
      stat3Label: "Matins accueillis avec une profonde reconnaissance",
      stat4Number: "100 %",
      stat4Label: "Mission humanitaire à but non lucratif",
    },
    chronicle: {
      kicker: "NOTRE HISTOIRE & NOTRE MISSION",
      date: "21 Mai 2016 — Un Chemin de Grâce",
      title: "Née d'une Seconde Chance Salvatrice",
      p1: "Il y a des moments dans la vie où le monde s'apaise, où l'on retient son souffle dans l'intervalle entre l'incertitude et l'espoir. Que vous soyez actuellement dans l'attente du don d'un organe ou que vous ayez déjà traversé l'épreuve de la guérison pour réapprendre à embrasser la vie, sachez-le : vous n'êtes jamais seul.",
      p2: "Notre histoire est née précisément de ce parcours. Notre fondateur a lui-même foulé ce chemin, recevant une greffe de foie salvatrice le 21 mai 2016. Cette expérience intime de grâce profonde, de force sereine et de renouveau est le cœur battant de tout ce que nous bâtissons. Nous savons ce que signifie regarder le monde avec un regard entièrement neuf, et nous portons cette compréhension profonde au cœur de notre vision d'avenir.",
      quoteText:
        "« Une greffe n'est jamais un simple acte médical. C'est un pont sacré entre la douleur et l'espoir, un acte profond de générosité humaine et le lever d'un tout nouveau soleil. »",
      quoteCaption: "Le Credo Vivant de la Second Chance Transplant Foundation",
      p3: "Alors que nous établissons officiellement la Second Chance Transplant Foundation, notre mission est de nous tenir à vos côtés à chaque chapitre de votre histoire. Pour ceux qui attendent, nous offrons une main ferme et une voix réconfortante. Pour ceux qui guérissent et pour les familles qui les accompagnent, nous bâtissons une communauté chaleureuse et bienveillante qui chemine avec vous pour tous les jours et années à venir.",
      p4: "Actuellement, nous développons à la fois notre site internet et notre organisation depuis leurs fondations, afin de pouvoir bientôt offrir des ressources, des conseils et un réseau de soutien dévoué pour les patients, les donneurs et leurs familles.",
      signatureName: "Second Chance Transplant Foundation",
      signatureRole: "A Second Chance A New Life",
    },
    chapters: {
      kicker: "LE CHEMIN DU RENOUVEAU",
      title: "Les Quatre Chapitres du Parcours de Transplantation",
      subtitle:
        "Une feuille de route humaine et holistique honorant chaque instant fragile et triomphant d'une seconde chance.",
      c1Number: "CHAPITRE I",
      c1Title: "L'Horizon de l'Attente",
      c1Lead: "Quand les minutes semblent des années et que l'espoir exige un courage serein.",
      c1Desc:
        "Offrir réconfort émotionnel, présence bienveillante et orientation claire aux patients et à leurs proches traversant l'épreuve de la liste d'attente.",
      c2Number: "CHAPITRE II",
      c2Title: "L'Appel à l'Aube",
      c2Lead: "Le pont sacré entre le don d'autrui et votre lendemain.",
      c2Desc:
        "Accompagner l'appel soudain, l'arrivée émouvante au bloc opératoire et le seuil sacré où la perte et la vie se rencontrent.",
      c3Number: "CHAPITRE III",
      c3Title: "Les Saisons de la Guérison",
      c3Lead: "Apprendre à regarder le monde avec des yeux entièrement neufs.",
      c3Desc:
        "Guider la convalescence, la discipline des traitements antirejet, le renouveau intérieur et célébrer chaque anniversaire de respiration retrouvée.",
      c4Number: "CHAPITRE IV",
      c4Title: "L'Héritage Sacré des Donneurs",
      c4Lead: "Gratitude éternelle envers les âmes généreuses dont le don a créé la vie.",
      c4Desc:
        "Ériger un sanctuaire d'hommage impérissable, offrir réconfort et fraternité aux familles de donneurs, et élever la noble grandeur du don d'organes.",
    },
    register: {
      kicker: "UNE INVITATION À SE CONNECTER",
      title: "Restons Connectés Avec Nous",
      subtitle:
        "Soyez parmi les premiers informés du lancement officiel de notre fondation, de nos cercles de soutien et de nos programmes d'accompagnement.",
      invitation:
        "Si notre vision touche votre cœur et si vous vous sentez appelé à marcher à nos côtés, à soutenir ce parcours ou à nous aider à accompagner d'autres personnes dès les premiers pas, veuillez renseigner vos coordonnées ci-dessous. Nous serions honorés d'entrer en contact avec vous.",
      nameLabel: "Nom complet",
      namePlaceholder: "ex. Dr Jean Dupont ou Marie Martin",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "nom@exemple.com",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "+33 6 12 34 56 78",
      messageLabel: "Message ou note (Facultatif)",
      messagePlaceholder:
        "Partagez quelques mots sur votre parcours, votre expérience ou la manière dont nous pouvons vous accompagner...",
      submitBtn: "Rester Connecté",
      submittingBtn: "Enregistrement en cours...",
      successTitle: "Votre présence est reçue avec une profonde gratitude",
      successMsg:
        "Merci d'avoir pris contact avec la Second Chance Transplant Foundation. Vos coordonnées ont été chaleureusement accueillies au sein de notre premier cercle. Nous vous tiendrons informé au fur et à mesure de l'envol de nos initiatives.",
      errorMsg:
        "Nous n'avons pas pu enregistrer vos coordonnées pour le moment. Veuillez vérifier votre connexion et réessayer.",
      privacyNotice:
        "Nous respectons votre vie privée comme un engagement sacré. Vos coordonnées ne seront jamais vendues, partagées ni utilisées à des fins commerciales.",
      anotherSubmission: "Inscrire un autre membre de la famille ou collègue",
    },
    footer: {
      foundationName: "Second Chance Transplant Foundation",
      rights: "© 2026 Second Chance Transplant Foundation. Dédié au don de la vie renouvelée.",
      tagline:
        "« Un pont sacré entre la douleur et l'espoir, un acte profond de générosité humaine et le lever d'un tout nouveau soleil. »",
      missionNote:
        "La Second Chance Transplant Foundation est une organisation humanitaire indépendante à but non lucratif, créée pour défendre et soutenir les candidats à la greffe, les receveurs, les donneurs vivants et les familles de donneurs à travers le monde.",
      craftedBy: "Conçu et développé avec soin par",
      developerName: "Bavly Hamdy",
    },
  },
  es: {
    meta: {
      title: "Second Chance Transplant Foundation — Nuestro sitio web llegará pronto",
      description:
        "Hay momentos en la vida en que el mundo se silencia. Acompañando a pacientes de trasplante, donantes y familias a través de la espera, la sanación y la renovación.",
    },
    masthead: {
      badge: "FUNDACIÓN EN FORMACIÓN",
      notice: "Una iniciativa humanitaria sin fines de lucro dedicada al don sagrado de la vida.",
    },
    nav: {
      story: "Nuestra Historia",
      journey: "Cuatro Capítulos",
      connect: "Mantente en Contacto",
      langToggle: "Idioma",
      ariaToggle: "Seleccionar idioma del sitio",
    },
    hero: {
      badge: "PRÓXIMAMENTE",
      title: "Nuestro sitio web llegará pronto",
      foundationName: "Second Chance Transplant Foundation",
      tagline: "Second Chance Transplant Foundation",
      slogan: "A Second Chance A New Life",
      leadParagraph:
        "Hay momentos en la vida en que el mundo se silencia y nos encontramos conteniendo el aliento entre la incertidumbre y la esperanza. Ya sea que estés esperando un trasplante o sanando en la otra orilla, ten por seguro: nunca estás solo.",
      stayConnectedBtn: "Mantente en Contacto",
      readStoryBtn: "Leer Nuestra Historia",
      scrollToStory: "Desplázate para leer nuestra historia",
    },
    impact: {
      stat1Number: "10 Años",
      stat1Label: "De vida renovada y gratitud diaria",
      stat2Number: "21 de Mayo de 2016",
      stat2Label: "Aniversario del trasplante de hígado del fundador",
      stat3Number: "+3.650",
      stat3Label: "Mañanas recibidas con profunda gratitud",
      stat4Number: "100%",
      stat4Label: "Misión humanitaria sin fines de lucro",
    },
    chronicle: {
      kicker: "NUESTRA HISTORIA Y MISIÓN",
      date: "21 de Mayo de 2016 — Un Camino de Gracia",
      title: "Nacida de una Segunda Oportunidad que Salvó una Vida",
      p1: "Hay momentos en la vida en que el mundo se silencia y nos encontramos conteniendo el aliento entre la incertidumbre y la esperanza. Ya sea que estés esperando el regalo de un trasplante de órganos o que ya hayas atravesado el camino de la recuperación para abrazar la vida de nuevo, ten por seguro esto: nunca estás solo.",
      p2: "Nuestra historia nació precisamente de esta travesía. Nuestro fundador recorrió este mismo camino al recibir un trasplante de hígado que le salvó la vida el 21 de mayo de 2016. Esa experiencia directa de profunda gracia, serenidad y renovación es el latido de todo lo que estamos creando. Sabemos lo que significa ver el mundo con ojos completamente nuevos, y llevamos esa profunda empatía en el corazón de nuestro futuro.",
      quoteText:
        "«Un trasplante nunca es solo un procedimiento médico. Es un puente sagrado entre el dolor y la esperanza, un acto profundo de generosidad humana y el amanecer de un nuevo sol.»",
      quoteCaption: "El Credo Vivo de la Second Chance Transplant Foundation",
      p3: "Al constituir formalmente la Second Chance Transplant Foundation, nuestra misión es estar a tu lado en cada capítulo de tu historia. Para quienes esperan, ofrecemos una mano firme y una voz de aliento. Para quienes se recuperan y para las familias que los han acompañado, estamos construyendo una comunidad cálida y solidaria que caminará contigo durante todos los días y años venideros.",
      p4: "En este momento, estamos construyendo tanto nuestro sitio web como nuestra organización desde los cimientos, para poder brindar pronto recursos, orientación y una red de apoyo para pacientes, donantes y familias.",
      signatureName: "Second Chance Transplant Foundation",
      signatureRole: "A Second Chance A New Life",
    },
    chapters: {
      kicker: "EL CAMINO DE LA RESTAURACIÓN",
      title: "Cuatro Capítulos de la Travesía del Trasplante",
      subtitle:
        "Una guía humana e integral que honra cada momento frágil y triunfante de una segunda oportunidad.",
      c1Number: "CAPÍTULO I",
      c1Title: "El Horizonte de la Espera",
      c1Lead: "Cuando los minutos parecen años y la esperanza requiere una serena valentía.",
      c1Desc:
        "Brindar fortaleza emocional, compañía constante y orientación cercana para los pacientes y seres queridos que afrontan la lista de espera.",
      c2Number: "CAPÍTULO II",
      c2Title: "La Llamada al Amanecer",
      c2Lead: "El puente sagrado entre el sacrificio de otro ser y tu mañana.",
      c2Desc:
        "Acompañar la llamada inesperada, la llegada presurosa al quirófano y ese umbral sagrado donde la pérdida y la vida se entrelazan.",
      c3Number: "CAPÍTULO III",
      c3Title: "Las Estaciones de la Sanación",
      c3Lead: "Aprender a abrazar el mundo con ojos completamente nuevos.",
      c3Desc:
        "Orientar la realidad postoperatoria, la disciplina inmunosupresora, la renovación psicológica y celebrar cada aniversario de vida renovada.",
      c4Number: "CAPÍTULO IV",
      c4Title: "El Sagrado Legado de los Donantes",
      c4Lead: "Gratitud eterna a las almas generosas cuyo don sembró vida.",
      c4Desc:
        "Construir un santuario perdurable de homenaje, extender consuelo y hermandad a las familias donantes, y enaltecer la suprema nobleza de la donación de órganos.",
    },
    register: {
      kicker: "UNA INVITACIÓN A CONECTAR",
      title: "Mantente en Contacto con Nosotros",
      subtitle:
        "Sé de los primeros en conocer el lanzamiento oficial de nuestra fundación, nuestros círculos de apoyo y los programas de orientación a pacientes.",
      invitation:
        "Si nuestra visión llega a tu corazón y sientes el llamado de caminar con nosotros, apoyar este camino o ayudarnos a acompañar a otros desde el inicio, déjanos tu nombre y datos de contacto a continuación. Nos encantará estar en contacto contigo.",
      nameLabel: "Nombre completo",
      namePlaceholder: "ej. Dr. Carlos Mendoza o María García",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "nombre@ejemplo.com",
      phoneLabel: "Número de teléfono",
      phonePlaceholder: "+34 600 000 000",
      messageLabel: "Mensaje o nota (Opcional)",
      messagePlaceholder:
        "Comparte unas palabras sobre tu historia, el camino del paciente o cómo podemos acompañarte...",
      submitBtn: "Mantener el Contacto",
      submittingBtn: "Guardando tus datos...",
      successTitle: "Recibimos tus datos con profunda gratitud",
      successMsg:
        "Gracias por comunicarte con la Second Chance Transplant Foundation. Tus datos han sido acogidos con calidez en nuestro círculo inicial. Nos pondremos en contacto contigo a medida que nuestras iniciativas cobren vida.",
      errorMsg:
        "No pudimos registrar tus datos en este momento. Por favor, revisa tu conexión e inténtalo de nuevo.",
      privacyNotice:
        "Honramos tu privacidad como un compromiso sagrado. Tu información de contacto nunca se venderá, compartirá ni utilizará con fines comerciales.",
      anotherSubmission: "Registrar a otro familiar o colega",
    },
    footer: {
      foundationName: "Second Chance Transplant Foundation",
      rights: "© 2026 Second Chance Transplant Foundation. Dedicada al don de una vida renovada.",
      tagline:
        "«Un puente sagrado entre el dolor y la esperanza, un acto profundo de generosidad humana y el amanecer de un nuevo sol.»",
      missionNote:
        "La Second Chance Transplant Foundation es una organización humanitaria independiente sin fines de lucro, establecida para acompañar a candidatos a trasplante, receptores, donantes vivos y familias de donantes en todo el mundo.",
      craftedBy: "Diseñado y desarrollado con esmero por",
      developerName: "Bavly Hamdy",
    },
  },
};
