import Link from "next/link";
import { Award, Zap } from "lucide-react";
import { formatCurrency } from "@/utils/currency"; // Import the utility function

export default function PlanCard({ plan }) {
  return (
    <div className={`plan-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && (
        <div className="popular-badge">
          <Award size={14} className="badge-icon" /> Most Popular
        </div>
      )}

      <div className="plan-header">
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-type">{plan.type === "home" ? "Home" : "Business"} Plan</p>
      </div>

      <div className="plan-price">
        <span className="price-amount">{formatCurrency(plan.price)}</span> {/* Format price here */}
        <span className="price-period">/month</span>
      </div>

      <div className="plan-speed">
        <Zap size={18} className="speed-icon" />
        <span className="speed-label">Speed:</span>
        <span className="speed-value">{plan.speed}</span>
      </div>

      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature}
          </li>
        ))}
      </ul>

      <div className="plan-actions">
        <Link href={`/signup?plan=${plan.id}`} className="cta-button primary">
          Sign Up Now
        </Link>
        <button className="details-button">View Details</button>
      </div>
    </div>
  );
}
