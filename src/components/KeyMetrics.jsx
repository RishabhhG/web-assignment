import React from 'react';
import ProfileMetricsCard from './ProfileMetricsCard';

import image2 from '../images/image5.jpeg';
import image3 from '../images/image6.jpg';
import image4 from '../images/image7.jpeg';
import image5 from '../images/image8.jpeg';

// Create array with imported images
const traderAvatars = [
  image2,
  image3,
  image4,
  image5,
];

function KeyMetrics({ keyMetrics }) {
  // Define an array of metric types and labels
  const metricsData = [
    { type: 'longestStreak', label: 'Longest Streak' },
    { type: 'mostActive', label: 'Most Active' },
    { type: 'mostTipsGiven', label: 'Most Tips Given' },
    { type: 'rankChange', label: 'Rank Change' },
  ];

  // Log the keyMetrics to check its structure
  console.log('keyMetrics:', keyMetrics);

  // Return early if keyMetrics is not available or is malformed
  if (!keyMetrics || Object.keys(keyMetrics).length === 0) {
    return <div>No key metrics available</div>;
  }

  return (
    <div>
      <div className="hidden sm:flex flex-row justify-evenly mt-5 max-w-full mx-auto gap-4 sm:max-w-full md:max-w-[85%] lg:max-w-[85%] xl:max-w-[85%]">


{metricsData.map((metric, index) => {
  const metricData = keyMetrics[metric.type];  // Access metric data
  const avatarImage = traderAvatars[index]; // Corresponding avatar for each metric

  // Log the metricData to check if it's correct
  console.log('metricData:', metricData); 

  // If the metricData is not found, skip rendering this card
  if (!metricData) return null;

  return (
    <ProfileMetricsCard 
      key={index}
      title={metric.label}
      name={metricData?.name || 'N/A'}
      count={metricData?.count || '0'}
      avatarImage={avatarImage}
      type={metric.type}  // Pass the 'type' from metricsData
    />
  );
})}
</div>

<div className="sm:hidden bg-white">
<div className="flex flex-wrap justify-evenly mt-5 max-w-full mx-auto gap-4 sm:max-w-full md:max-w-[85%] lg:max-w-[85%] xl:max-w-[85%]">

{metricsData.map((metric, index) => {
const metricData = keyMetrics[metric.type];  // Access metric data
const avatarImage = traderAvatars[index]; // Corresponding avatar for each metric

// Log the metricData to check if it's correct
console.log('metricData:', metricData); 

// If the metricData is not found, skip rendering this card
if (!metricData) return null;

return (
<ProfileMetricsCard 
key={index}
title={metric.label}
name={metricData?.name || 'N/A'}
count={metricData?.count || '0'}
avatarImage={avatarImage}
type={metric.type}  // Pass the 'type' from metricsData
/>
);
})}
</div>
</div>
    </div>
  );
}

export default KeyMetrics;
