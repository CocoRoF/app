import styles from '../assets/Intro.module.scss';

export default function Intro() {
    return (
        <>
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
        </>
    );
}
