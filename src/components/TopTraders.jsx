import React from 'react';
import TraderCard from './TraderCard';

// Import all images directly
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';

// Create array with imported images
const traderAvatars = [
  image2,  
  image3,
  image4,
];

function TopTraders({ traders }) {
  return (
    <div className="flex flex-col items-center relative z-40">
      {/* Background Title */}
      <div className="sm:block absolute text-[6rem] lg:text-[15rem] xl:text-[25rem] font-extrabold text-black opacity-10 z-10 top-[-2rem] md:top-[-4rem] font-inter">
  X X X
</div>


      <div className="absolute text-6xl md:text-8xl xl:text-9xl font-bold text-black opacity-10 z-10 font-inter">
        Champions
      </div>

      {/* Trader Cards */}
      <div className="flex justify-around gap-4 md:gap-6 p-4 md:p-6 lg:p-8 z-10 relative flex-wrap top-12 md:top-14 mb-6 md:mb-10">
        {traders.map((trader, index) => (
          <TraderCard 
            key={index} 
            trader={trader} 
            rank={index + 1} 
            avatarImage={traderAvatars[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default TopTraders;
