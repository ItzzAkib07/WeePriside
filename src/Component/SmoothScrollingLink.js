import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SmoothScrollingLink = ({ to, children }) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-80} // Change this offset based on your header height or sticky elements.
      onClick={() => {
        // Handle any additional logic here if needed before scrolling.
      }}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollingLink;
