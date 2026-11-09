import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Activity,
  LogOut,
  LockKeyhole,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          AUTH<span>FLOW</span>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          <LogOut size={17} />
          Sign out
        </button>
      </header>

      <section className="dashboard-welcome">
        <span className="dashboard-eyebrow">SECURE WORKSPACE</span>
        <h1>Welcome, {user?.name || "User"}.</h1>
        <p>{user?.email}</p>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <ShieldCheck size={25} />
          <h3>Account security</h3>
          <p>Email verification status.</p>
          <span className="status-label">
            {user?.emailVerified ? "Verified" : "Pending verification"}
          </span>
        </article>

        <article className="dashboard-card">
          <Users size={25} />
          <h3>User profile</h3>
          <p>Your registered account information.</p>
          <span className="status-label">Active account</span>
        </article>

        <article className="dashboard-card">
          <Activity size={25} />
          <h3>Activity</h3>
          <p>Recent account activity and sign-in history.</p>
          <span className="status-label">Coming soon</span>
        </article>

        <article className="dashboard-card">
          <LockKeyhole size={25} />
          <h3>Privacy settings</h3>
          <p>Manage account privacy and security preferences.</p>
          <span className="status-label">Coming soon</span>
        </article>
      </section>
    </main>
  );
}