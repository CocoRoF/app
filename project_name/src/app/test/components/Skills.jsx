'use client';
import React, { useState, useEffect } from 'react';
import styles from '../assets/Skills.module.scss';
import { SKILL_LIST } from '../constants/skills.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faPaintBrush,
    faChevronDown,
    faMobileAlt,
    faUsers,
    faPalette,
    faProjectDiagram,
    faStar,
    faMeteor,
    faMoon,
    faSatellite,
    faRocket,
    faGraduationCap,
    faCertificate,
    faUniversity,
} from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = (e) => {
        if (e.target.closest(`.${styles.skillCardContent}`)) return;
        setExpanded((v) => !v);
    };

    useEffect(() => {
        const handleDocClick = (e) => {
            if (!e.target.closest(`.${styles.skillCard}`)) {
                if (expanded) setExpanded(false);
            }
        };
        document.addEventListener('click', handleDocClick);
        return () => document.removeEventListener('click', handleDocClick);
    }, [expanded]);

    return (
        <div className="bg-transparent text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className={styles.heading}>Abilities &amp; Experiences</h2>
                    <p className={styles.headingSubtitle}>Combining technical expertise with cosmic curiosity to build stellar experiences</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="skills-container">
                    {SKILL_LIST.map((skill) => (
                        <div
                            key={skill.key}
                            className={`${styles.skillCard} skill-card bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-300 ${expanded ? styles.expanded + ' expanded' : ''
                                }`}
                            data-skill={skill.key}
                            onClick={handleCardClick}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 skill-icon ${skill.iconBg}`}>
                                    <FontAwesomeIcon icon={skill.icon} className={skill.iconColor} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                                <p className="text-gray-400">{skill.subtitle}</p>
                                <div className={`mt-4 chevron ${skill.chevronColor}`}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <div className={styles.skillCardContent + " skill-card-content"}>
                                <div className={styles.skillDetails + " skill-details"}>
                                    {skill.details}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
