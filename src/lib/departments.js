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
      "يتميز أطباؤنا بالكفاءة والفعالية في تقديم الرعاية الصحية الأولية لمرضانا والقدرة على تشخيص الأمراض المختلفة بدقة متناهية وتحويل المريض على الطبيب المختص بحالته الطبية.",
    descriptionEn:
      "Our doctors are efficient and effective in providing primary health care to our patients and has the ability to diagnose various diseases with extreme accuracy and refer the patient to physicians who specializes in medical condition.",
    servicesAr: ["فحوصات شاملة", "علاج الجروح والعمليات البسيطة", "حالات الطوارئ", "زيارات منزلية"],
    servicesEn: ["Comprehensive checkups", "Minor procedures & wound care", "Emergency care", "Home visits"]
  },
  {
    slug: "dental",
    nameAr: "الأسنان",
    nameEn: "Dental Department",
    cover: "/assets/departments/dental.jpg",
    descriptionAr:
      "نسعى في عياداتنا لتقديم أحدث الأساليب والأجهزة والمواد الطبية في علاجات الأسنان وتجميلها وتعويضها، وزراعة الأسنان على يد أخصائيين واستشاريين في طب الفم والأسنان وجراحتها.",
    descriptionEn:
      "In our clinics, we strive to provide (innovative care and specialized treatments from orthodontics to oral medicine to best suit their individual needs) with the latest methods, devices, and medical materials in dental treatments, beautification, and replace them with dental implants by the specialists and consultants in oral and dental medicine and surgery.",
    servicesAr: ["زراعة الأسنان", "تجميل الأسنان", "تبييض", "علاج اللثة والخراجات"],
    servicesEn: ["Dental implants", "Cosmetic dentistry", "Teeth whitening", "Gum & abscess treatment"]
  },
  {
    slug: "dermatology-cosmetic",
    nameAr: "الجلدية والتجميل",
    nameEn: "Dermatology & Cosmetology",
    cover: "/assets/departments/dermatology.jpg",
    descriptionAr:
      "تقديم أفضل الخدمات العلاجية والتجميلية، ونحرص على توفير الخصوصية والشفافية، ونقدم في قسم الجلدية والتجميل أحدث التقنيات وأفضل العلاجات الآمنة في المعالجة والتشخيص.",
    descriptionEn:
      "Providing the best medical and cosmetic services, and we are keen to provide privacy and transparency. In the Dermatology and Cosmetology department, we offer the latest technologies and the best safe medical care in treatment and diagnosis",
    servicesAr: ["ليزر إزالة الشعر", "بوتكس/فيلر/بلازما", "علاج حب الشباب", "إزالة الشامات والتاتو"],
    servicesEn: ["Laser hair removal", "Botox/Fillers/PRP", "Acne management", "Mole & tattoo removal"]
  },
  {
    slug: "skincare",
    nameAr: "العناية بالبشرة",
    nameEn: "Skincare",
    cover: "/assets/departments/skincare.jpg",
    descriptionAr:
      "البشرة اليافعة مطلب كل إنسان، وليس المطلب الرئيسي متى نضارة البشرة فقط، بل المحافظة عليها وإبعاد شبح معالم الشيخوخة خاصة المبكرة التي لا يكون لعاملي السن والزمان دخل فيها.",
    descriptionEn:
      "Beautiful skin is a greater signifier of youthful looks. We offer a comprehensive range of treatments which are effective solutions and regimens to the visible signs of ageing, that renews back the skin to a glowing dew.",
    servicesAr: ["تنظيف عميق", "جلسات فيتامين C", "ماسكات كولاجين", "ميزوثيرابي", "علاج البشرة الجافة"],
    servicesEn: ["Deep cleansing", "Vitamin C facials", "Collagen masks", "Mesotherapy", "Dry skin protocols"]
  },
  {
    slug: "obgyn",
    nameAr: "النساء والولادة",
    nameEn: "Obstetrics & Gynecology",
    cover: "/assets/departments/obgyn.jpg",
    descriptionAr:
      "يقدم قسم النساء والولادة خدمات نسائية شاملة لجميع مراجعِي القسم من كافة الفئات العمرية، بتوفير نخبة من أفضل الاستشاريين والأخصائيين في مجالاتهم، وتقديم أعلى مستويات الرعاية والاهتمام بالمرضى من النساء.",
    descriptionEn:
      "The Department of Obstetrics and Gynecology provides comprehensive (women's services throughout all phases of woman’s life) to all department auditors of all age groups, by providing a selection of the best consultants and specialists in their field, providing the highest levels of care and attention to women’s health needs.",
    servicesAr: ["متابعة الحمل", "علاج العقم", "كشف مبكر لأورام الثدي", "تجميل نسائي"],
    servicesEn: ["Antenatal care", "Infertility management", "Breast cancer screening", "Aesthetic gynecology"]
  },
  {
    slug: "internal-med",
    nameAr: "الباطنية",
    nameEn: "Internal Medicine",
    cover: "/assets/departments/internal-med.jpg",
    descriptionAr:
      "عيادة الباطنية في عيادات هيلثي تعمل على تشخيص وعلاج الأمراض الطارئة والمزمنة تحت إشراف أخصائيين واستشاريين.",
    descriptionEn:
      "The Internal Medicine Clinic at Healthy Clinics works on diagnosing and treating emergency and chronic diseases under the supervision of specialists and consultants.",
    servicesAr: ["السكر والضغط", "جرثومة المعدة", "أمراض القولون", "أمراض الكبد والكوليسترول"],
    servicesEn: ["Diabetes & hypertension", "H. pylori", "Colon disorders", "Liver & cholesterol"]
  },
  {
    slug: "ophthalmology",
    nameAr: "العيون",
    nameEn: "Ophthalmic Unit",
    cover: "/assets/departments/ophthalmology.jpg",
    descriptionAr:
      "العيادة مجهزة بأحدث الأجهزة التشخيصية لفحص النظر وضغط العين وفحص قاع العين، وتقوم بعمل مقاسات النظر وتصحيح الانكسار لكل الأعمار.",
    descriptionEn:
      "The clinic is equipped with the latest diagnostic equipment to check vision, eye pressure, and fundus examination, and it performs vision measurements and refractive correction for all ages.",
    servicesAr: ["فحص النظر", "ضغط العين", "قاع العين", "عيادات الليزر", "تصحيح الإبصار"],
    servicesEn: ["Vision test", "Intraocular pressure", "Fundus exam", "Laser clinics", "Refractive correction"]
  },
  {
    slug: "orthopedics",
    nameAr: "العظام والعمود الفقري",
    nameEn: "Orthopedics & Spine",
    cover: "/assets/departments/orthopedics.jpg",
    descriptionAr:
      "قسم طب العظام يوفر خدمات متعددة للمرضى الذين يعانون من مشاكل في العظام والمفاصل، وذلك باستخدام أحدث التقنيات والأساليب العلاجية، ونحرص من خلال هذا القسم على تقديم رعاية عالية الجودة.",
    descriptionEn:
      "The Department of Orthopedics provides multiple services to patients with bone & joint problems, using the latest technologies and treatment methods. Through this department, we are keen to provide high-quality care.",
    servicesAr: ["الكسور", "الانزلاق الغضروفي", "هشاشة العظام", "الروماتيزم", "عرق النساء"],
    servicesEn: ["Fractures", "Disc herniation", "Osteoporosis", "Rheumatology", "Sciatica"]
  },
  {
    slug: "physiotherapy",
    nameAr: "العلاج الطبيعي والتأهيل",
    nameEn: "Rehabilitation & Physiotherapy",
    cover: "/assets/departments/physiotherapy.jpg",
    descriptionAr:
      "ملتزمون بمساعدتك على حل آلامك والتعافي من إصاباتك، نسعى جاهدين لتحسين ذاتك من أجل الوقاية من الإصابات في المستقبل، بمساعدة أخصائيي العلاج الطبيعي ذوي الخبرة لدينا.",
    descriptionEn:
      "Committed in helping to resolve your pain and recover from your injuries, we strive to improve your performance in order to prevent future injuries with the help of our experienced physiotherapists.",
    servicesAr: ["العلاج الكهربائي", "الإبر الجافة", "تأهيل ما بعد الإصابات", "برامج وقائية"],
    servicesEn: ["Electrotherapy", "Dry needling", "Post-injury rehab", "Preventive programs"]
  },
  {
    slug: "ent",
    nameAr: "الأنف والأذن والحنجرة",
    nameEn: "ENT",
    cover: "/assets/departments/ent.jpg",
    descriptionAr:
      "يمتلك أطباء هذا القسم خبرات طويلة في تشخيص ومعالجة مشكلات أمراض الأنف والأذن والحنجرة، على قدر كبير من الاحترافية والقدرة على التعامل مع أحدث التكنولوجيا العلاجية لتخليص المرضى من معاناتهم في كل ما يتعلق بمشاكل الأنف والأذن والحنجرة.",
    descriptionEn:
      "The doctors of this department have extensive and comprehensive experience in diagnosing and treating ear, nose and throat problems with a great deal of professionalism and the ability to deal with the latest treatment technology to rid patients of their suffering in everything related to ear, nose and throat problems.",
    servicesAr: ["بحة الصوت", "الجيوب الأنفية", "طنين الأذن", "التهابات الأنف", "تقييم السمع"],
    servicesEn: ["Hoarseness", "Sinusitis", "Tinnitus", "Rhinitis", "Hearing assessment"]
  },
  {
    slug: "pediatrics",
    nameAr: "الأطفال",
    nameEn: "Pediatrics",
    cover: "/assets/departments/pediatrics.jpg",
    descriptionAr:
      "تقديم خدمة سريعة لجميع أمراض الأطفال الطارئة والمزمنة، وتقديم التحصينات اللازمة تحت إشراف استشاريين سعوديين وأخصائيين ذوي خبرة وكفاءة عالية.",
    descriptionEn:
      "We aim to provide the best healthcare we can, ensuring appropriate treatments and stress-free environment as possible with clinical areas that is bright and child-friendly spaces. Providing a quick service for all children’s emergency and chronic diseases. Providing the necessary immunizations under the supervision of Saudi consultants and specialists with high experience and competence.",
    servicesAr: ["التطعيمات", "فحوصات شاملة", "متابعة النمو", "الأمراض المزمنة"],
    servicesEn: ["Vaccinations", "Well-child checkups", "Growth monitoring", "Chronic disease care"]
  },
  {
    slug: "lab",
    nameAr: "المختبر المركزي",
    nameEn: "Central Laboratory",
    cover: "/assets/departments/lab.jpg",
    descriptionAr:
      "قسم متكامل لكافة أنواع الفحوصات، حرصنا في هذا القسم على توفير أفضل وأحدث الأجهزة الطبية لإجراء كافة التحاليل بدقة وجودة عالية، يحتوي المختبر على أحدث الأجهزة التقنية لعمل جميع أنواع التحاليل للحصول على أدق النتائج بأسرع وقت.",
    descriptionEn:
      "A complete department for all types of examinations. In this department, we are keen to provide the best and latest medical devices to perform all analysis with accuracy and high quality. The laboratory contains the latest technological devices in performing all types of analysis to obtain the most accurate results in the fastest time.",
    servicesAr: ["تحاليل فيتامينات", "سكري", "فيروسات", "روماتيزم", "تحاليل العمالة"],
    servicesEn: ["Vitamin panels", "Diabetes", "Viral tests", "Rheumatology", "Pre-employment tests"]
  },
  {
    slug: "radiology",
    nameAr: "الأشعة",
    nameEn: "Radiology",
    cover: "/assets/departments/radiology.jpg",
    descriptionAr:
      "يقدم هذا القسم الهام جدًا أغلب أنواع الأشعة التي يحتاجها المريض، وتحت كفاءات مدربة وذوي خبرة عالية.",
    descriptionEn:
      "This very important section provides most types of radiology that the patient needs, performed by highly skilled and competent workforce. This very important section provides most types of radiology that the patient needs, performed by highly skilled and competent workforce.",
    servicesAr: ["بانوراما أسنان", "أشعة عادية", "ألتراساوند", "أشعة مقطعية/رنين (حسب التجهيز)"],
    servicesEn: ["Dental panorama", "X-ray", "Ultrasound", "CT/MRI (if available)"]
  },
  {
    slug: "cssd",
    nameAr: "التعقيم المركزي",
    nameEn: "Central Sterilization",
    cover: "/assets/departments/cssd.jpg",
    descriptionAr:
      "يحتوي قسم التعقيم المركزي على أجهزة لغسل وتطهير وتعقيم جميع الأدوات والمعدات في العيادات والأقسام وتجهيزها تحت إشراف وتدريب من قسم مكافحة العدوى. يتوفر في القسم أجهزة التعقيم بالضغط والحرارة العالية وذلك حسب السياسات والمواصفات العالمية، كما تم توفير أجهزة التعقيم البارد لتعقيم الأجهزة الحساسة والصغيرة.",
    descriptionEn:
      "The central sterilization department contains devices for washing, disinfecting and sterilizing all tools and equipment. The department has devices for sterilization by pressure and high temperature, according to international policies and specifications. Cold sterilization devices have also been provided to sterilize sensitive and small devices.",
    servicesAr: ["غسل وتعقيم الأدوات", "تتبع دورات التعقيم", "ضمان الجودة"],
    servicesEn: ["Instrument cleaning & sterilization", "Cycle tracking", "Quality assurance"]
  },
  {
    slug: "dialysis",
    nameAr: "غسيل الكلى",
    nameEn: "Dialysis Unit",
    cover: "/assets/departments/dialysis.jpg",
    descriptionAr:
      "نعتني بمرضى الفشل الكلوي ونقدم لهم خدمات الغسيل يوميًا.",
    descriptionEn:
      "We care for patients with kidney failure and provide daily dialysis services. We offer hemodialysis and peritoneal dialysis treatments to a diverse group of patients who have chronic or long-term kidney failure.  ",
    servicesAr: ["غسيل دموي", "متابعة تغذوية", "مراقبة أدوية ومؤشرات حيوية"],
    servicesEn: ["Hemodialysis", "Dietary follow-up", "Medication & biomarker monitoring"]
  }
];


