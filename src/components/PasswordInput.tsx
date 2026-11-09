import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  name?: string;
}

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter your password",
  label = "Password",
  error,
  name = "password",
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-field">
      <label htmlFor={name}>{label}</label>

      <div className={`password-input-wrapper ${error ? "has-error" : ""}`}>
        <Lock size={18} className="input-icon" />

        <input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="current-password"
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setVisible(!visible)}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="field-error">{error}</p>}
    </div>
  );
}