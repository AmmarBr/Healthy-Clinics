// src/lib/doctors.js
export const DOCTORS = [
  {
    id: "karim-nassar",
    nameAr: "دكتور كريم نصار",
    nameEn: "Dr. Karim Nassar",
    specialtyAr: "نائب طب وجراحه العيون",
    specialtyEn: "Ophthalmology (Deputy Ophthalmic Surgeon)",
    deptSlug: "opht",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "عضو كليه الجراحين الملكية جلاسكو - نائب طب وجراحه العيون - فحوصات العيون التخصصيه باحدث الاجهزه الطبيه للاكتشاف المبكر و اعتلال الشبكيه والمياه الزرقاء و امراض القرنيه والقرنيه المخروطية و المياه البيضاء و عمي الالوان - فحص رخصه القياده. دكتور عيون متخصص في عيون اطفال، ليزك وتصحيح الابصار والمياة البيضاء وعيون بالغين.",
    bioEn:
      "Member of the Royal College of Surgeons (Glasgow). Deputy ophthalmic surgeon. Specialized eye examinations with the latest devices for early detection of diabetic retinopathy, glaucoma, corneal diseases and keratoconus, cataract, and color blindness; driver’s license vision test. Pediatric & adult ophthalmology, LASIK and refractive surgery, cataract."
  },

  {
    id: "omar-tawfik",
    nameAr: "دكتور عمر توفيق",
    nameEn: "Dr. Omar Tawfik",
    specialtyAr: "إخصائي طب وجراحة العظام والعمود الفقري",
    specialtyEn: "Orthopedics & Spine Specialist",
    deptSlug: "ortho",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "ماجستير جراحة العظام والعمود الفقري - عضو الجمعية السويسرية لجراحة العمود الفقري - علاج حالات الكسور - آلام العظام والمفاصل - إصابات الملاعب - خشونة المفاصل - الانزلاق الغضروفي - حقن المفاصل - الحقن الموضعي للعضلات والأربطة. دكتور عظام متخصص في عظام أطفال، جراحة عظام بالغين، عظام بالغين ومناظير مفاصل.",
    bioEn:
      "MSc Orthopedic & Spine Surgery. Member of the Swiss Spine Society. Manages fractures, bone & joint pain, sports injuries, osteoarthritis, disc herniation, intra-articular injections, and trigger point injections. Adult & pediatric orthopedics and arthroscopy."
  },

  {
    id: "heba-hashim",
    nameAr: "دكتورة هبه هاشم",
    nameEn: "Dr. Heba Hashim",
    specialtyAr: "أخصائية طب الأطفال وحديثى الولادة",
    specialtyEn: "Pediatrics & Neonatology Specialist",
    deptSlug: "peds",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "اخصائية طب أطفال وحديثي الولادة - بكالوريوس الطب والجراحة جامعة الأزهر - ماجيستير طب الأطفال وحديثي الولادة جامعة الأزهر - خبرة 12 عام - تجري الفحوصات الطبية وتقييم الحالات البدنية والفسيولوجية للطفل - علاج أمراض حساسية الصدر المزمنة لدى الأطفال - فحص وتشخيص الأمراض المعدية - علاج حديثي الولادة من صعوبات التنفس والالتهابات وتقديم الرعاية اللازمة - مساعدة الأم في حل مشاكل الرضاعة الطبيعية.",
    bioEn:
      "Pediatrics & neonatology specialist, 12+ years of experience. Comprehensive pediatric assessments, management of pediatric asthma, diagnosis of infectious diseases, neonatal care for respiratory difficulties and infections, and breastfeeding guidance."
  },

  {
    id: "marwa-nabil",
    nameAr: "دكتورة مروة نبيل",
    nameEn: "Dr. Marwa Nabil",
    specialtyAr: "مقيم طب الأطفال وحديثي الولادة",
    specialtyEn: "General Pediatrics & Neonatology",
    deptSlug: "peds",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "بكالوريوس الطب والجراحة جامعة طنطا - خبرة عشر سنوات بالرياض. الكشف على جميع الأمراض المعدية وكتابة العلاج المناسب - متابعة حديثي الولادة وحالات الصفراء - المتابعة المبكرة لاضطرابات النمو والغدة الدرقية.",
    bioEn:
      "MBBS Tanta University. 10+ years in Riyadh. Manages infectious diseases, neonatal follow-up including jaundice, and early screening for growth disorders and thyroid issues."
  },

  {
    id: "may-alqurashi",
    nameAr: "دكتورة مى القرشي",
    nameEn: "Dr. Mai Al-Qurashi",
    specialtyAr: "اخصائية تقنية أشعة",
    specialtyEn: "Radiology Technologist",
    deptSlug: "xray",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr: "اخصائية تقنية أشعة. خبرة في الأشعة العامة والإجراءات الروتينية.",
    bioEn: "Radiology technologist with experience in general imaging and routine radiographic procedures."
  },

  {
    id: "sarah-nazih",
    nameAr: "دكتورة ساره نزيه",
    nameEn: "Dr. Sarah Nazih",
    specialtyAr: "أخصائي علاج طبيعي",
    specialtyEn: "Physiotherapy Specialist",
    deptSlug: "physio",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr: "أخصائي علاج طبيعي. تقييم وتأهيل حالات آلام الظهر والرقبة، إصابات الملاعب، وإعادة التأهيل بعد العمليات.",
    bioEn: "Physiotherapist specialized in assessment and rehabilitation for back/neck pain, sports injuries, and post-operative rehab."
  },

  {
    id: "salwan-hatem",
    nameAr: "دكتورة سلوان حاتم",
    nameEn: "Dr. Salwan Hatem",
    specialtyAr: "طبيب أسنان عام",
    specialtyEn: "General Dentist",
    deptSlug: "dental",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "بكالوريس طب وجراحة الفم والأسنان - خبرة أكثر من 10 سنوات بالرياض. حشوات الأسنان التجميلية، عدسات الأسنان التجميلية، تركيبات الأسنان، تنظيف اللثة والأسنان، تبييض الأسنان وتوريد اللثة بالليزر.",
    bioEn:
      "BDS, 10+ years in Riyadh. Esthetic fillings, veneers, fixed/removable prosthodontics, scaling & polishing, laser whitening and gingival depigmentation."
  },

  {
    id: "ashraf-osman",
    nameAr: "دكتور اشرف عثمان",
    nameEn: "Dr. Ashraf Osman",
    specialtyAr: "اخصائى الامراض الباطنية والسكر",
    specialtyEn: "Internal Medicine & Diabetes Specialist",
    deptSlug: "internal",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "اخصائى الامراض الباطنية والسكر - ماجيستير الباطنة العامة والجهاز الهضمي - مدرس مساعد بكلية طب الزقازيق (مصر) - الزمالة البريطانية في أمراض الباطنة - خبرة 15 عام في أمراض الباطنة والكلى وعلاج الأمراض المزمنة (الضغط، السكر، الغدة، القلب، الصدر).",
    bioEn:
      "Specialist in internal medicine & diabetes. MSc Internal Medicine & Gastroenterology. British fellowship in Internal Medicine. 15+ years’ experience managing chronic diseases (hypertension, diabetes, thyroid disorders, cardiac & respiratory conditions)."
  },

  {
    id: "malak-abdullah",
    nameAr: "دكتور ملاك عبدالله شحاته",
    nameEn: "Dr. Malak Abdullah Shahata",
    specialtyAr: "أخصائي جراحة الأنف والأذن والحنجرة والرأس والعنق",
    specialtyEn: "ENT & Head-Neck Surgery Specialist",
    deptSlug: "ent",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "أخصائي جراحة الأنف والأذن والحنجرة والرأس والعنق. دكتور أنف وأذن وحنجرة متخصص في جراحة بالغين وحالات الأنف والجيوب والأذن والحنجرة.",
    bioEn:
      "Specialist in ENT & head-neck surgery. Adult ENT surgery, nasal/sinus, ear, and laryngeal conditions."
  },

  {
    id: "thuraya-ashour",
    nameAr: "دكتورة ثريا عاشور",
    nameEn: "Dr. Thuraya Ashour",
    specialtyAr: "نائب مختبرات",
    specialtyEn: "Laboratory (Deputy Specialist)",
    deptSlug: "lab",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr: "دكتورة معامل تحاليل. تنفيذ ومراجعة الفحوصات المخبرية الروتينية والمتخصصة.",
    bioEn: "Laboratory doctor handling routine and specialized diagnostic tests and quality checks."
  },

  {
    id: "mohamed-halaby",
    nameAr: "دكتور محمد الحلبي",
    nameEn: "Dr. Mohamed El-Halaby",
    specialtyAr: "أخصائي جراحة الفم وزراعة الأسنان",
    specialtyEn: "Oral Surgery & Implant Specialist",
    deptSlug: "dental",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "عضو الجمعية المصرية لزراعة الأسنان. ماجستير جراحة الفم بكلية طب الأسنان جامعة المنصورة. متخصص في علاج اللثة، حشو وعلاج الجذور والأعصاب، تجميل الأسنان، زراعة الأسنان، التركيبات، وجراحات الوجه والفكين.",
    bioEn:
      "Member of the Egyptian Society of Dental Implants. MSc Oral Surgery (Mansoura University). Specializes in periodontics, endodontics, esthetics, dental implants, prosthodontics, and oral & maxillofacial procedures."
  },

  {
    id: "eman-nada",
    nameAr: "دكتورة ايمان ندا",
    nameEn: "Dr. Eman Nada",
    specialtyAr: "اخصائية النساء والتوليد",
    specialtyEn: "OB/GYN Specialist",
    deptSlug: "gyne",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "اخصائية النساء والتوليد - خبرة أكثر من 30 عام بالرياض. تتابع الحمل العادي وعالي المخاطر ومتابعة التبويض - متابعة متلازمة تكيسات المبايض - الإجهاض المتكرر - الالتهابات النسائية - تأخر الحمل للمرأة والرجل - متابعة فقر الدم وأنواعه - متابعة جميع الأمراض النسائية - عدم انتظام الدورة واضطراب الهرمونات - التجميل النسائي - الكشف المبكر عن سرطان عنق الرحم والثدي والفيروس الحليمي - وسائل تنظيم الحمل بأنواعها بما في ذلك اللولب الهرموني وشريحة منع الحمل.",
    bioEn:
      "OB/GYN specialist with 30+ years in Riyadh. High-risk pregnancy follow-up, ovulation tracking, PCOS management, recurrent miscarriage, infections, infertility (male & female), anemia follow-up, menstrual/ hormonal disorders, female aesthetic procedures, early screening for cervical & breast cancer (HPV), and all contraception methods including hormonal IUD and implants."
  },

  {
    id: "raneem-ahmed",
    nameAr: "دكتورة رنيم احمد",
    nameEn: "Dr. Raneem Ahmed",
    specialtyAr: "اخصائية الجلدية والتجميل والليزر",
    specialtyEn: "Dermatology, Aesthetics & Laser Specialist",
    deptSlug: "derma",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "اخصائية الجلدية والتجميل والليزر - خبرة أكثر من 10 سنوات. تعالج: حقن البوتوكس والفيلر، مشاكل تساقط الشعر، حب الشباب وآثاره، علاج الثعلبة والبهاق والصدفية، التقشير البارد والكيميائي، الميزوثيرابي والبلازما، إزالة الثآليل بالكي البارد أو الليزر.",
    bioEn:
      "Dermatology & laser specialist with 10+ years of experience. Botox & fillers, hair loss, acne & scars, alopecia, vitiligo & psoriasis, chemical/cold peels, mesotherapy & PRP, and wart removal (cryo/laser)."
  },

  {
    id: "hessa-alrashid",
    nameAr: "دكتورة حصة الرشيد",
    nameEn: "Dr. Hessa Al-Rashid",
    specialtyAr: "استشاري النساء والتوليد",
    specialtyEn: "Consultant OB/GYN",
    deptSlug: "gyne",
    phone: "+966118342222",
    email: "info@healthyclinics-sa.com",
    photo: "",
    bioAr:
      "استشاري النساء والتوليد. متابعة حالات النساء والتوليد العامة والمتقدمة وجراحة الأورام النسائية.",
    bioEn:
      "Consultant obstetrics & gynecology. General and advanced OB/GYN care and gynecologic oncology surgery."
  }
];
