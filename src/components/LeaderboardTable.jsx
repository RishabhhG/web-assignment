import React from "react";
import { ImUserPlus } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa";
import image2 from "../images/image3.jpeg";
import image3 from "../images/image4.jpeg";
import image1 from "../images/image2.jpeg";
import { SiStockx } from "react-icons/si";

function LeaderboardTable({ traders }) {
  const sortedTraders = [...traders].sort((a, b) => a.Rank - b.Rank);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "border-yellow-100 text-yellow-500";
      case 2:
        return "border-gray-700 text-gray-700";
      case 3:
        return "border-orange-100 text-orange-500";
      default:
        return "border-gray-100 text-gray-400";
    }
  };

  return (
    <div>
      <div className="overflow-x-auto bg-white sm:block hidden">
      <table className="min-w-full table-auto">
      <thead className="relative z-20 bg-white shadow">
  <tr className="text-gray-500">
    <th className="px-8 py-4 text text-sm font-bold uppercase tracking-widest">
      Name
    </th>
    <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-widest">
      Trophies
    </th>
    <th className="px-8 py-4 text-left text-sm font-medium uppercase tracking-wider"></th>
    <th className="px-8 py-4 text-center text-sm font-bold uppercase tracking-widest">
      Streaks
    </th>
    <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-widest">
      Alerts
    </th>
    <th className="px-8 py-4 text-center text-sm font-bold uppercase tracking-widest">
      Trades
    </th>
    <th className="px-8 py-4 text-center text-sm font-bold uppercase tracking-widest">
      Avg. Gain
    </th>
    <th className="px-8 py-4 text-center text-sm font-bold uppercase tracking-widest">
      Xscore
    </th>
    <th className="px-8 py-4 text-center text-sm font-medium uppercase tracking-wider"></th>
  </tr>
</thead>
<tbody className="relative z-10">
  {/* Map through sortedTraders and create rows */}
</tbody>


<tbody className="relative z-10">

          {sortedTraders.map((trader, index) => (
           <tr
           key={index}
           className={`relative ${getRankColor(trader.Rank)} hover:bg-gray-400 transition-colors duration-200`}
         >
              <td
                className="absolute inset-0 -skew-x-12 border-4 border-r-4 bg-white group-hover:bg-gray-50 mx-5 rounded-md bottom-1 "
                style={{
                  content: '""',
                  zIndex: 0,
                  borderColor:
                    trader.Rank <= 3
                      ? `var(--border-color, #${
                          trader.Rank === 1
                            ? "FCD34D"
                            : trader.Rank === 2
                            ? "#C0C0C0"
                            : "F97316"
                        })`
                      : "#E5E7EB",
                }}
              />
              <td className="pl-8 py-4 relative z-10 flex ml-5">
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-3xl font-bold ${
                      trader.Rank > 9 ? 'mr-6' : 'mr-3'
                    } opacity-70 ${
                      getRankColor(trader.Rank).split(" ")[1]
                    } w-4`}
                  >
                    {trader.Rank}
                  </span>
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={
                        trader.Rank === 1
                          ? image1 // Image 1 for rank 1
                          : trader.Rank === 2
                          ? image2 // Image 2 for rank 2
                          : trader.Rank === 3
                          ? image3 // Image 3 for rank 3
                          : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              trader.Name
                            )}&background=random&color=fff&size=128` // Fallback image
                      }
                      alt={trader.Name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-gray-900 text-lg">
                        {trader.Name}
                      </span>
                      {trader && (
                        <svg
                          className="w-4 h-4 text-blue-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 font-bold w-18 tracking-tighter">
                      {trader.tradingStyle === "Short Bias"
                        ? "Short Bias"
                        : trader.tradingStyle === "Options"
                        ? "Daytrader"
                        : "Swing Trader"}
                    </span>
                  </div>
                </div>
              </td>

              
              <td className="px-4 py-4 relative z-10">
                <div className="flex items-center space-x-2 text-gray-700 rounded-md bg-gray-100 w-20">
                  {trader.tradingStyle === "Options" ? (
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-bold">Options</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                      <span className="text-sm mb-1 font-bold">{trader.Trophies}</span>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-4 py-4 relative z-10">
                <div
                  className={`flex items-center gap-3 ${
                    getRankColor(trader.Rank).split(" ")[1]
                  }`}
                >
                  <span className="font-extrabold text-xl mr-1"> <SiStockx /></span>
                 
                </div>
              </td>
              <td className="px-4 py-4 relative z-10 text-center">
  <span className="text-gray-700 font-bold">{trader.Streaks || "14"}</span>
</td>

              <td className="px-4 py-4 relative z-10">
                <span className="text-gray-700 font-bold">
                  {trader.Alerts || "20/90%"} / 90%
                </span>
              </td>
              <td className="px-4 py-4 relative z-10 text-center font-bold">
                <span className="text-gray-700">
                  {trader.Trades || "497/90%"}
                </span>
              </td>
              <td className="px-4 py-4 relative z-10 text-center">
  <span className="text-gray-700 font-bold">
    {trader['Avg Gain'] ? `${(trader['Avg Gain'] * 100).toFixed()}%` : "90%"}
  </span>
</td>
              <td className="px-4 py-4 relative z-10 text-center">
                <div className="bg-[#001848] text-white px-3 py-1 rounded-lg inline-flex items-center space-x-2">
                  <span
                    className={`${
                      getRankColor(trader.Rank).split(" ")[1]
                    } font-bold`}
                  >
                    X 
                  </span>
                  <span className="font-semibold text-center">{trader.Xscore || "83"}</span>
                </div>
              </td>
              <td className="px-4 py-4 relative z-10">
                <div className="flex items-center space-x-3 text-xl font-bold mr-5">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ImUserPlus className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

<div className="sm:hidden bg-white">
{sortedTraders.map((trader, index) => (
  <div
    key={index}
    className="flex items-center justify-between p-4 border-b border-gray-200"
  >
    <div className="flex items-center space-x-4">
      <span className={`text-xl font-bold ${getRankColor(trader.Rank)}`}>
        {trader.Rank}
      </span>
      <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
        <img
          src={
            trader.Rank === 1
              ? image1
              : trader.Rank === 2
              ? image2
              : trader.Rank === 3
              ? image3
              : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  trader.Name
                )}&background=random&color=fff&size=128`
          }
          alt={trader.Name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{trader.Name}</span>
        <span className="text-xs text-gray-500">
          {trader.tradingStyle || "Trader"}
        </span>
        <span className="text-xs text-gray-700">Trophies: {trader.Trophies}</span>
      </div>
    </div>
    <div className="text-center">
      <span className="text-gray-700 font-bold">{trader.Xscore || "83"}</span>
      <div className="flex space-x-2 mt-2">
        <button className="text-gray-400 hover:text-gray-600">
          <ImUserPlus className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
))}
</div>
    </div>
  );
}

export default LeaderboardTable;
