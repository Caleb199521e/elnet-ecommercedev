import Link from "next/link"
import { LogIn, User, Lock } from "lucide-react"

export default function LoginForm() {
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          <User size={16} className="form-icon" /> Email
        </label>
        <input type="email" id="email" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          <Lock size={16} className="form-icon" /> Password
        </label>
        <input type="password" id="password" className="form-input" required />
      </div>

      <div className="form-options">
        <div className="remember-me">
          <input type="checkbox" id="remember" className="form-checkbox" />
          <label htmlFor="remember" className="checkbox-label">
            Remember me
          </label>
        </div>

        <Link href="/portal/forgot-password" className="forgot-password">
          Forgot password?
        </Link>
      </div>

      <button type="submit" className="form-submit">
        <LogIn size={16} className="mr-1" /> Sign In
      </button>

      <div className="form-footer">
        <p>
          Don't have an account?{" "}
          <Link href="/portal/register" className="register-link">
            Create one
          </Link>
        </p>
      </div>
    </form>
  )
}
