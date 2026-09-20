import type { SolutionField } from "@/content/site";

const BASE_INPUT =
  "mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-gold-dark";

export default function SolutionFormField({
  field,
  value,
  onChange,
}: {
  field: SolutionField;
  value: string;
  onChange: (value: string) => void;
}) {
  const wide = field.type === "textarea" || field.type === "radio";

  return (
    <label className={`block text-sm font-medium text-navy ${wide ? "sm:col-span-2" : ""}`}>
      {field.label}
      {field.required ? <span className="text-gold-dark"> *</span> : null}

      {field.type === "select" && (
        <select
          required={field.required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={BASE_INPUT}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {field.type === "radio" && (
        <div className="mt-2 flex gap-6 text-sm font-normal text-ink">
          {field.options?.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name={field.id}
                value={option}
                checked={value === option}
                onChange={(event) => onChange(event.target.value)}
                required={field.required}
                className="h-4 w-4 accent-gold-dark"
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {field.type === "textarea" && (
        <textarea
          required={field.required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className={BASE_INPUT}
        />
      )}

      {(field.type === "text" || field.type === "email" || field.type === "tel" || field.type === "number") && (
        <input
          type={field.type}
          required={field.required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={BASE_INPUT}
        />
      )}
    </label>
  );
}
