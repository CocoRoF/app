'use client';
import React, { useEffect, useRef } from 'react';
import styles from '../assets/SpaceBackground.module.scss';

export default function SpaceBackground() {
    const starsRef = useRef([]);
    const starryBgRef = useRef(null);
    const moonRef = useRef(null);

    useEffect(() => {
        const starryBg = starryBgRef.current;
        if (!starryBg) return;

        if (starsRef.current.length === 0) {
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

        function handleScroll() {
            const yPos = window.scrollY;
            const stars = starryBg.querySelector(`.${styles.stars}`);
            if (stars) stars.style.transform = `translateY(${-yPos * 0.2}px)`;
        }
        window.addEventListener('scroll', handleScroll);

        const milkyWay = starryBg.querySelector(`.${styles.milkyWay}`);
        const milkyAnim = setInterval(() => {
            if (milkyWay)
                milkyWay.style.transform = `translateX(-50%) rotate(${Math.sin(Date.now() / 5000) * 2}deg)`;
        }, 50);

        return () => {
            clearInterval(shootingInterval);
            clearInterval(milkyAnim);
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            if (starryBg) {
                starsRef.current.forEach(star => star.remove());
                starsRef.current = [];
            }
        };
    }, []);

    return (
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
    );
}
