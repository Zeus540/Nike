import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="path-to-img" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="path-to-img" onDragStart={handleDragStart} className="yours-custom-class" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}