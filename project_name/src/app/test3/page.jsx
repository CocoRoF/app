'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CosmicProjects.module.scss'; // SCSS 별도

const PROJECTS = [
  {
    id: 'project1',
    title: 'Nebula Commerce',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-300 to-pink-300',
    overlayGradient: 'from-purple-400 to-cyan-300',
    desc: 'A cosmic dashboard for interstellar online stores with analytics and inventory management.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    modal: {
      desc: [
        'This cosmic e-commerce dashboard provides merchants with real-time analytics across the galaxy. Built with cutting-edge web technologies, it offers a responsive interface that works on all devices from Earth to Mars colonies.',
        'Features include interstellar sales tracking, quantum inventory management, alien customer segmentation, and automated reporting. The dashboard integrates with popular payment gateways across the solar system.'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux', 'Chart.js'],
      links: {
        demo: 'https://example.com/demo',
        code: 'https://github.com/example/ecommerce-dashboard'
      },
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      ]
    }
  },
  {
    id: 'project2',
    title: 'Stellar Task Manager',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-cyan-300 to-blue-300',
    overlayGradient: 'from-cyan-300 to-blue-300',
    desc: 'A zero-gravity task management tool with real-time updates and cosmic productivity analytics.',
    stack: ['Vue.js', 'Firebase', 'JavaScript', 'SCSS'],
    modal: {
      desc: [
        'Stellar Task Manager is a feature-rich productivity application designed for astronauts and space colonists. It offers task organization in zero-gravity environments, deadline tracking across time zones, and cosmic productivity analytics.',
        'The app includes unique features like automated task prioritization for low-gravity environments, time dilation calculations, and AI-powered suggestions for optimal work-rest cycles during long space voyages.'
      ],
      tech: ['Vue.js', 'Firebase', 'JavaScript', 'SCSS', 'Vuex', 'WebSockets'],
      links: {
        demo: 'https://example.com/task-manager',
        code: 'https://github.com/example/task-manager'
      },
      gallery: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
      ]
    }
  },
  {
    id: 'project3',
    title: 'Galactic FitTrack',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-pink-300 to-purple-300',
    overlayGradient: 'from-pink-300 to-purple-300',
    desc: 'An interstellar health tracker with workout plans for different gravity environments.',
    stack: ['React Native', 'Express', 'PostgreSQL', 'GraphQL'],
    modal: {
      desc: [
        'Galactic FitTrack is a comprehensive health application that helps space travelers maintain fitness across different gravity environments. The app includes specialized workout plans for zero-gravity, lunar gravity (1/6g), and Martian gravity (1/3g) environments.',
        'Features include cosmic nutrition tracking with alien food databases, radiation exposure monitoring, and sleep pattern analysis for different day-night cycles across planets and space stations.'
      ],
      tech: ['React Native', 'Express', 'PostgreSQL', 'GraphQL', 'TypeScript', 'AWS'],
      links: {
        demo: 'https://example.com/fittrack',
        code: 'https://github.com/example/fit-track'
      },
      gallery: [
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
      ]
    }
  }
];

export default function CosmicProjects() {
  const starsRef = useRef(null);

  // Twinkling stars background
  useEffect(() => {
    if (!starsRef.current) return;
    const container = starsRef.current;
    container.innerHTML = '';
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = styles.star;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 1.5 + 0.5;
      const duration = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.6 + 0.3;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--opacity', opacity);
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-x-hidden">
      {/* Twinkling Stars BG */}
      <div className={styles.stars} ref={starsRef} aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 relative">
          Cosmic Projects
          <span className={styles.underline} aria-hidden="true" />
        </h2>
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
              {/* 오버레이 및 모달 완전 삭제 */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}