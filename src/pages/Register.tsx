import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail } from "lucide-react";
import PasswordInput from "../components/PasswordInput";
import PasswordStrength from "../components/PasswordStrength";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validation";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    const nameResult = validateName(name);
    const emailResult = validateEmail(email);
    const passwordResult = validatePassword(password);

    if (!nameResult.isValid) {
      setError(nameResult.message);
      return;
    }

    if (!emailResult.isValid) {
      setError(emailResult.message);
      return;
    }

    if (!passwordResult.isValid) {
      setError(passwordResult.message);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      await register({ name, email, password });

      setMessage("Account created! Check your email to verify your address.");

      setTimeout(() => navigate("/login"), 2500);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to create account."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="auth-layout">
      <section className="auth-panel">
        <div className="auth-card">
          <div className="brand">
            AUTH<span>FLOW</span>
          </div>

          <h1 className="auth-title">Create your account</h1>

          <p className="auth-subtitle">
            Join AuthFlow and secure your digital workspace.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full name</label>
              <div className="password-input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  id="name"
                  className="auth-input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="register-email">Email address</label>
              <div className="password-input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  id="register-email"
                  className="auth-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <PasswordInput
              name="new-password"
              label="Password"
              value={password}
              onChange={setPassword}
            />

            <PasswordStrength password={password} />

            <PasswordInput
              name="confirm-password"
              label="Confirm password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />

            {error && (
              <p className="field-error" role="alert">{error}</p>
            )}

            {message && (
              <p className="success-message" role="status">{message}</p>
            )}

            <button
              className="auth-button"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>

      <section className="auth-visual">
        <h2>Your security starts here.</h2>
        <p>
          Create your account and experience a
          cleaner, smarter approach to authentication.
        </p>
      </section>
    </main>
  );
}