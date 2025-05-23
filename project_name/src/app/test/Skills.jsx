'use client';
import React, { useState, useEffect } from 'react';
import styles from './Skills.module.scss';
// Font Awesome 패키지 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const SKILL_LIST = [
    {
        key: 'web',
        color: 'indigo',
        icon: faCode,
        iconBg: 'bg-indigo-900',
        iconColor: 'text-indigo-300',
        title: 'Web Development',
        subtitle: 'Frontend Specialist',
        chevronColor: 'text-indigo-400',
        details: (
            <>
                <h4 className="font-medium text-lg mb-3 text-indigo-300">Technologies I Work With</h4>
                <ul className="space-y-2 mb-6">
                    {['React & Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((t) => (
                        <li className="flex items-center" key={t}>
                            <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                            <span>{t}</span>
                        </li>
                    ))}
                </ul>
                <h4 className="font-medium text-lg mb-3 text-indigo-300">Projects</h4>
                <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <h5 className="font-medium">Astronomy Dashboard</h5>
                        <p className="text-sm text-gray-400 mt-1">Real-time celestial event tracker</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <h5 className="font-medium">Space Education Portal</h5>
                        <p className="text-sm text-gray-400 mt-1">Interactive learning platform</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        key: 'design',
        color: 'pink',
        icon: faPaintBrush,
        iconBg: 'bg-pink-900',
        iconColor: 'text-pink-300',
        title: 'UI/UX Design',
        subtitle: 'Visual Storyteller',
        chevronColor: 'text-pink-400',
        details: (
            <>
                <h4 className="font-medium text-lg mb-3 text-pink-300">Design Approach</h4>
                <p className="mb-4 text-gray-300">
                    Creating intuitive interfaces that tell compelling stories about space and technology.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faMobileAlt} className="text-pink-400 mb-2" />
                        <h5 className="font-medium text-sm">Responsive Design</h5>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faUsers} className="text-pink-400 mb-2" />
                        <h5 className="font-medium text-sm">User Research</h5>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faPalette} className="text-pink-400 mb-2" />
                        <h5 className="font-medium text-sm">Visual Design</h5>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faProjectDiagram} className="text-pink-400 mb-2" />
                        <h5 className="font-medium text-sm">Information Architecture</h5>
                    </div>
                </div>
                <h4 className="font-medium text-lg mb-3 text-pink-300">Tools</h4>
                <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe XD', 'Sketch', 'Photoshop'].map((t) => (
                        <span key={t} className="px-3 py-1 bg-pink-900 bg-opacity-50 rounded-full text-sm">{t}</span>
                    ))}
                </div>
            </>
        ),
    },
    {
        key: 'astronomy',
        color: 'purple',
        icon: faStar,
        iconBg: 'bg-purple-900',
        iconColor: 'text-purple-300',
        title: 'Astronomy',
        subtitle: 'Amateur Astronomer',
        chevronColor: 'text-purple-400',
        details: (
            <>
                <h4 className="font-medium text-lg mb-3 text-purple-300">Areas of Interest</h4>
                <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faMeteor} className="text-purple-400 mb-2" />
                        <h5 className="font-medium">Exoplanets</h5>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faMoon} className="text-purple-400 mb-2" />
                        <h5 className="font-medium">Lunar Studies</h5>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faSatellite} className="text-purple-400 mb-2" />
                        <h5 className="font-medium">Space Tech</h5>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <FontAwesomeIcon icon={faRocket} className="text-purple-400 mb-2" />
                        <h5 className="font-medium">Astrophotography</h5>
                    </div>
                </div>
                <h4 className="font-medium text-lg mb-3 text-purple-300">Equipment</h4>
                <ul className="space-y-2 mb-6">
                    {[
                        '8" Dobsonian Telescope',
                        'Canon EOS 6D (Modified)',
                        'Various eyepieces & filters',
                    ].map((t) => (
                        <li className="flex items-center" key={t}>
                            <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                            <span>{t}</span>
                        </li>
                    ))}
                </ul>
                <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <h5 className="font-medium mb-2">Favorite Observation</h5>
                    <p className="text-sm text-gray-300">
                        Saturn's rings through my first telescope at age 12 - the moment that sparked my cosmic journey.
                    </p>
                </div>
            </>
        ),
    },
    {
        key: 'education',
        color: 'blue',
        icon: faGraduationCap,
        iconBg: 'bg-blue-900',
        iconColor: 'text-blue-300',
        title: 'Education',
        subtitle: 'Space Educator',
        chevronColor: 'text-blue-400',
        details: (
            <>
                <h4 className="font-medium text-lg mb-3 text-blue-300">Teaching Philosophy</h4>
                <p className="mb-6 text-gray-300">
                    Making complex astronomical concepts accessible through interactive digital experiences and hands-on learning.
                </p>
                <h4 className="font-medium text-lg mb-3 text-blue-300">Initiatives</h4>
                <div className="space-y-4 mb-6">
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <h5 className="font-medium">Stellar Workshops</h5>
                        <p className="text-sm text-gray-400 mt-1">Monthly astronomy sessions for students</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                        <h5 className="font-medium">Cosmic Coding</h5>
                        <p className="text-sm text-gray-400 mt-1">Teaching programming through space-themed projects</p>
                    </div>
                </div>
                <h4 className="font-medium text-lg mb-3 text-blue-300">Credentials</h4>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCertificate} className="text-blue-400 mt-1 mr-2" />
                        <div>
                            <h5 className="font-medium">Astronomy Teaching Certification</h5>
                            <p className="text-sm text-gray-400">International Astronomical Union</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faUniversity} className="text-blue-400 mt-1 mr-2" />
                        <div>
                            <h5 className="font-medium">MSc in Space Science</h5>
                            <p className="text-sm text-gray-400">University of Cosmic Studies</p>
                        </div>
                    </li>
                </ul>
            </>
        ),
    },
];

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
                    <h2 className={styles.heading}>Research &amp; Publications</h2>
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
