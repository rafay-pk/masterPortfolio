import React, { useState, useEffect } from 'react';
import './ProjectList.css'; // Make sure to have your CSS file for styling
import projectsData from './ProjectsData';

const ProjectList = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const openImageFullscreen = (image) => {
        setSelectedImage(image);
    };

    const closeImageFullscreen = () => {
        setSelectedImage(null);
    };

    const BackButton = () => {
        return (
            <div className="popup-close-container">
                <button className="popup-close" onClick={closePopup}>
                    ⬅️
                </button>
            </div>
        );

    }

    const artCols = [
        [
            '2d/idea-dump-1.jpg',
            '2d/idea-dump-2.jpg',
            '2d/pirateman.gif',
            '2d/map-of-terre-minroye.jpg',
            '2d/max-shade.jpg',
        ],
        [
            '2d/colored-sasuke.jpg',
            '2d/depression-stack.jpg',
            '2d/engineering-drawing-2.jpg',
            '2d/engineering-drawing-1.jpg',
        ],
        [
            '2d/the-high-rocks.jpg',
            '2d/sketch-portrait.jpg',
            '2d/sketch-eye.jpg',
        ],
        [
            '2d/galmar-stonefist-as-leaf-jonin.jpg',
            '2d/tomato-boss.jpg',
            '2d/pirate-cave-asset.jpg',
            '2d/pirate-cave-scene.png',
        ]
    ];

    const rendCols = [
        [
            'renders/cup.jpg',
            'renders/dark.jpg'
        ],
        [
            'renders/wine-purple.jpg',
            'renders/wine-dynamic.jpg'
        ]
    ];

    const propCols = [
        [
            "https://sketchfab.com/3d-models/hospital-b6cf0796f408432fa349a1f96246427d/embed",
            "https://sketchfab.com/3d-models/long-house-7f9b531316d64192bf10ca21ff0c08b4/embed",
            "https://sketchfab.com/3d-models/coffee-shop-e7d55f57091b4ba09ac168299ff5623f/embed",
            "https://sketchfab.com/3d-models/icecream-cafe-a95a56c5296a4571af5065026497f41e/embed",
        ],
        [
            "https://sketchfab.com/3d-models/carriage-fc78f92a80e44621b03b5485102b6cb2/embed",
            "https://sketchfab.com/3d-models/electronic-components-0a5dbfd1edcc4b80aef6f99d0fafa65d/embed",
            "https://sketchfab.com/3d-models/cameras-3-levels-d9bbb094240340faae48836a2ad56f5e/embed",
            "https://sketchfab.com/3d-models/batteries-3-levels-dcd7992568884702bda0adfa473453a7/embed",
        ]
    ]

    const anim_vids = [
        'MVrK6G3bKow',
        'c3bJ2WKOSEM',
        '5tTRnEfpDZo',
        'FNRoBjUMaIQ',
    ]

    const prop_images = [
        'Bown_Arrow.jpg',
        'Scope.jpg',
        'Bridge.jpg',
        'monitord.jpg',
        'monitordback.jpg',
        'monitordown.jpg',
        'R93_angle.jpg',
        'R93_side.jpg',
        'output.gif',
    ]

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="project-list">
            {isDesktop && selectedImage && (
                <div className="image-overlay" onClick={closeImageFullscreen}>
                    <img
                        src={`${process.env.PUBLIC_URL}/${selectedImage}`}
                        alt="Fullscreen"
                        className="fullscreen-image"
                    />
                </div>
            )}
            {selectedProject == null ?
                <div className="projects">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => openPopup(project)}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/thumbs/' + project.label + '.png'}
                                alt={project.title}
                                className="project-thumbnail"
                            />
                        </div>
                    ))}
                </div>
                : selectedProject.special == "2D" ?
                    <div>
                        <div className='vbox'>
                            <h1 className='popup-title'>{selectedProject.title}</h1>
                            <div className='popup-details' dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                            <div className="row">
                                {artCols.map((col, index) => (
                                    <div className="column">
                                        {col.map((imageName, index) => (
                                            <img
                                                key={index}
                                                src={`${process.env.PUBLIC_URL}/${imageName}`}
                                                alt={`Image ${index + 1}`}
                                                className="clickable-image"
                                                onClick={() => openImageFullscreen(imageName)}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <BackButton />
                    </div>
                    : selectedProject.special == "RENDER" ?
                        <div>
                            <div className='vbox'>
                                <h1 className='popup-title'>{selectedProject.title}</h1>
                                <div className='popup-details' dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                                <div className="row">
                                    {rendCols.map((col, index) => (
                                        <div className="column2">
                                            {col.map((imageName, index) => (
                                                <img
                                                    key={index}
                                                    src={`${process.env.PUBLIC_URL}/${imageName}`}
                                                    alt={`Image ${index + 1}`}
                                                    className="clickable-image"
                                                    onClick={() => openImageFullscreen(imageName)}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <BackButton />
                        </div>
                        : selectedProject.special == "PROPS" ?
                            <div>
                                <div className='vbox'>
                                    <h1 className='popup-title'>{selectedProject.title}</h1>
                                    <div className='popup-details' dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                                    <div className="row">
                                        {propCols.map((col, index) => (
                                            <div className="column2">
                                                {col.map((link, index) => (
                                                    <iframe
                                                        key={index}
                                                        width="100%"
                                                        height={isDesktop ? "500px" : ""}
                                                        mozallowfullscreen="true"
                                                        webkitallowfullscreen="true"
                                                        allow="autoplay; fullscreen; xr-spatial-tracking"
                                                        className="sketchfab-iframe"
                                                        src={link}
                                                    ></iframe>
                                                ))}
                                            </div>
                                        ))}
                                        {prop_images.map((imageName, index) => (
                                            <div className='column2'>
                                                <img
                                                    key={index}
                                                    src={`${process.env.PUBLIC_URL}/renders/${imageName}`}
                                                    alt={`Image ${index + 1}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <BackButton />
                            </div>
                            : selectedProject.special == "ANIMATIONS" ?
                                <div>
                                    <div className='vbox'>
                                        <h1 className='popup-title'>{selectedProject.title}</h1>
                                        <div className='popup-details' dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                                        <div className="video-grid">
                                            {anim_vids.map((videoId, index) => (
                                                <div key={index} className="video-container">
                                                    <iframe
                                                        style={{
                                                            width: '100%', height: '100%', position: 'absolute', top: 0, left: 0
                                                        }}
                                                        src={`https://www.youtube.com/embed/${videoId}`}
                                                        title={`YouTube Video ${index}`}
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <BackButton />
                                </div>
                                :
                                <div>
                                    <div className="popup-banner">
                                        <img
                                            src={process.env.PUBLIC_URL + '/banners/' + selectedProject.label + '.jpg'}
                                            alt={selectedProject.title}
                                        // className='project-banner'
                                        />
                                    </div>
                                    <div className='horizontal-box'>
                                        <div className='vbox'>
                                            <h1 className='popup-title'>{selectedProject.title}</h1>
                                            <div className='popup-details' dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                                        </div>
                                        {selectedProject.videoId && (
                                            <div className="popup-video">
                                                <iframe
                                                    title="Project Video"
                                                    src={`https://www.youtube.com/embed/${selectedProject.videoId}`}
                                                    allowFullScreen
                                                ></iframe>
                                            </div>)}
                                    </div>
                                    <BackButton />
                                </div>
            }
        </div >
    );
};




export default ProjectList;
