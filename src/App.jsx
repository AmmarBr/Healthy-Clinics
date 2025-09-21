// src/App.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Clinics from "./pages/clinics/Clinics.jsx";
import ClinicDetails from "./pages/clinics/ClinicDetails.jsx";
import Doctors from "./pages/doctors/Doctors.jsx";
import DoctorDetails from "./pages/doctors/DoctorDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
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
  );
}
