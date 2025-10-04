// src/lib/doctors.js

export const DOCTORS = [
  {
    id: 1,
    nameAr: "د. كريم نصار",
    nameEn: "Dr. Karim Nassar",
    specialtyAr: "نائب طب وجراحة العيون",
    specialtyEn: "Ophthalmology",
    bioAr: `عضو كلية الجراحين الملكية جلاسكو – أخصائي طب وجراحة العيون.
خبرة واسعة في إجراء جميع فحوصات العين (قاع العين – ضغط العين – فحص العدسات).
متخصص في علاج القرنية وجراحات المياه البيضاء والليزك.
إجراء الفحوصات الخاصة برخص القيادة.`,
    bioEn: `Member of the Royal College of Surgeons, Glasgow – Ophthalmology specialist.
Extensive experience in performing full eye examinations (fundus, eye pressure, lens tests).
Specialist in cornea treatment, cataract surgeries, and LASIK.
Conducts driving license examinations.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "ophthalmology",
    image: "/assets/doctors/karim-nassar.jpg"
  },
  {
    id: 2,
    nameAr: "د. عمر توفيق",
    nameEn: "Dr. Omar Tawfik",
    specialtyAr: "أخصائي جراحة العظام والعمود الفقري",
    specialtyEn: "Orthopedic Surgery & Spine",
    bioAr: `ماجستير جراحة العظام – جامعة الأزهر.
خبرة أكثر من 12 عامًا في تشخيص وعلاج أمراض العظام والعمود الفقري.
متخصص في علاج الانزلاق الغضروفي بدون جراحة، وعلاج خشونة الركبة.
إجراء الحقن الموضعي للعضلات والأربطة والمفاصل.`,
    bioEn: `Master’s degree in Orthopedic Surgery – Al-Azhar University.
Over 12 years of experience in diagnosing and treating bone and spine diseases.
Specialist in treating herniated discs without surgery and knee osteoarthritis.
Performs local injections for muscles, ligaments, and joints.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "orthopedic",
    image: "/assets/doctors/omar-tawfik.jpg"
  },
  {
    id: 3,
    nameAr: "د. هبة هاشم",
    nameEn: "Dr. Heba Hashem",
    specialtyAr: "أخصائية طب الأطفال وحديثي الولادة",
    specialtyEn: "Pediatrics & Neonatology",
    bioAr: `خبرة 12 عامًا في طب الأطفال وحديثي الولادة.
تشخيص وعلاج أمراض الأطفال الشائعة والمزمنة.
متابعة النمو والتطور للأطفال.
خبرة في التعامل مع الأطفال حديثي الولادة داخل الحضانات.`,
    bioEn: `12 years of experience in Pediatrics and Neonatology.
Diagnosis and treatment of common and chronic pediatric conditions.
Monitoring child growth and development.
Experienced in managing newborns in neonatal intensive care.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "pediatrics",
    image: "/assets/doctors/heba-hashem.jpg"
  },
  {
    id: 4,
    nameAr: "د. مروة نبيل",
    nameEn: "Dr. Marwa Nabil",
    specialtyAr: "مقيم طب الأطفال وحديثي الولادة",
    specialtyEn: "Pediatrics",
    bioAr: `بكالوريوس الطب والجراحة – جامعة القاهرة.
خبرة عملية في متابعة حالات الأطفال وحديثي الولادة.
متابعة التطعيمات والاضطرابات الغذائية عند الأطفال.
تشخيص مبكر لحالات الصفراء والأنيميا.`,
    bioEn: `Bachelor of Medicine and Surgery – Cairo University.
Practical experience in pediatric and neonatal care.
Monitoring vaccinations and nutritional disorders in children.
Early diagnosis of jaundice and anemia cases.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "pediatrics",
    image: "/assets/doctors/marwa-nabil.jpg"
  },
  {
    id: 5,
    nameAr: "د. محمد عبدالقادر",
    nameEn: "Dr. Mohamed Abdelkader",
    specialtyAr: "أخصائي الباطنة العامة",
    specialtyEn: "Internal Medicine",
    bioAr: `ماجستير الباطنة العامة – جامعة عين شمس.
خبرة في تشخيص وعلاج أمراض الضغط والسكر والكوليسترول.
متابعة أمراض الجهاز الهضمي والكبد.
إدارة الحالات المزمنة والأمراض المناعية.`,
    bioEn: `Master’s degree in Internal Medicine – Ain Shams University.
Experienced in diagnosing and treating hypertension, diabetes, and cholesterol disorders.
Managing gastrointestinal and liver diseases.
Specialist in chronic conditions and autoimmune diseases.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "internal-medicine",
    image: "/assets/doctors/mohamed-abdelkader.jpg"
  },
  {
    id: 6,
    nameAr: "د. أحمد يسري",
    nameEn: "Dr. Ahmed Yousry",
    specialtyAr: "أخصائي الأنف والأذن والحنجرة",
    specialtyEn: "ENT",
    bioAr: `ماجستير الأنف والأذن والحنجرة – جامعة الأزهر.
خبرة في تشخيص وعلاج أمراض الجيوب الأنفية واللوزتين.
إجراء المناظير التشخيصية والعلاجية.
خبرة في التعامل مع الأطفال والكبار.`,
    bioEn: `Master’s degree in ENT – Al-Azhar University.
Experienced in diagnosing and treating sinusitis and tonsillitis.
Performs diagnostic and therapeutic endoscopies.
Experienced in managing both pediatric and adult ENT cases.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "ent",
    image: "/assets/doctors/ahmed-yousry.jpg"
  },
  {
    id: 7,
    nameAr: "د. أحمد حلمي",
    nameEn: "Dr. Ahmed Helmy",
    specialtyAr: "أخصائي أمراض القلب",
    specialtyEn: "Cardiology",
    bioAr: `ماجستير أمراض القلب – جامعة القاهرة.
خبرة في تشخيص وعلاج أمراض الشرايين التاجية وارتفاع ضغط الدم.
إجراء تخطيط القلب بالمجهود وتصوير الإيكو.
متابعة مرضى فشل القلب واضطراب النظم.`,
    bioEn: `Master’s degree in Cardiology – Cairo University.
Experienced in diagnosing and treating coronary artery disease and hypertension.
Performs stress ECG and echocardiography.
Follows up with patients with heart failure and arrhythmias.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "cardiology",
    image: "/assets/doctors/ahmed-helmy.jpg"
  },
  {
    id: 8,
    nameAr: "د. هاني مراد",
    nameEn: "Dr. Hany Mourad",
    specialtyAr: "أخصائي المسالك البولية",
    specialtyEn: "Urology",
    bioAr: `ماجستير المسالك البولية – جامعة عين شمس.
خبرة في علاج حصوات الكلى والمثانة والبروستاتا.
إجراء المناظير البولية.
تشخيص وعلاج التهابات الجهاز البولي.`,
    bioEn: `Master’s degree in Urology – Ain Shams University.
Specialist in treating kidney, bladder, and prostate stones.
Performs urological endoscopy.
Experienced in diagnosing and managing urinary tract infections.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "urology",
    image: "/assets/doctors/hany-mourad.jpg"
  },
  {
    id: 9,
    nameAr: "د. مديحة عبدالعزيز",
    nameEn: "Dr. Madiha Abdelaziz",
    specialtyAr: "أخصائية النساء والتوليد",
    specialtyEn: "Gynecology & Obstetrics",
    bioAr: `ماجستير النساء والتوليد – جامعة عين شمس.
خبرة في متابعة الحمل والولادة.
تشخيص وعلاج تكيسات المبايض واضطرابات الدورة الشهرية.
إجراء السونار النسائي.`,
    bioEn: `Master’s degree in Gynecology and Obstetrics – Ain Shams University.
Experienced in pregnancy and delivery follow-ups.
Specialist in managing ovarian cysts and menstrual disorders.
Performs gynecological ultrasound.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "gynecology",
    image: "/assets/doctors/madiha-abdelaziz.jpg"
  },
  {
    id: 10,
    nameAr: "د. علي ناصر",
    nameEn: "Dr. Ali Nasser",
    specialtyAr: "أخصائي الجلدية",
    specialtyEn: "Dermatology",
    bioAr: `ماجستير الأمراض الجلدية – جامعة القاهرة.
تشخيص وعلاج الأمراض الجلدية الشائعة والمزمنة.
إزالة الثآليل والسنط بالتبريد والكي.
خبرة في التجميل الجلدي (حقن الفيلر والبوتكس).`,
    bioEn: `Master’s degree in Dermatology – Cairo University.
Diagnosis and treatment of common and chronic skin diseases.
Removal of warts using cryotherapy and cauterization.
Experienced in cosmetic dermatology (fillers and botox).`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "dermatology",
    image: "/assets/doctors/ali-nasser.jpg"
  },
  {
    id: 11,
    nameAr: "د. يوسف محمود",
    nameEn: "Dr. Youssef Mahmoud",
    specialtyAr: "أخصائي التخدير",
    specialtyEn: "Anesthesiology",
    bioAr: `ماجستير التخدير – جامعة الأزهر.
خبرة في جميع أنواع التخدير (العام والموضعي والنصفي).
متابعة ما بعد العمليات الجراحية.
التعامل مع الحالات الحرجة.`,
    bioEn: `Master’s degree in Anesthesiology – Al-Azhar University.
Experienced in all types of anesthesia (general, local, and regional).
Post-operative care specialist.
Manages critical cases effectively.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "anesthesiology",
    image: "/assets/doctors/youssef-mahmoud.jpg"
  },
  {
    id: 12,
    nameAr: "د. مروان حسن",
    nameEn: "Dr. Marwan Hassan",
    specialtyAr: "أخصائي الجراحة العامة",
    specialtyEn: "General Surgery",
    bioAr: `ماجستير الجراحة العامة – جامعة القاهرة.
إجراء العمليات الجراحية المختلفة.
خبرة في جراحات البطن والغدة الدرقية.
متابعة ما بعد العمليات.`,
    bioEn: `Master’s degree in General Surgery – Cairo University.
Performs a variety of surgical procedures.
Specialist in abdominal and thyroid surgeries.
Provides post-operative follow-up care.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "surgery",
    image: "/assets/doctors/marwan-hassan.jpg"
  },
  {
    id: 13,
    nameAr: "د. فاطمة علي",
    nameEn: "Dr. Fatma Ali",
    specialtyAr: "أخصائية طب الأسرة",
    specialtyEn: "Family Medicine",
    bioAr: `ماجستير طب الأسرة – جامعة عين شمس.
تشخيص ومتابعة الحالات المزمنة.
إدارة الحالات الطارئة.
خبرة في التطعيمات والفحوصات الدورية.`,
    bioEn: `Master’s degree in Family Medicine – Ain Shams University.
Diagnosis and follow-up of chronic cases.
Manages emergency situations.
Experienced in vaccinations and routine checkups.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "family-medicine",
    image: "/assets/doctors/fatma-ali.jpg"
  },
  {
    id: 14,
    nameAr: "د. سامي عبدالسلام",
    nameEn: "Dr. Sami Abdelsalam",
    specialtyAr: "أخصائي الأسنان",
    specialtyEn: "Dentistry",
    bioAr: `ماجستير طب الفم والأسنان – جامعة القاهرة.
خبرة في حشو وعلاج جذور الأسنان.
تركيبات وتجميل الأسنان.
علاج اللثة وأمراض الفم.`,
    bioEn: `Master’s degree in Dentistry – Cairo University.
Experienced in fillings and root canal treatments.
Dental prosthetics and cosmetic dentistry.
Specialist in gum treatment and oral diseases.`,
    phone: "009660118342222",
    email: "info@healthyclinics-sa.com",
    deptSlug: "dentistry",
    image: "/assets/doctors/sami-abdelsalam.jpg"
  }
];
