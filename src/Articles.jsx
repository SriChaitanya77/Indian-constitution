import React from "react";
import "./Articles.css";

// 🔻 TODO: change these file names if your images use different names
import mapCoreIndia from "./assets/map-core-india.png";
import mapAkhandaBharat from "./assets/map-akhanda-bharat.png";
import mapGreaterIndia from "./assets/map-greater-india.png";

const topics = [
  {
    id: "digital-access",
    heading: "Right to Digital Access as a Fundamental Right",
    article: "Article 21 – Right to Life and Personal Liberty",
    context:
      "The Supreme Court of India has recognised that meaningful digital access is part of the Right to Life and Personal Liberty under Article 21.",
    devImplications: [
      "Design websites and apps so that all citizens, including Persons with Disabilities (PwDs), can use them.",
      "Follow Web Content Accessibility Guidelines (WCAG) and Indian rules under the Rights of Persons with Disabilities Act, 2016.",
      "Use proper semantic HTML, ARIA labels, text alternatives for images, and keyboard navigation.",
    ],
  },
  {
    id: "privacy",
    heading: "Right to Privacy and Data Protection",
    article: "Article 21 – Justice K.S. Puttaswamy v. Union of India (2017)",
    context:
      "The Supreme Court declared privacy a fundamental right, which is the constitutional base for data protection laws in India.",
    devImplications: [
      "Implement the requirements of the Digital Personal Data Protection (DPDP) Act, 2023.",
      "Take explicit, clear consent before collecting personal data from users.",
      "Publish an easy-to-read Privacy Policy and use HTTPS, encryption and secure storage.",
    ],
  },
  {
    id: "free-speech",
    heading: "Freedom of Speech and Expression Online",
    article: "Article 19(1)(a) – Subject to reasonable restrictions",
    context:
      "Freedom of speech extends to digital and social media, but is subject to restrictions for public order, decency, security of the State and other grounds.",
    devImplications: [
      "Build content management systems with options to flag, review and remove unlawful content.",
      "Understand the due diligence obligations for intermediaries under the IT Act, 2000 and IT Rules, 2021.",
      "Keep proper logs and an admin interface for quick action on complaints.",
    ],
  },
  {
    id: "business",
    heading: "Right to Carry on Online Trade and Profession",
    article: "Article 19(1)(g) – Right to practice any profession or business",
    context:
      "Online businesses, e-commerce platforms and freelancers are protected under Article 19(1)(g), subject to reasonable regulation by the State.",
    devImplications: [
      "Follow consumer protection rules for e-commerce, including clear pricing, refund and grievance mechanisms.",
      "Respect intellectual property rights – copyright for code, design and content; trademarks for logos and brand names.",
      "Comply with electronic contract and digital signature provisions under the IT Act, 2000.",
    ],
  },
  {
    id: "gigw",
    heading: "Government Websites and GIGW Compliance",
    article: "Guidelines for Indian Government Websites (GIGW)",
    context:
      "For government and public sector projects, GIGW prescribes standards for accessibility, security, usability and use of the State Emblem of India.",
    devImplications: [
      "Follow GIGW checklists for information architecture, accessibility, performance and security.",
      "Use consistent visual identity, fonts, colours and emblem usage as mandated.",
      "Ensure regular security audits, content review and uptime monitoring for citizen services.",
    ],
  },
];

export default function Articles() {
  return (
    <div className="articles-page">
      {/* Hero / Intro */}
      <header className="articles-hero">
        <h1>Web Development & the Indian Constitution</h1>
        <p className="articles-hero-sub">
          How digital products in India must respect Fundamental Rights, data
          protection and legal compliance under the Constitution and the IT Act, 2000.
        </p>
      </header>

      {/* Main content – topics */}
      <main className="articles-main">
        {topics.map((topic) => (
          <section key={topic.id} className="article-card">
            <h2 className="article-heading">{topic.heading}</h2>
            <p className="article-meta">{topic.article}</p>

            <p className="article-context">
              <strong>Constitutional Context: </strong>
              {topic.context}
            </p>

            <div className="article-dev">
              <h3>Implications for Web Developers</h3>
              <ul>
                {topic.devImplications.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>

      {/* Animated India maps section */}
      <section className="maps-section">
        <h2 className="maps-heading">भारत – Different Constitutional & Cultural Views</h2>
        <p className="maps-sub">
          Visualising India in different historical and cultural outlines. These maps are
          for educational understanding of regional context in South Asia.
        </p>

        <div className="maps-row">
          <div className="map-card map-card-left">
            {/* 🔻 TODO: change image file name in import at the top if needed */}
            <img src={mapCoreIndia} alt="Core India outline" />
            <p className="map-label">भारत (Core India)</p>
          </div>

          <div className="map-card map-card-center">
            {/* 🔻 TODO: change image file name in import at the top if needed */}
            <img src={mapAkhandaBharat} alt="Akhanda Bharat outline" />
            <p className="map-label">अखण्ड भारत (Akhanda Bharat)</p>
          </div>

          <div className="map-card map-card-right">
            {/* 🔻 TODO: change image file name in import at the top if needed */}
            <img src={mapGreaterIndia} alt="Greater India / Cultural India outline" />
            <p className="map-label">विस्तृत भारत (Greater India)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
