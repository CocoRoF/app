'use client';
import React, { useEffect, useRef } from 'react';
import styles from './assets/Main.module.scss';
import Skills from './components/Skills.jsx';
import ResearchPublications from './components/Research.jsx';
import Projects from './components/Project.jsx';

export default function CelestialExperience() {
    const starsRef = useRef([]);
    const starryBgRef = useRef(null);
    const moonRef = useRef(null);

    useEffect(() => {
        const starryBg = starryBgRef.current;

        // 1) 별 생성
        if (starryBg && starsRef.current.length === 0) {
            const tempStars = [];
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = styles.star;
                const size = Math.random() * 4 + 1.5;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                const { width: W, height: H } = starryBg.getBoundingClientRect();
                const x = Math.random() * W;
                const y = Math.random() * H;
                star.style.top = `${y}px`;
                star.style.left = `${x}px`;
                star.dataset.cx = x;
                star.dataset.cy = y;
                if (Math.random() > 0.7) star.classList.add(styles.bright);
                starryBg.appendChild(star);
                tempStars.push(star);
            }
            starsRef.current = tempStars;
        }

        // 2) Shooting Stars
        function createShootingStar() {
            if (!starryBg) return;
            const shootingStar = document.createElement('div');
            shootingStar.className = styles.shootingStar;
            const startTop = Math.random() * 90;
            const startLeft = Math.random() * 100;
            const duration = Math.random() * 4 + 2;
            shootingStar.style.top = `${startTop}%`;
            shootingStar.style.left = `${startLeft}%`;
            shootingStar.style.setProperty('--duration', `${duration}s`);
            starryBg.appendChild(shootingStar);
            setTimeout(() => {
                shootingStar.remove();
            }, duration * 1000);
        }
        const shootingInterval = setInterval(createShootingStar, 1500);

        // 3) 커서/별 proximity 이펙트
        function handleMouseMove(e) {
            const mouseX = e.clientX, mouseY = e.clientY;
            starsRef.current.forEach(star => {
                if (!star) return;
                const sx = +star.dataset.cx;
                const sy = +star.dataset.cy;
                const distance = Math.sqrt((mouseX - sx) ** 2 + (mouseY - sy) ** 2);
                if (distance < 300) {
                    const proximityEffect = 1 - (distance / 430);
                    star.style.opacity = proximityEffect;
                    star.style.transform = `scale(${1 + proximityEffect * 4})`;
                    if (star.classList.contains(styles.bright)) {
                        star.style.boxShadow = `0 0 ${10 + proximityEffect * 7}px ${2 + proximityEffect * 3}px rgba(255,255,255,1)`;
                    }
                } else {
                    star.style.opacity = '';
                    star.style.transform = '';
                    if (star.classList.contains(styles.bright)) {
                        star.style.boxShadow = '';
                    }
                }
            });
            // 달 proximity
            if (moonRef.current) {
                const moonRect = moonRef.current.getBoundingClientRect();
                const moonX = moonRect.left + moonRect.width / 2;
                const moonY = moonRect.top + moonRect.height / 2;
                const moonDistance = Math.sqrt((mouseX - moonX) ** 2 + (mouseY - moonY) ** 2);
                if (moonDistance < 100) {
                    moonRef.current.style.boxShadow =
                        `0 0 60px 25px rgba(245,245,220,0.8),0 0 120px 50px rgba(212,175,55,0.8)`;
                    moonRef.current.style.transform = 'scale(1.3)';
                } else {
                    moonRef.current.style.boxShadow = '';
                    moonRef.current.style.transform = '';
                }
            }
        }
        document.addEventListener('mousemove', handleMouseMove);

        // 4) Parallax Stars & Section Reveal
        function handleScroll() {
            const yPos = window.scrollY;
            const stars = document.querySelector(`.${styles.stars}`);
            if (stars) stars.style.transform = `translateY(${-yPos * 0.2}px)`;
            document.querySelectorAll(`.${styles.bioContainer}`).forEach(container => {
                const rect = container.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) container.classList.add(styles.visible);
            });
        }
        window.addEventListener('scroll', handleScroll);

        // 5) Milky Way 애니메이션
        const milkyWay = document.querySelector(`.${styles.milkyWay}`);
        const milkyAnim = setInterval(() => {
            if (milkyWay)
                milkyWay.style.transform = `translateX(-50%) rotate(${Math.sin(Date.now() / 5000) * 2}deg)`;
        }, 50);

        window.dispatchEvent(new Event('scroll'));

        // 클린업
        return () => {
            clearInterval(shootingInterval);
            clearInterval(milkyAnim);
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            // 별/이펙트 클린업
            if (starryBg) {
                starsRef.current.forEach(star => star.remove());
                starsRef.current = [];
            }
        };
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.starryBackground} ref={starryBgRef}>
                <div className={styles.colorfulNebula} />
                <div className={styles.stars} />
                <div className={styles.milkyWay} />
                <div className={styles.moon} ref={moonRef} />
                <div className={styles.shootingStar} style={{ top: '15%', left: '15%', '--duration': '4s' }} />
                <div className={styles.shootingStar} style={{ top: '25%', left: '65%', '--duration': '6s' }} />
                <div className={styles.shootingStar} style={{ top: '40%', left: '30%', '--duration': '5s' }} />
                <div className={styles.shootingStar} style={{ top: '60%', left: '10%', '--duration': '7s' }} />
                <div className={styles.shootingStar} style={{ top: '20%', left: '50%', '--duration': '3.5s' }} />
            </div>

            {/* Hero/프로필 소개 */}
            <section className={styles.introSection}>
                <div className={styles.profileContainer}>
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        alt="Profile"
                        className={styles.profileImage}
                    />
                    <h1 className={styles.profileName}>Alex Johnson</h1>
                    <h2 className={styles.profileTitle}>Digital Creator & Space Enthusiast</h2>
                    <p className={styles.profileMessage}>
                        Hello! I'm Alex, a passionate creator who loves blending technology with the beauty of the cosmos.
                        Through my work, I aim to inspire wonder about our universe and create immersive digital experiences.
                    </p>
                    <p className={styles.profileMessage}>
                        When I'm not coding or designing, you'll find me stargazing or reading about the latest space discoveries.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink}>📱</a>
                        <a href="#" className={styles.socialLink}>💻</a>
                        <a href="#" className={styles.socialLink}>📸</a>
                        <a href="#" className={styles.socialLink}>✉️</a>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className={styles.scrollIndicator}>
                    <span />
                    <span />
                    <span />
                </div>
            </section>

            {/* Skill Section */}
            <section className={styles.skillSection}>
                <Skills />
            </section>

            {/* === Projects 삽입 === */}
            <section className={styles.projectSection}>
                <Projects />
            </section>
            
            {/* === Research & Publications Section 삽입 === */}
            <section className={styles.section}>
                <ResearchPublications />
            </section>


            {/* Contact Section */}
            <section className={styles.section}>
                <div className={styles.bioContainer}>
                    <h2 className={styles.bioTitle}>Let's Connect</h2>
                    <p className={styles.bioText}>
                        I'm always excited to collaborate on space-related projects or discuss the wonders of the universe.
                    </p>
                    <div className="mt-8 p-6 bg-purple-900 bg-opacity-30 rounded-xl backdrop-blur-md border border-purple-700 hover:border-purple-500 transition-all duration-300">
                        <h3 className="text-xl font-light mb-4">Get In Touch</h3>
                        <p className="mb-4">Send me a message about space, tech, or anything interesting!</p>
                        <div className="flex justify-center">
                            <input type="email" placeholder="Your email"
                                className="px-4 py-2 rounded-l-lg bg-gray-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-64" />
                            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition-colors">Send</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
