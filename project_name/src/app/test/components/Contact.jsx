'use client';
import React from 'react';
import styles from '../assets/Contact.module.scss';
import { FaDownload } from 'react-icons/fa';

export default function Contact() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/path-to-your-cv/your-cv.pdf';
        link.setAttribute('download', 'Your_Name_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className={`${styles.bioContainer}`}>
                <h2 className={styles.bioTitle}>Interested in My Work?</h2>
                <p className={styles.bioText}>
                    You can download my CV to learn more about my skills and experience.
                </p>
                <div className={styles.contactCard}>
                    <h3 className={styles.getInTouchTitle}>My Curriculum Vitae</h3>
                    <p className={styles.getInTouchText}>Click the button below to get a copy of my CV.</p>
                    <div className={styles.inputRow}> {/* Kept class for styling consistency, but it now only holds the button */}
                        <button className={styles.sendButton} onClick={handleDownloadCV}>
                            <FaDownload style={{ marginRight: '8px' }} /> Get CV
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}