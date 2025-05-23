// ResearchPublications.jsx
import React, { useState, useCallback } from "react";
import styles from "./ResearchPublications.module.scss";
import { FaFilePdf, FaChevronDown } from "react-icons/fa";

const papers = [
  {
    title: "Deep Learning Approaches for Natural Language Processing",
    authors: "Smith, J., Johnson, A., & Lee, K. (2023)",
    summary: "This paper explores state-of-the-art deep learning techniques applied to NLP tasks, comparing transformer architectures and their performance across various benchmarks. We introduce a novel attention mechanism that improves efficiency by 15%.",
    pdf: "#"
  },
  {
    title: "Quantum Computing for Optimization Problems",
    authors: "Chen, L., Wang, H., & Rodriguez, M. (2022)",
    summary: "We present a quantum algorithm that solves combinatorial optimization problems with polynomial speedup over classical methods. Experimental results on quantum hardware demonstrate practical applications for logistics and scheduling.",
    pdf: "#"
  },
  {
    title: "Ethical Considerations in AI Deployment",
    authors: "Williams, S., Brown, T., & Davis, R. (2022)",
    summary: "This interdisciplinary study examines ethical frameworks for AI systems in healthcare and criminal justice. We propose a new accountability matrix that addresses bias, transparency, and human oversight requirements.",
    pdf: "#"
  },
  {
    title: "Energy-Efficient Neural Network Architectures",
    authors: "Kim, Y., Patel, N., & Garcia, E. (2021)",
    summary: "Our research introduces a family of lightweight neural networks optimized for edge devices. The architectures reduce energy consumption by 40% while maintaining 98% of the accuracy of traditional models on image classification tasks.",
    pdf: "#"
  },
  {
    title: "Blockchain for Secure Medical Data Exchange",
    authors: "Anderson, P., Miller, K., & Wilson, J. (2021)",
    summary: "We develop a blockchain-based system for secure, decentralized medical record sharing that maintains patient privacy while enabling interoperability. The solution reduces data breaches by 72% compared to centralized alternatives.",
    pdf: "#"
  },
  {
    title: "Human-Robot Collaboration in Manufacturing",
    authors: "Zhang, Q., Thompson, R., & Martinez, L. (2020)",
    summary: "This paper presents a framework for safe and efficient human-robot collaboration in industrial settings. Our adaptive control system increases productivity by 30% while reducing workplace accidents through real-time risk assessment.",
    pdf: "#"
  },
];

const blogs = [
  {
    id: "toc1",
    title: "Getting Started with Transformer Models",
    date: "2023-05-15",
    dateDisplay: "May 15, 2023",
    toc: [
      "Introduction to Transformer Architecture",
      "Understanding Self-Attention Mechanisms",
      "Implementing a Basic Transformer in PyTorch",
      "Fine-tuning Pretrained Models",
      "Case Study: Text Classification",
    ]
  },
  {
    id: "toc2",
    title: "Explainable AI: Methods and Tools",
    date: "2023-04-22",
    dateDisplay: "April 22, 2023",
    toc: [
      "Why Explainability Matters in AI",
      "SHAP and LIME Explained",
      "Visualizing Model Decisions",
      "Implementing Explainability in Production",
      "Regulatory Considerations",
    ]
  },
  {
    id: "toc3",
    title: "Building Real-time Data Pipelines",
    date: "2023-03-10",
    dateDisplay: "March 10, 2023",
    toc: [
      "Stream Processing Fundamentals",
      "Kafka vs. Pulsar Comparison",
      "Designing for Scalability",
      "Handling Late and Out-of-Order Data",
      "Monitoring and Alerting",
    ]
  },
  {
    id: "toc4",
    title: "Advanced Python Performance Optimization",
    date: "2023-02-18",
    dateDisplay: "February 18, 2023",
    toc: [
      "Profiling Python Code",
      "Memory Management Techniques",
      "Using Cython for Critical Sections",
      "Parallel Processing with Multiprocessing",
      "Case Study: Speeding Up Data Processing",
    ]
  },
];

export default function ResearchPublications() {
  const [openToc, setOpenToc] = useState({});

  const handleToggle = useCallback((id) => {
    setOpenToc((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  return (
    <section id={styles.research} className={styles.researchSection}>
      <h2>Research &amp; Publications</h2>

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
        <h3 className={styles.sectionTitle}>Blog &amp; Tutorials</h3>
        <div className={styles.blogList}>
          {blogs.map((blog, idx) => (
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
                  {openToc[blog.id] ? "Hide Preview" : "Read Preview"}
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
