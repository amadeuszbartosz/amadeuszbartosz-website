import React, { useEffect, useState } from 'react';
import './Hero.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import video1 from '../assets/videos/video1.mp4';
import MarqueeText from './MarqueeText';

const imagesAndVideos = [
  { type: 'image', src: image1, alt: 'Scenery 1' },
  { type: 'image', src: image2, alt: 'Scenery 2' },
  { type: 'video', src: video1, alt: 'Video 1' },
  // Add more images and videos as needed
];

const Hero = () => {
  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      let currentIndex = array.length, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]
        ];
      }

      return array;
    };

    setShuffledItems(shuffleArray([...imagesAndVideos]));
  }, []);

  return (
    <section className="hero-container">
      <div className="marquee-wrapper">
        <MarqueeText text="amadeuszbartosz amadeuszbartosz amadeuszbartosz " />
      </div>
      <div className="grid">
        {shuffledItems.map((item, index) => (
          <div 
            className="grid-item" 
            key={index}
            style={{
              '--size': `${Math.random() * 200 + 300}px`  // Set a variable size for dynamic resizing
            }}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video autoPlay loop muted>
                <source src={item.src} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;