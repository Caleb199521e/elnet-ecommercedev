import PageHeader from "@/components/shared/page-header";
import PlanFilters from "@/components/plans/plan-filters";
import PlanCard from "@/components/plans/plan-card";
import { formatCurrency } from "@/utils/currency"; // Import the utility function
import "@/styles/plans.css";

export default function PlansPage() {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      type: "home",
      speed: "100 Mbps",
      price: formatCurrency(49.99), // Format price
      features: ["Unlimited data", "Free installation", "Wi-Fi router included", "24/7 customer support"],
      popular: false,
    },
    {
      id: "standard",
      name: "Standard",
      type: "home",
      speed: "500 Mbps",
      price: formatCurrency(69.99), // Format price
      features: [
        "Unlimited data",
        "Free installation",
        "Wi-Fi 6 router included",
        "24/7 priority customer support",
        "Free VoIP phone service",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Premium",
      type: "home",
      speed: "1 Gbps",
      price: formatCurrency(89.99), // Format price
      features: [
        "Unlimited data",
        "Free installation",
        "Wi-Fi 6 mesh system included",
        "24/7 priority customer support",
        "Free VoIP phone service",
        "Smart home starter kit",
      ],
      popular: false,
    },
    {
      id: "business-starter",
      name: "Business Starter",
      type: "business",
      speed: "500 Mbps",
      price: formatCurrency(99.99), // Format price
      features: [
        "Unlimited data",
        "Free installation",
        "Static IP address",
        "Business-grade router",
        "24/7 dedicated support",
        "Service level agreement",
      ],
      popular: false,
    },
    {
      id: "business-pro",
      name: "Business Pro",
      type: "business",
      speed: "2 Gbps",
      price: formatCurrency(149.99), // Format price
      features: [
        "Unlimited data",
        "Free installation",
        "Multiple static IP addresses",
        "Enterprise-grade networking equipment",
        "24/7 dedicated support with 4-hour response time",
        "Enhanced service level agreement",
        "Cloud backup solution",
      ],
      popular: false,
    },
  ];

  return (
    <main className="plans-page">
      <PageHeader title="Plans & Pricing" subtitle="Find the perfect internet plan for your home or business" />

      <PlanFilters />

      <section className="plans-container">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>
    </main>
  );
}
