"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "../assets/Research.module.scss";
import { FaFilePdf, FaChevronDown } from "react-icons/fa";
import { papers } from "../constants/papers.js";
import { blogs } from "../constants/blog.js";

export default function ResearchPublications() {
  const [openToc, setOpenToc] = useState({});
  const handleToggle = useCallback(id => {
    setOpenToc(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  return (
    <section id={styles.research} className={styles.researchSection}>
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
