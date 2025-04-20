import { Filter } from "lucide-react"

export default function PlanFilters() {
  return (
    <div className="plan-filters">
      <div className="filter-group">
        <label className="filter-label">
          <Filter size={16} className="filter-icon" /> Plan Type:
        </label>
        <div className="filter-options">
          <button className="filter-option active">All</button>
          <button className="filter-option">Home</button>
          <button className="filter-option">Business</button>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">
          <Filter size={16} className="filter-icon" /> Speed:
        </label>
        <div className="filter-options">
          <button className="filter-option active">All</button>
          <button className="filter-option">Up to 100 Mbps</button>
          <button className="filter-option">Up to 500 Mbps</button>
          <button className="filter-option">1 Gbps+</button>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">
          <Filter size={16} className="filter-icon" /> Sort By:
        </label>
        <select className="filter-select">
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="speed-low">Speed: Low to High</option>
          <option value="speed-high">Speed: High to Low</option>
        </select>
      </div>
    </div>
  )
}
