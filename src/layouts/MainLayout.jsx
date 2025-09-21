import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function MainLayout() {


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="min-h-[70vh]">
        <Outlet /> {/* ← هنا هتترندر الصفحات */}    
      </main>
      <Footer />
    </div>
  );
}
