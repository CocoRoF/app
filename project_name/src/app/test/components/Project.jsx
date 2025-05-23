import styles from '../assets/Project.module.scss';
import { PROJECTS } from '../constants/project.js';

export default function Projects() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className={styles.heading}>Abilities &amp; Experiences</h2>
        <p className={styles.headingSubtitle}>Combining technical expertise with cosmic curiosity to build stellar experiences</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {PROJECTS.map((proj) => (
            <article
              key={proj.id}
              className={`${styles.projectCard} rounded-xl overflow-hidden bg-gradient-to-br shadow-xl`}
              aria-label={proj.title}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${proj.gradient}`}>
                  {proj.title}
                </h3>
                <p className="text-gray-300 mb-4">{proj.desc}</p>
                <ul className="tech-stack flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech) => (
                    <li key={tech} className={`${styles.techStack} px-2 py-1 rounded-full text-xs font-medium`}>{tech}</li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a href={proj.modal.links?.demo || '#'} className={`${styles.demoButton} px-4 py-2 rounded-md font-medium`} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={proj.modal.links?.code || '#'} className={`${styles.codeButton} px-4 py-2 rounded-md font-medium`} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}