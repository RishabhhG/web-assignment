import React from 'react';

function FilterButton({ filter, setFilter }) {
  const options = ['All', 'Stocks', 'Options'];

  // Calculate the translation values based on the container width
  const getTranslateX = (filterValue) => {
    switch (filterValue) {
      case 'All':
        return 'translate-x-[1px]';
      case 'Stocks':
        return 'translate-x-[100.33%]';
      case 'Options':
        return 'translate-x-[200.66%]';
      default:
        return 'translate-x-[1px]';
    }
  };

  return (
    <div className="relative flex justify-center p-1 bg-gray-200 rounded-md w-full max-w-xs mx-auto mb-12">
      {/* Sliding White Background */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[32%] bg-white rounded-md transition-transform duration-300 shadow-md font-inter ${getTranslateX(
          filter
        )}`}
      />

      {/* Buttons */}
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`relative z-10 w-1/3 text-center py-1  text-sm sm:text-base font-medium transition-colors ${
            filter === option ? 'text-black' : 'text-gray-700'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;