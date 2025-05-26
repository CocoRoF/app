import styles from '../test/assets/Main.module.scss';
import SpaceBackground from '../test/components/SpaceBackground.jsx';
import ImageGallery from './component/ImageGallery.jsx';

export default function CelestialExperience() {
    return (
        <div className={styles.root}>
            <SpaceBackground />
            <ImageGallery />

        </div>
    );
}
