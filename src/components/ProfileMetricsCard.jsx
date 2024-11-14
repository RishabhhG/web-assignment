import React from 'react';
import { FaBoltLightning } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";

const ProfileMetricsCard = ({ title, name, count, avatarImage, type }) => {

  const renderIcon = () => {
    switch (type) {
      case 'mostTipsGiven':
        return <FaBoltLightning className="w-5 h-5 text-white" />;
      case 'mostActive':
        return <FiMessageCircle className="w-5 h-5 text-white" />;
      case 'longestStreak':
        return <FaFireFlameCurved className="w-5 h-5 text-white" />;
      case 'rankChange':
        return <IoMdArrowRoundUp className="w-5 h-5 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] p-5 mb-8 mx-auto"> {/* Responsive card width */}
      <div className="flex flex-wrap items-center bg-white rounded-2xl px-5 py-4 shadow-md space-x-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200"> {/* Avatar size increases with screen size */}
            <img
              src={avatarImage || '/api/placeholder/48/48'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-400 rounded-full flex items-center justify-center"> {/* Icon size increases with screen size */}
            {renderIcon()}
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <div className="text-sm font-medium text-gray-500">{title}</div>
          <div className="text-md font-semibold text-gray-900">{name || 'Name'}</div>
        </div>

        <div className="text-xl sm:text-2xl font-bold text-gray-900">{count || '0'}</div> {/* Count text size increases with screen size */}
      </div>
    </div>
  );
};

export default ProfileMetricsCard;
