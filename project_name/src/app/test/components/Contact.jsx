'use client';
import React, { useRef, useEffect } from 'react';
import styles from '../assets/Contact.module.scss';

export default function Contact() {
    return (
        <>
            <div className={`${styles.bioContainer}`}>
                <h2 className={styles.bioTitle}>Let's Connect</h2>
                <p className={styles.bioText}>
                    I'm always excited to collaborate on space-related projects or discuss the wonders of the universe.
                </p>
                <div className={styles.contactCard}>
                    <h3 className={styles.getInTouchTitle}>Get In Touch</h3>
                    <p className={styles.getInTouchText}>Send me a message about space, tech, or anything interesting!</p>
                    <div className={styles.inputRow}>
                        <input
                            type="email"
                            placeholder="Your email"
                            className={styles.input}
                        />
                        <button className={styles.sendButton}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}
