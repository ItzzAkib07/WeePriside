
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SlideshowContainer = styled.div`
  display: flex;
  gap:4rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  height:300px;
  margin-top:2rem;
  justify-content:center;
  align-items:center;
`;

const SlideshowImage = styled.img`
  width: 100%;
  height: 20%;
  object-fit: cover;
  scroll-snap-align: center;
`;

const SlideshowBrands = ({ images, autoScrollInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, autoScrollInterval]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleScroll = () => {
    const containerCenter = containerWidth / 2;
    let closestDistance = Infinity;
    let closestIndex = -1;

    images.forEach((_, index) => {
      const imageRef = containerRef.current.children[index];
      const imageLeft = imageRef.offsetLeft;
      const imageCenter = imageLeft + imageRef.offsetWidth / 2;
      const distance = Math.abs(containerCenter - imageCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  return (
    <SlideshowContainer onScroll={handleScroll} ref={containerRef}>
      {images.map((image, index) => (
        <SlideshowImage
          key={index}
          src={image}
          alt={`Slideshow Image ${index}`}
        />
      ))}
    </SlideshowContainer>
  );
};

SlideshowBrands.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoScrollInterval: PropTypes.number,
};

SlideshowBrands.defaultProps = {
  autoScrollInterval: 1000,
};

export default SlideshowBrands;