import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({
  password,
}: PasswordStrengthProps) {
  const checks = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "Contains an uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "Contains a lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "Contains a number",
      valid: /\d/.test(password),
    },
    {
      label: "Contains a special character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const score = checks.filter((check) => check.valid).length;

  const strength =
    score <= 2 ? "Weak" : score <= 4 ? "Medium" : "Strong";

  return (
    <div className="password-strength">
      <div className="strength-heading">
        <span>Password strength</span>
        <strong>{password ? strength : "Not entered"}</strong>
      </div>

      <div className="strength-bars">
        {checks.map((check, index) => (
          <div
            key={index}
            className={`strength-bar ${check.valid ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="password-requirements">
        {checks.map((check) => (
          <div key={check.label} className="requirement">
            {check.valid ? (
              <Check size={14} />
            ) : (
              <X size={14} />
            )}
            <span>{check.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}