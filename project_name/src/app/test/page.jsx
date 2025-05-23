import styles from './assets/Main.module.scss';
import SpaceBackground from './components/SpaceBackground.jsx';
import Intro from './components/Intro.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import ResearchPublications from './components/Research.jsx';
import Projects from './components/Project.jsx';
import SectionAnimator from './components/SectionAnimator.jsx';

export default function CelestialExperience() {
    return (
        <div className={styles.root}>
            <SpaceBackground />

            {/* Intro Section */}
            <section className={styles.introSection}>
                <Intro />
            </section>

            {/* Skill Section */}
            <SectionAnimator className={styles.skillSection}>
                <Skills />
            </SectionAnimator>

            {/* === Projects 삽입 === */}
            <SectionAnimator className={styles.projectSection}>
                <Projects />
            </SectionAnimator>

            {/* === Research & Publications Section 삽입 === */}
            <SectionAnimator className={styles.researchSection}>
                <ResearchPublications />
            </SectionAnimator>

            {/* === Contact Section 삽입 === */}
            <SectionAnimator className={styles.contactSection}>
                <Contact />
            </SectionAnimator>
        </div>
    );
}
