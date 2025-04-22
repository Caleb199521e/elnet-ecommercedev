"use client";
import { useState } from "react"; // Import useState for managing search state
import PageHeader from "@/components/shared/page-header";
import ProductDetail from "@/components/products/product-detail";
import CallToAction from "@/components/shared/call-to-action";
import "@/styles/products.css";

// Import images
const BasicRouterImage = "/assets/istockphoto-495732397-612x612.jpg";
const DualBandRouterImage = "/assets/dual-band-router.jpeg";
const MeshRouterImage = "/assets/mesh-router.jpg";
const MiFiBasicImage = "/assets/mifi-basic.jpg";
const MiFiPremiumImage = "/assets/mifi-premium.jpg";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const products = [
    {
      id: "router-basic",
      title: "Basic Wireless Router",
      description:
        "Reliable and budget-friendly router ideal for small households and light internet usage.",
      image: BasicRouterImage,
      features: ["Single-band WiFi", "300Mbps Speed", "2 LAN Ports", "Easy Installation"],
      priceFrom: 39.99,
    },
    {
      id: "router-advanced",
      title: "Dual-Band Gigabit Router",
      description:
        "Experience seamless streaming, gaming, and video conferencing with this high-performance dual-band router.",
      image: DualBandRouterImage,
      features: ["Dual-band WiFi", "1200Mbps Speed", "4 Gigabit LAN Ports", "Parental Controls"],
      priceFrom: 89.99,
    },
    {
      id: "router-mesh",
      title: "Mesh WiFi System",
      description:
        "Eliminate dead zones and enjoy full-home coverage with a scalable mesh WiFi system.",
      image: MeshRouterImage,
      features: ["Mesh Technology", "Seamless Roaming", "App Management", "Expandable Coverage"],
      priceFrom: 199.99,
    },
    {
      id: "mifi-basic",
      title: "4G LTE MiFi Device",
      description:
        "Portable 4G LTE MiFi device for fast, secure internet on the go—ideal for travelers and remote workers.",
      image: MiFiBasicImage,
      features: ["4G LTE", "Up to 10 Devices", "Battery Powered", "SIM Card Slot"],
      priceFrom: 59.99,
    },
    {
      id: "mifi-premium",
      title: "5G MiFi Hotspot",
      description:
        "Next-gen 5G MiFi hotspot offering ultra-fast speeds, low latency, and multi-device support.",
      image: MiFiPremiumImage,
      features: ["5G Connectivity", "Supports 20+ Devices", "Long Battery Life", "Touchscreen Interface"],
      priceFrom: 149.99,
    },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="products-page">
      <PageHeader title="Our Products" subtitle="Innovative devices to enhance your connectivity and lifestyle" />

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Products Section */}
      <section className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </section>

      <CallToAction
        title="Explore our full range of products"
        buttonText="Shop Now"
        buttonLink="/shop"
      />
    </main>
  );
}