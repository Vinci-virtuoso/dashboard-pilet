import React from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
  textarea?: boolean;
  placeholder?: string;
}

const InputField: React.FC<Props> = ({ label, value, onChange, textarea, placeholder }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border p-2 rounded-md"
        rows={4}
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border p-2 rounded-md"
      />
    )}
  </div>
);

export default InputField;
