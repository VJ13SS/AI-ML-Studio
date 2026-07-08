import { LuSearch } from "react-icons/lu";
import "./tools.css";
import tools from "./toolsData";
import { useState } from "react";

export default function Tools() {
  const categories = [
    "All Categories",
    ...new Set(tools.map((tool) => tool.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  // Optimized: pure filter — no mutation of original data
  const displayTools = tools.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All Categories" || tool.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="tools">
      {/* Header: search + filter */}
      <div className="tools-header">
        <div className="tools-search-input">
          <LuSearch />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Section title */}
      <div className="tools-title-block">
        <h1 className="tools-title">AI &amp; ML Tools</h1>
        <p className="tools-subtitle">Discover and explore the best AI &amp; ML tools.</p>
      </div>

      {/* Tools grid */}
      <div className="tools-container">
        {displayTools.map((tool) => (
          <div className="tool-card" key={tool.name}>
            <div className="tool-card-header">
              <img src={tool.logo} alt={tool.name} className="tool-logo" />
              <div className="tool-info">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-category">{tool.category}</span>
              </div>
            </div>
            <p className="tool-description">{tool.description}</p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-link"
            >
              Visit Website →
            </a>
          </div>
        ))}

        {displayTools.length === 0 && (
          <div className="tools-empty">
            <span>No tools found for "<strong>{searchQuery || selectedCategory}</strong>"</span>
          </div>
        )}
      </div>
    </div>
  );
}
