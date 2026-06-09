type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: string[];
};

export function Field({ label, name, type = "text", required = false, options }: FieldProps) {
  const baseClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-[#0B4EA2]";

  return (
    <label className="block text-sm font-bold text-slate-700">
      {label}
      {options ? (
        <select name={name} required={required} className={baseClass}>
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} required={required} className={baseClass} />
      )}
    </label>
  );
}
