// constants/galleryData.js
export const galleryData = [
    {
        id: 'quantum',
        title: 'Quantum Physics Research',
        description: 'Cutting-edge quantum computing research and experimental setups in our advanced laboratories.',
        mainImage: {
            src: 'https://source.unsplash.com/random/600x400/?quantum,physics',
            alt: 'Quantum Physics Research',
            width: 600, // next/image를 위한 너비
            height: 400 // next/image를 위한 높이
        },
        subItems: [
            { src: 'https://source.unsplash.com/random/600x400/?quantum,computer', alt: 'Quantum Computer', captionTitle: 'Quantum Processor', captionText: 'Our latest quantum computing hardware with 128 qubits', width: 600, height: 400 },
            { src: 'https://source.unsplash.com/random/600x400/?quantum,algorithm', alt: 'Quantum Algorithms', captionTitle: 'Algorithm Visualization', captionText: 'Quantum algorithm development process visualization', width: 600, height: 400 },
            { src: 'https://source.unsplash.com/random/600x400/?quantum,experiment', alt: 'Quantum Experiment', captionTitle: 'Lab Experiment', captionText: 'Researchers conducting quantum entanglement experiments', width: 600, height: 400 },
        ],
    },
    {
        id: 'space',
        title: 'Space Exploration',
        description: 'Our advanced telescope array and satellite launches for deep space observation.',
        mainImage: {
            src: 'https://source.unsplash.com/random/600x400/?telescope,observatory',
            alt: 'Space Telescope',
            width: 600,
            height: 400
        },
        subItems: [
            { src: 'https://source.unsplash.com/random/600x400/?galaxy,nebula', alt: 'Galaxy Image', captionTitle: 'Andromeda Galaxy', captionText: 'High-resolution capture from our orbital observatory', width: 600, height: 400 },
            { src: 'https://source.unsplash.com/random/600x400/?satellite,space', alt: 'Satellite Launch', captionTitle: 'Research Satellite', captionText: 'Launch of our latest space research probe', width: 600, height: 400 },
            { src: 'https://source.unsplash.com/random/600x400/?stars,universe', alt: 'Star Field', captionTitle: 'Deep Star Field', captionText: 'Long exposure of distant star clusters', width: 600, height: 400 },
        ],
    },
    {
        id: 'ai',
        title: 'AI for Space Applications',
        description: 'Neural network design and machine learning for processing astronomical data.',
        mainImage: {
            src: 'https://source.unsplash.com/random/600x400/?neural,network',
            alt: 'Neural Network',
            width: 600,
            height: 400
        },
        subItems: [
            { src: 'https://source.unsplash.com/random/600x400/?machine,learning', alt: 'Machine Learning', captionTitle: 'Data Analysis', captionText: 'AI processing astronomical data sets', width: 600, height: 400 },
            { src: 'https://source.unsplash.com/random/600x400/?data,analysis', alt: 'Data Analysis', captionTitle: 'Visualization', captionText: '3D rendering of cosmic data patterns', width: 600, height: 400 },
            { src: 'https://source.unsplash.com/random/600x400/?ai,algorithm', alt: 'AI Algorithm', captionTitle: 'Algorithm Design', captionText: 'Developing specialized AI for space applications', width: 600, height: 400 },
        ],
    },
];