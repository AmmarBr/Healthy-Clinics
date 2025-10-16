// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* Helper: lazy مع إمكانية الـpreload (نستخدمها لو حبّينا ندفّي الصفحة قبل الدخول) */
const lazyImport = (factory) => {
  const C = lazy(factory);
  C.preload = factory;
  return C;
};

/* ===== Lazy routes ===== */
const MainLayout    = lazyImport(() => import("./layouts/MainLayout.jsx"));
const Home          = lazyImport(() => import("./pages/Home.jsx"));
const Services      = lazyImport(() => import("./pages/Services.jsx"));
const About         = lazyImport(() => import("./pages/About.jsx"));
const Contact       = lazyImport(() => import("./pages/Contact.jsx"));
const Clinics       = lazyImport(() => import("./pages/clinics/Clinics.jsx"));
const ClinicDetails = lazyImport(() => import("./pages/clinics/ClinicDetails.jsx"));
const Doctors       = lazyImport(() => import("./pages/doctors/Doctors.jsx"));
const DoctorDetails = lazyImport(() => import("./pages/doctors/DoctorDetails.jsx"));
const NotFound      = lazyImport(() => import("./pages/NotFound.jsx"));

/* Fallback بسيط وخفيف (Skeleton) */
function PageFallback() {
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <div className="animate-pulse space-y-3 w-full max-w-3xl px-6">
        <div className="h-6 w-40 rounded bg-black/10 dark:bg-white/10" />
        <div className="h-5 w-2/3 rounded bg-black/10 dark:bg.white/10" />
        <div className="h-48 w-full rounded-xl bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="clinics/:clinicId" element={<ClinicDetails />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:doctorId" element={<DoctorDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
