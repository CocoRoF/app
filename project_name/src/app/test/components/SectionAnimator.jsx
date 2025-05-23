'use client';
import React, { useRef, useEffect } from 'react';
import styles from '../assets/Main.module.scss';

export default function SectionAnimator({ children, className = '', ...props }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;
        function handleScroll() {
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) node.classList.add(styles.visible);
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className={`${className} ${styles.sectionAnim}`} {...props}>
            {children}
        </section>
    );
}
