import React from 'react';

const HexagonAvatar = ({ src, alt }) => {
  return (
    <div className="w-24 h-24 clip-hexagon overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default HexagonAvatar;
