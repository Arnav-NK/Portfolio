
import React from 'react';
const Card = ({ title, content, type }) => {
    let frontClass = '';
    let backContent;
    let images = [];
    let written = [];

    switch (type) {

        case 'tech':
            frontClass = 'front_dev';
            const firstRowImages = [
                './public/assets/mongo.png',
                './public/assets/Express.png',
                './public/assets/React.png',
                './public/assets/Node.js.png',
            ];
            const secondRowImages = [
                './public/assets/kubernetes.png',
                './public/assets/Docker.png',
                './public/assets/Jenkins.png',
            ];
            written = [
                '• DSA',
                '• Computer Networks',
                '• Object oriented programming',
                '• MERN Stack Development',
                '• DevOps',
                '• Operating Systems',
                '• Data Base Management Systems'
            ];
            backContent = (
                <div className="back_dev">
                    <div className="images images-row">
                        {firstRowImages.map((src, index) => (
                            <img key={`row1-${index}`} src={src} width="80px" alt={`Skill icon ${index}`} />
                        ))}
                    </div>
                    <div className="images images-row">
                        {secondRowImages.map((src, index) => (
                            <img key={`row2-${index}`} src={src} width="80px" alt={`Skill icon ${index + 4}`} />
                        ))}
                    </div>

                    <div className="written">
                        {written.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
                </div>
            );
            break;
        case 'soft':
            frontClass = 'front_soft';
            written = [
                '• Team Management',
                '• Leadership',
                '• Articulate'
            ];
            backContent = (
                <div className="back_soft">
                    <div className="written">
                        {written.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
                </div>
            );
            break;
        case 'langs':
            frontClass = 'languages_front';
            images = [
                './public/assets/java.png',
                './public/assets/C++.png',
                './public/assets/C.png',
                './public/assets/YAML.png',
            ];
            backContent = (
                <div className="languages_back">
                    <div className="images">
                        {images.map((src, index) => (
                            <img key={index} src={src} width="80px" alt={`Language icon ${index}`} />
                        ))}
                    </div>
                </div>
            );
            break;
        default:
            frontClass = 'front_default';
            backContent = <div className="back_default">{content}</div>;
    }

    return (
        <div className={`card ${type === 'tech' ? 'card1' : type === 'soft' ? 'card2' : 'card3'}`}>
            <div className={frontClass}>{title}</div>
            {backContent}
        </div>
    );
};

export default Card;