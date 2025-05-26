// components/ImageGallery.jsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image'; // next/image 임포트 제거
import styles from '../assets/ImageGallery.module.scss';
import { galleryData } from '../constant/galleryData'; // 데이터 임포트

// Font Awesome 아이콘은 이전과 같이 설정되어 있다고 가정합니다.

export default function ImageGallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModalItems, setCurrentModalItems] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (card) => {
        const items = [
            {
                src: card.mainImage.src,
                alt: card.mainImage.alt,
                captionTitle: card.title,
                captionText: card.description
            },
            ...card.subItems.map(item => ({
                src: item.src,
                alt: item.alt,
                captionTitle: item.captionTitle,
                captionText: item.captionText
            }))
        ];

        setCurrentModalItems(items);
        setCurrentImageIndex(0);
        setIsModalOpen(true);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const showNextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentModalItems.length);
    }, [currentModalItems.length]);

    const showPrevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentModalItems.length) % currentModalItems.length);
    }, [currentModalItems.length]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isModalOpen) return;

            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            }
        };
        if (typeof document !== 'undefined') {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isModalOpen, closeModal, showNextImage, showPrevImage]);

    const currentItem = isModalOpen && currentModalItems.length > 0 ? currentModalItems[currentImageIndex] : null;

    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Cosmic Discoveries Gallery</h2>

            <div className={styles.galleryGrid}>
                {galleryData.map((card) => (
                    <div key={card.id} className={styles.galleryCard} data-group={card.id}>
                        <h3>{card.title}</h3>
                        <p className={styles.description}>{card.description}</p>
                        {/* img 태그로 변경 */}
                        <img
                            className={styles.mainImage}
                            src={card.mainImage.src}
                            alt={card.mainImage.alt}
                            onClick={() => openModal(card)}
                            loading="lazy" // 브라우저 기본 레이지 로딩 사용
                        />
                    </div>
                ))}
            </div>

            {isModalOpen && currentItem && (
                <div className={`${styles.modal} ${styles.active}`}>
                    <button className={styles.modalClose} onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className={styles.modalContent}>
                        <div className={styles.modalNav}>
                            <button className={styles.modalNavBtn} onClick={showPrevImage}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className={styles.modalNavBtn} onClick={showNextImage}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        {/* img 태그로 변경 */}
                        <img
                            className={styles.modalImage}
                            src={currentItem.src}
                            alt={currentItem.alt}
                            loading="lazy"
                        />
                        <div className={styles.modalCaption}>
                            <h4>{currentItem.captionTitle}</h4>
                            <p>{currentItem.captionText}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};