import PageHeader from "@/components/shared/page-header"
import LoginForm from "@/components/portal/login-form"
import PortalFeatures from "@/components/portal/portal-features"
import "@/styles/portal.css"

export default function PortalPage() {
  return (
    <main className="portal-page">
      <PageHeader title="Customer Portal" subtitle="Manage your account, pay bills, and get support" />

      <section className="portal-container">
        <div className="login-container">
          <h2>Sign In to Your Account</h2>
          <LoginForm />
        </div>

        <div className="portal-features-container">
          <h2>Portal Features</h2>
          <PortalFeatures />
        </div>
      </section>
    </main>
  )
}
