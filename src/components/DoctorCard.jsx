import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function DoctorCard({
  id,
  name,
  specialty,
  photo = "/assets/doctor-placeholder.jpg",
  phone,
  email,
  excerpt, // وصف قصير اختياري
}) {
  return (
    <article className="rounded-2xl overflow-hidden border bg-neutral-50 dark:bg-neutral-900
                        border-neutral-900/10 dark:border-neutral-50/10 shadow-sm hover:shadow-lg transition">
      {/* الصورة */}
      <div className="h-56 w-full overflow-hidden">
        <img src={photo} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>

      {/* الاسم + التخصص */}
      <div className="p-5 border-b border-neutral-900/10 dark:border-neutral-50/10">
        <Link
          to={`/doctors/${id}`}
          className="block text-lg font-semibold text-primary hover:opacity-90"
        >
          {name}
        </Link>
        {specialty && (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{specialty}</p>
        )}
      </div>

      {/* وصف قصير */}
      <div className="px-5 py-4 border-b border-neutral-900/10 dark:border-neutral-50/10">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-6">
          {excerpt || "Cum sociis natoque penatibus et magnis dis parturient montesmus."}
        </p>
      </div>

      {/* بيانات الاتصال */}
      <div className="px-5 py-4">
        {phone && (
          <a
            href={`tel:${phone.trim().replace(/^00/, "+").replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-3 text-sm py-1 text-neutral-800 dark:text-neutral-200"
          >
            <Phone size={16} className="shrink-0 opacity-70" />
            <span>{phone}</span>
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-sm py-1 text-neutral-800 dark:text-neutral-200"
          >
            <Mail size={16} className="shrink-0 opacity-70" />
            <span>{email}</span>
          </a>
        )}
      </div>
    </article>
  );
}
