"use client";

import { useState } from "react";
import { CONTACT, CONTACT_PAGE } from "@/content/site";

const BASE_INPUT =
  "mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-gold-dark";

export default function ContactForm() {
  const [values, setValues] = useState({ nombre: "", correo: "", telefono: "", mensaje: "" });

  const handleChange = (field: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const lines = [
      `Nombre: ${values.nombre.trim()}`,
      `Correo: ${values.correo.trim() || "—"}`,
      `Teléfono: ${values.telefono.trim()}`,
      "",
      values.mensaje.trim() || CONTACT_PAGE.form.whatsappIntro,
    ].join("\n");
    const url = `${CONTACT.whatsappHref}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl text-navy md:text-3xl">{CONTACT_PAGE.form.title}</h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{CONTACT_PAGE.intro}</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Nombre completo <span className="text-gold-dark">*</span>
          <input
            type="text"
            required
            value={values.nombre}
            onChange={handleChange("nombre")}
            className={BASE_INPUT}
          />
        </label>

        <label className="block text-sm font-medium text-navy">
          Teléfono <span className="text-gold-dark">*</span>
          <input
            type="tel"
            required
            value={values.telefono}
            onChange={handleChange("telefono")}
            className={BASE_INPUT}
          />
        </label>

        <label className="block text-sm font-medium text-navy sm:col-span-2">
          Correo electrónico
          <input
            type="email"
            value={values.correo}
            onChange={handleChange("correo")}
            className={BASE_INPUT}
          />
        </label>

        <label className="block text-sm font-medium text-navy sm:col-span-2">
          Mensaje
          <textarea
            rows={4}
            value={values.mensaje}
            onChange={handleChange("mensaje")}
            placeholder={CONTACT_PAGE.form.whatsappIntro}
            className={BASE_INPUT}
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition hover:bg-gold-dark hover:text-cream"
          >
            {CONTACT_PAGE.form.submitLabel}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
