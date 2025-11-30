import React from "react";
import "./Resources.css";

export default function Resources() {
  const constitutionParts = [
    { id: 1, title: "Part I", description: "The Union and Its Territory (Articles 1–4)" },
    { id: 2, title: "Part II", description: "Citizenship (Articles 5–11)" },
    { id: 3, title: "Part III", description: "Fundamental Rights (Articles 12–35)" },
    { id: 4, title: "Part IV", description: "Directive Principles of State Policy (Articles 36–51)" },
    { id: 5, title: "Part IVA", description: "Fundamental Duties (Article 51A)" },
  ];

  const constitutionResources = [
    {
      title: "Constitution of India (English)",
      link: "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf",
      description: "Official authenticated English version published by Government of India",
    },
    {
      title: "Constitution of India (Hindi)",
      link: "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2025/03/202503201580504504.pdf",
      description: "Official Hindi version for wider accessibility",
    },
  ];

  return (
    <div className="resources-container fade-in">
      <h1 className="resources-title">📚 Constitution of India – Learning Resources</h1>

      {/* OFFICIAL DOCUMENTS */}
      <section className="resources-section">
        <h2>📄 Official Documents</h2>
        <div className="resources-grid">
          {constitutionResources.map((res, index) => (
            <div className="resource-card lift-card" key={index}>
              <span className="resource-badge">PDF</span>
              <h3>{res.title}</h3>
              <p>{res.description}</p>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                ⬇ Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PARTS */}
      <section className="resources-section">
        <h2>📘 Parts of the Constitution</h2>
        <div className="parts-grid">
          {constitutionParts.map((part) => (
            <div className="part-card lift-card" key={part.id}>
              <span className="part-label">{part.title}</span>
              <p>{part.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL */}
      <section className="resources-section">
        <h2>✨ Additional Learning</h2>
        <ul className="resources-list">
          <li>📌 Constitutional Amendments</li>
          <li>📌 Historical Background of Indian Constitution</li>
          <li>📌 Constituent Assembly Debates</li>
          <li>📌 Landmark Supreme Court Judgments</li>
        </ul>
      </section>
    </div>
  );
}
