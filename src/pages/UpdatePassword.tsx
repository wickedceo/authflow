import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { validatePassword } from "../utils/validation";
import { supabase } from "../lib/supabase";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    const result = validatePassword(password);

    if (!result.isValid) {
      setError(result.message);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) throw error;

      setMessage("Your password has been updated successfully.");

      await supabase.auth.signOut();

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to update your password."
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

          <h1 className="auth-title">Set a new password</h1>

          <p className="auth-subtitle">
            Choose a new password for your account.
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <PasswordInput
              name="new-password"
              label="New password"
              value={password}
              onChange={setPassword}
            />

            <PasswordInput
              name="confirm-password"
              label="Confirm new password"
              placeholder="Confirm your new password"
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
              {submitting ? "Updating..." : "Update password"}
            </button>
          </form>

          <p className="auth-footer">
            <Link to="/login">Back to sign in</Link>
          </p>
        </div>
      </section>

      <section className="auth-visual">
        <h2>Take control again.</h2>
        <p>
          Secure your account with a fresh password
          and get back to your workspace.
        </p>
      </section>
    </main>
  );
}