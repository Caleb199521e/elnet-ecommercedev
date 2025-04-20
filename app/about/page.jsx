import PageHeader from "@/components/shared/page-header"
import "@/styles/about.css"

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageHeader title="About EL Net" subtitle="A digital-first Internet Service Provider founded in 2025" />

      <section className="about-container">
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, EL Net was born from a simple idea: internet service should be fast, reliable, and
              affordable for everyone. In a world where connectivity is essential, we saw too many people struggling
              with slow speeds, unreliable service, and poor customer support.
            </p>
            <p>
              We started with a small team of tech enthusiasts and industry veterans who shared a vision of creating a
              better internet experience. Today, we're proud to be one of the fastest-growing ISPs, serving thousands of
              satisfied customers across the country.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide fast, reliable, and affordable internet connectivity that empowers individuals and businesses
              to thrive in the digital world.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              A world where everyone has access to high-quality internet service, enabling unlimited opportunities for
              learning, working, connecting, and entertainment.
            </p>
          </div>

          <div className="about-section">
            <h2>Core Values</h2>
            <ul className="values-list">
              <li>
                <h3>Customer First</h3>
                <p>Everything we do is centered around providing the best possible experience for our customers.</p>
              </li>
              <li>
                <h3>Innovation</h3>
                <p>We continuously explore new technologies and approaches to improve our services.</p>
              </li>
              <li>
                <h3>Reliability</h3>
                <p>We understand that internet connectivity is essential, and we strive for 99.9% uptime.</p>
              </li>
              <li>
                <h3>Transparency</h3>
                <p>We believe in clear communication, straightforward pricing, and no hidden fees.</p>
              </li>
              <li>
                <h3>Accessibility</h3>
                <p>
                  We're committed to making high-quality internet accessible to everyone, regardless of location or
                  budget.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
