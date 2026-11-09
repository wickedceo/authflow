import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { validateEmail } from "../utils/validation";
import { supabase } from "../lib/supabase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    const result = validateEmail(email);

    if (!result.isValid) {
      setError(result.message);
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;

      setMessage("If an account exists for this email, a password reset link will be sent.");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to request a password reset."
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

          <h1 className="auth-title">Forgot password?</h1>

          <p className="auth-subtitle">
            Enter your email address and we'll help you regain access.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="reset-email">Email address</label>

              <div className="password-input-wrapper">
                <Mail size={18} className="input-icon" />

                <input
                  id="reset-email"
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

            {error && (
              <p className="field-error" role="alert">{error}</p>
            )}

            {message && (
              <p className="success-message" role="status">{message}</p>
            )}

            <button className="auth-button" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Reset password"}
            </button>
          </form>

          <p className="auth-footer">
            <Link to="/login">
              <ArrowLeft size={14} /> Back to sign in
            </Link>
          </p>
        </div>
      </section>

      <section className="auth-visual">
        <h2>Access, restored.</h2>
        <p>
          A straightforward recovery experience
          built around your account security.
        </p>
      </section>
    </main>
  );
}