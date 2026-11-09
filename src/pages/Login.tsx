import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import PasswordInput from "../components/PasswordInput";
import { validateEmail, validatePassword } from "../utils/validation";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const emailResult = validateEmail(email);
    const passwordResult = validatePassword(password);

    if (!emailResult.isValid) {
      setError(emailResult.message);
      return;
    }

    if (!passwordResult.isValid) {
      setError(passwordResult.message);
      return;
    }

    setSubmitting(true);

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to sign in."
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

          <h1 className="auth-title">Welcome back</h1>

          <p className="auth-subtitle">
            Sign in to access your secure workspace.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email address</label>

              <div className="password-input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  id="email"
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
              value={password}
              onChange={setPassword}
            />

            <div style={{ textAlign: "right" }}>
              <Link className="text-link" to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            {error && (
              <p className="field-error" role="alert">
                {error}
              </p>
            )}

            <button
              className="auth-button"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register">Create one</Link>
          </p>
        </div>
      </section>

      <section className="auth-visual">
        <ShieldCheck size={42} color="#a78bfa" />
        <h2>Security meets simplicity.</h2>
        <p>
          A modern authentication experience designed
          to keep your digital workspace protected.
        </p>
      </section>
    </main>
  );
}