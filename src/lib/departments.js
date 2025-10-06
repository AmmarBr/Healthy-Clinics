// import imgladies_clob from '../assets/نادي نسائي.jpg';
// import imginternal from '../assets/علاج طبيعي.jpg';
// import imgeye from '../assets/عيون.jpg';
// import imgGeneral from '../assets/علاج طبيعي.jpg';
// import imgPharmacy from '../assets/الصيدلية.jpg';
// import imgLaboratory from '../assets/المختبر.jpg';
// import imgDialysis from '../assets/غسيل الكلى.jpg';
// import imgEmergency from '../assets/علاج طبيعي.jpg';
// import imgOrthopedics from '../assets/عظام.jpg';
// import imgDentistry from '../assets/أسنان.jpg';
// import imgObstetrics from '../assets/نساء.jpg';
// import imgPediatrics from '../assets/اطفال.jpg';
// import imgRadiology from '../assets/اشعة.jpg';
// import imgDermatology from '../assets/جلدية.jpg';
// import imgENT from '../assets/انف و اذن.jpg';
// import imgPhysiotherapy from '../assets/علاج طبيعي.jpg';
// import imgskincare from '../assets/علاج طبيعي.jpg';
export const DEPARTMENTS = [
  {
    slug: "general-er",
    nameAr: "الطب العام والطوارئ",
    nameEn: "General Medicine & Emergency",
    cover: "/assets/departments/general-er.jpg",
    descriptionAr:
      "يقدّم القسم رعاية صحية أولية وتشخيص دقيق لمختلف الحالات، مع التعامل مع الحالات الطارئة وتحويل المرضى للمتخصص المناسب.",
    descriptionEn:
      "Primary care and accurate diagnosis for a wide range of conditions, with emergency handling and proper referrals to specialists.",
    servicesAr: ["فحوصات شاملة", "علاج الجروح والعمليات البسيطة", "حالات الطوارئ", "زيارات منزلية"],
    servicesEn: ["Comprehensive checkups", "Minor procedures & wound care", "Emergency care", "Home visits"]
  },
  {
    slug: "dental",
    nameAr: "الأسنان",
    nameEn: "Dental Department",
    cover: "/assets/departments/dental.jpg",
    descriptionAr:
      "نعمل بأحدث التقنيات في تجميل وزراعة الأسنان وعلاج اللثة والخراجات بإشراف استشاريين متخصصين.",
    descriptionEn:
      "State-of-the-art dental care for implants, aesthetics, gum disease and abscesses under experienced consultants.",
    servicesAr: ["زراعة الأسنان", "تجميل الأسنان", "تبييض", "علاج اللثة والخراجات"],
    servicesEn: ["Dental implants", "Cosmetic dentistry", "Teeth whitening", "Gum & abscess treatment"]
  },
  {
    slug: "dermatology-cosmetic",
    nameAr: "الجلدية والتجميل",
    nameEn: "Dermatology & Cosmetology",
    cover: "/assets/departments/dermatology.jpg",
    descriptionAr:
      "خدمات جلدية وتجميلية متكاملة مع الحفاظ على الخصوصية واستخدام أجهزة آمنة وحديثة.",
    descriptionEn:
      "Comprehensive dermatology and cosmetic services with privacy and modern, safe equipment.",
    servicesAr: ["ليزر إزالة الشعر", "بوتكس/فيلر/بلازما", "علاج حب الشباب", "إزالة الشامات والتاتو"],
    servicesEn: ["Laser hair removal", "Botox/Fillers/PRP", "Acne management", "Mole & tattoo removal"]
  },
  {
    slug: "skincare",
    nameAr: "العناية بالبشرة",
    nameEn: "Skincare",
    cover: "/assets/departments/skincare.jpg",
    descriptionAr:
      "برامج متخصصة لنضارة البشرة وتجديدها والحد من علامات التقدّم في السن.",
    descriptionEn:
      "Targeted programs for skin glow, renewal and anti-aging.",
    servicesAr: ["تنظيف عميق", "جلسات فيتامين C", "ماسكات كولاجين", "ميزوثيرابي", "علاج البشرة الجافة"],
    servicesEn: ["Deep cleansing", "Vitamin C facials", "Collagen masks", "Mesotherapy", "Dry skin protocols"]
  },
  {
    slug: "obgyn",
    nameAr: "النساء والولادة",
    nameEn: "Obstetrics & Gynecology",
    cover: "/assets/departments/obgyn.jpg",
    descriptionAr:
      "رعاية شاملة للمرأة بجميع مراحلها العمرية بإشراف نخبة من الاستشاريين.",
    descriptionEn:
      "Comprehensive women’s health across all life stages under expert consultants.",
    servicesAr: ["متابعة الحمل", "علاج العقم", "كشف مبكر لأورام الثدي", "تجميل نسائي"],
    servicesEn: ["Antenatal care", "Infertility management", "Breast cancer screening", "Aesthetic gynecology"]
  },
  {
    slug: "internal-med",
    nameAr: "الباطنية",
    nameEn: "Internal Medicine",
    cover: "/assets/departments/internal-med.jpg",
    descriptionAr:
      "تشخيص وعلاج الأمراض المزمنة والطارئة مثل السكري والضغط وأمراض المعدة والقولون.",
    descriptionEn:
      "Diagnosis and management of chronic and acute diseases like diabetes, hypertension, and GI disorders.",
    servicesAr: ["السكر والضغط", "جرثومة المعدة", "أمراض القولون", "أمراض الكبد والكوليسترول"],
    servicesEn: ["Diabetes & hypertension", "H. pylori", "Colon disorders", "Liver & cholesterol"]
  },
  {
    slug: "ophthalmology",
    nameAr: "العيون",
    nameEn: "Ophthalmic Unit",
    cover: "/assets/departments/ophthalmology.jpg",
    descriptionAr:
      "فحوصات نظر شاملة وضغط وقاع العين، مع خيارات ليزر وتصحيح الإبصار.",
    descriptionEn:
      "Complete vision, IOP and fundus exams with laser clinics and refractive options.",
    servicesAr: ["فحص النظر", "ضغط العين", "قاع العين", "عيادات الليزر", "تصحيح الإبصار"],
    servicesEn: ["Vision test", "Intraocular pressure", "Fundus exam", "Laser clinics", "Refractive correction"]
  },
  {
    slug: "orthopedics",
    nameAr: "العظام والعمود الفقري",
    nameEn: "Orthopedics & Spine",
    cover: "/assets/departments/orthopedics.jpg",
    descriptionAr:
      "رعاية كاملة لمشاكل العظام والمفاصل والعمود الفقري باستخدام أحدث التقنيات.",
    descriptionEn:
      "Comprehensive care for bone, joint and spine conditions with modern techniques.",
    servicesAr: ["الكسور", "الانزلاق الغضروفي", "هشاشة العظام", "الروماتيزم", "عرق النساء"],
    servicesEn: ["Fractures", "Disc herniation", "Osteoporosis", "Rheumatology", "Sciatica"]
  },
  {
    slug: "physiotherapy",
    nameAr: "العلاج الطبيعي والتأهيل",
    nameEn: "Rehabilitation & Physiotherapy",
    cover: "/assets/departments/physiotherapy.jpg",
    descriptionAr:
      "علاج الألم وتحسين الحركة باستخدام أجهزة حديثة وتقنيات علاج يدوي.",
    descriptionEn:
      "Pain management and functional improvement using modern devices and manual therapy.",
    servicesAr: ["العلاج الكهربائي", "الإبر الجافة", "تأهيل ما بعد الإصابات", "برامج وقائية"],
    servicesEn: ["Electrotherapy", "Dry needling", "Post-injury rehab", "Preventive programs"]
  },
  {
    slug: "ent",
    nameAr: "الأنف والأذن والحنجرة",
    nameEn: "ENT",
    cover: "/assets/departments/ent.jpg",
    descriptionAr:
      "تشخيص وعلاج مشاكل الأنف والأذن والحنجرة بأحدث التقنيات.",
    descriptionEn:
      "Diagnosis and treatment of ear, nose and throat conditions with advanced techniques.",
    servicesAr: ["بحة الصوت", "الجيوب الأنفية", "طنين الأذن", "التهابات الأنف", "تقييم السمع"],
    servicesEn: ["Hoarseness", "Sinusitis", "Tinnitus", "Rhinitis", "Hearing assessment"]
  },
  {
    slug: "pediatrics",
    nameAr: "الأطفال",
    nameEn: "Pediatrics",
    cover: "/assets/departments/pediatrics.jpg",
    descriptionAr:
      "رعاية صحية متكاملة للأطفال من حديثي الولادة حتى المراهقة بإشراف استشاريين.",
    descriptionEn:
      "Comprehensive pediatric care from newborn to adolescence under consultants.",
    servicesAr: ["التطعيمات", "فحوصات شاملة", "متابعة النمو", "الأمراض المزمنة"],
    servicesEn: ["Vaccinations", "Well-child checkups", "Growth monitoring", "Chronic disease care"]
  },
  {
    slug: "lab",
    nameAr: "المختبر المركزي",
    nameEn: "Central Laboratory",
    cover: "/assets/departments/lab.jpg",
    descriptionAr:
      "مختبر متكامل لإجراء جميع أنواع التحاليل بدقة عالية وفق المعايير.",
    descriptionEn:
      "Fully-equipped lab delivering accurate diagnostics aligned with standards.",
    servicesAr: ["تحاليل فيتامينات", "سكري", "فيروسات", "روماتيزم", "تحاليل العمالة"],
    servicesEn: ["Vitamin panels", "Diabetes", "Viral tests", "Rheumatology", "Pre-employment tests"]
  },
  {
    slug: "radiology",
    nameAr: "الأشعة",
    nameEn: "Radiology",
    cover: "/assets/departments/radiology.jpg",
    descriptionAr:
      "قسم متخصص يقدّم جميع أنواع الأشعة باستخدام تقنيات حديثة.",
    descriptionEn:
      "Full radiology services using modern imaging technologies.",
    servicesAr: ["بانوراما أسنان", "أشعة عادية", "ألتراساوند", "أشعة مقطعية/رنين (حسب التجهيز)"],
    servicesEn: ["Dental panorama", "X-ray", "Ultrasound", "CT/MRI (if available)"]
  },
  {
    slug: "cssd",
    nameAr: "التعقيم المركزي",
    nameEn: "Central Sterilization",
    cover: "/assets/departments/cssd.jpg",
    descriptionAr:
      "تعقيم وغسل الأدوات والمعدات الطبية بأحدث الأجهزة وفق المعايير العالمية.",
    descriptionEn:
      "Central unit for cleaning and sterilizing medical instruments per global standards.",
    servicesAr: ["غسل وتعقيم الأدوات", "تتبع دورات التعقيم", "ضمان الجودة"],
    servicesEn: ["Instrument cleaning & sterilization", "Cycle tracking", "Quality assurance"]
  },
  {
    slug: "dialysis",
    nameAr: "غسيل الكلى",
    nameEn: "Dialysis Unit",
    cover: "/assets/departments/dialysis.jpg",
    descriptionAr:
      "خدمات غسيل الكلى اليومية بأحدث الأجهزة وتحت إشراف مختصين مع متابعة دقيقة للمريض.",
    descriptionEn:
      "Daily hemodialysis services with modern machines under specialist supervision and close follow-up.",
    servicesAr: ["غسيل دموي", "متابعة تغذوية", "مراقبة أدوية ومؤشرات حيوية"],
    servicesEn: ["Hemodialysis", "Dietary follow-up", "Medication & biomarker monitoring"]
  }
];


