"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Research.module.scss";
import { FaFilePdf, FaChevronDown } from "react-icons/fa";

const papers = [
  {
    title: "Quantum Neural Networks in Space Applications",
    authors: "Nova, S., Vega, A., & Orion, K. (2023)",
    summary:
      "Exploring quantum-enhanced neural networks for processing astronomical data. Our approach reduces computation time by 60% while maintaining 99% accuracy in galaxy classification tasks from telescope imagery.",
    pdf: "#"
  },
  {
    title: "Dark Matter Detection with AI",
    authors: "Andromeda, L., Pulsar, H., & Nebula, M. (2023)",
    summary:
      "We present a novel machine learning framework that identifies dark matter signatures in particle collision data with unprecedented sensitivity, achieving 92% detection rate at energy thresholds previously considered noise.",
    pdf: "#"
  },
  {
    title: "Interstellar Communication Protocols",
    authors: "Quasar, J., Comet, T., & Meteor, R. (2022)",
    summary:
      "This theoretical study establishes the first mathematically rigorous framework for optimal data transmission across interstellar distances, accounting for relativistic effects and cosmic background interference.",
    pdf: "#"
  },
  {
    title: "Neural Architecture Search in Zero-G",
    authors: "Cosmos, Y., Galaxy, N., & Eclipse, E. (2022)",
    summary:
      "Our experiments aboard the ISS reveal how microgravity affects the training dynamics of deep neural networks, leading to more efficient architectures that require 40% less energy for the same computational tasks.",
    pdf: "#"
  },
  {
    title: "Exoplanet Atmosphere Analysis via ML",
    authors: "Stellar, P., Aurora, K., & Supernova, A. (2021)",
    summary:
      "We develop a convolutional neural network that analyzes spectral data to predict exoplanet atmospheric composition with 89% accuracy, significantly outperforming traditional analysis methods.",
    pdf: "#"
  },
  {
    title: "Quantum Entanglement for Secure Space Comms",
    authors: "Blackhole, Q., Wormhole, W., & Singularity, S. (2021)",
    summary:
      "This paper demonstrates a practical implementation of quantum key distribution between ground stations and orbital platforms, achieving theoretically unbreakable encryption at distances up to 1200km.",
    pdf: "#"
  }
];

const blogs = [
  {
    id: "toc1",
    title: "Building Neural Networks for Astronomy",
    date: "2023-05-15",
    dateDisplay: "May 15, 2023",
    toc: [
      "Preprocessing Astronomical Image Data",
      "Handling Telescope-Specific Noise Patterns",
      "Transfer Learning from Terrestrial to Celestial Domains",
      "Case Study: Galaxy Classification",
      "Future Directions: Real-Time Analysis"
    ]
  },
  {
    id: "toc2",
    title: "Quantum Computing for Space Exploration",
    date: "2023-04-22",
    dateDisplay: "April 22, 2023",
    toc: [
      "Quantum Algorithms for Navigation",
      "Error Correction in Space Environments",
      "Comparing Quantum and Classical Approaches",
      "Hardware Considerations for Space Deployment",
      "Ethics of Quantum Space Tech"
    ]
  },
  {
    id: "toc3",
    title: "The Mathematics of Wormholes",
    date: "2023-03-10",
    dateDisplay: "March 10, 2023",
    toc: [
      "Einstein-Rosen Bridges Explained",
      "Energy Conditions and Stability",
      "Computational Simulations",
      "Practical Implications for Space Travel",
      "Current Experimental Approaches"
    ]
  },
  {
    id: "toc4",
    title: "AI-Assisted Exoplanet Discovery",
    date: "2023-02-18",
    dateDisplay: "February 18, 2023",
    toc: [
      "Automating Light Curve Analysis",
      "False Positive Reduction Techniques",
      "Machine Learning for Habitability Prediction",
      "Collaborative Human-AI Discovery Workflows",
      "Case Study: Kepler-452b"
    ]
  }
];

export default function ResearchPublications() {
  const [openToc, setOpenToc] = useState({});
  const [stars, setStars] = useState([]);

  const handleToggle = useCallback(id => {
    setOpenToc(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Floating stars 효과
  useEffect(() => {
    // 클라이언트에서만 별 생성!
    const starCount = 30;
    const newStars = Array.from({ length: starCount }).map(() => {
      const size = Math.random() * 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      const duration = Math.random() * 5 + 3;
      return { size, posX, posY, opacity, duration };
    });
    setStars(newStars);
  }, []);

  return (
    <section id={styles.research} className={styles.researchSection}>
      {/* Floating Stars */}
      <div className={styles.starsContainer} aria-hidden="true">
        {stars.map((star, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.posX}%`,
              top: `${star.posY}%`,
              opacity: star.opacity,
              animation: `${styles.twinkle} ${star.duration}s infinite`
            }}
          />
        ))}
      </div>
      {/* 메인 타이틀 */}
      <h2>Research &amp; Publications</h2>
      <p>Combining technical expertise with cosmic curiosity to build stellar experiences</p>
      <div className={styles.featuredPapers}>
        <h3 className={styles.sectionTitle}>Featured Papers</h3>
        <div className={styles.papersGrid}>
          {papers.map((paper, i) => (
            <article className={styles.paperCard} key={i}>
              <h3>{paper.title}</h3>
              <p className={styles.authors}>{paper.authors}</p>
              <p className={styles.summary}>{paper.summary}</p>
              <a
                href={paper.pdf}
                className={styles.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFilePdf /> Download PDF
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.blogTutorials}>
        <h3 className={styles.sectionTitle}>Cosmic Chronicles</h3>
        <div className={styles.blogList}>
          {blogs.map(blog => (
            <article className={styles.blogEntry} key={blog.id}>
              <h4>{blog.title}</h4>
              <time dateTime={blog.date}>{blog.dateDisplay}</time>
              <ul
                className={`${styles.toc} ${openToc[blog.id] ? styles.show : ""}`}
                id={blog.id}
                aria-hidden={!openToc[blog.id]}
              >
                {blog.toc.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <button
                className={styles.togglePreview}
                aria-expanded={!!openToc[blog.id]}
                aria-controls={blog.id}
                onClick={() => handleToggle(blog.id)}
                type="button"
              >
                <span className={styles.icon}>
                  <FaChevronDown
                    style={{
                      transition: "transform 0.3s",
                      transform: openToc[blog.id] ? "rotate(180deg)" : "rotate(0)"
                    }}
                  />
                </span>
                <span>
                  {openToc[blog.id] ? "Collapse Contents" : "Explore Contents"}
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
