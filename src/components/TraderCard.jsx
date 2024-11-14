import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import HexagonAvatar from "./HexagonAvatar";
import { RiStockFill } from "react-icons/ri";
import { SiStockx } from "react-icons/si";
import Divider from "@mui/material/Divider";

function TraderCard({ trader, rank, avatarImage }) {
  return (
    <Card
      sx={{
        width: 250,
        padding: 2,
        borderRadius: 4,
        position: "relative",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          fontSize: "2rem",
          color: "#f0f0f0",
          fontWeight: "bold",
        }}
      >
        {rank}
      </Box>

      <Stack>
        {/* Conditional gradient for different ranks */}
        {rank === 1 ? (
          <div className="absolute top-0 left-0 w-full h-[26%] bg-gradient-to-r from-[#d7eff1] to-[#fdebae] rounded-t-lg">
            <span className="absolute left-44 top-3 italic font-bold text-6xl text-black opacity-10">
              1
              <sup>
                <span className="text-4xl">st</span>
              </sup>
            </span>
          </div>
        ) : rank === 2 ? (
          <div className="absolute top-0 left-0 w-full h-[26%] bg-gradient-to-r from-[#e3f2fd] via-[#e1bee7] to-[#f8bbd0] rounded-t-lg">
            <span className="absolute left-40 top-3 italic font-bold text-6xl text-black opacity-10">
              2
              <sup>
                <span className="text-4xl">nd</span>
              </sup>
            </span>
          </div> // Gold gradient for 1st place
        ) : (
          <div className="absolute top-0 left-0 w-full h-[26%] bg-gradient-to-r from-[#d7eff1] to-[#fdebae] rounded-t-lg">
            <span className="absolute left-40 top-3 italic font-bold text-6xl text-black opacity-10">
              3
              <sup>
                <span className="text-4xl">nd</span>
              </sup>
            </span>
          </div>
        )}

        <div className="mt-7 relative">
          <HexagonAvatar src={avatarImage} alt="Avatar" />
        </div>

        <div className="flex items-center space-x-1 justify-end relative -top-9 gap-1">
          {/* Conditional Icon Rendering */}
          <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
            {rank === 2 ? <SiStockx /> : <RiStockFill />}
          </div>

          <div className="bg-[#001848] text-white text-sm font-bold px-2 py-1 rounded-md flex items-center space-x-2">
            {/* Conditional Class for 'X' Color Based on Rank */}
            <span
              className={
                rank === 1
                  ? "text-yellow-500"
                  : rank === 2
                  ? "text-gray-400"
                  : rank === 3
                  ? "text-orange-500"
                  : "text-white"
              }
            >
              X
            </span>
            <span>{trader.Xscore}</span>
          </div>
        </div>

        <div className="relative -top-6 ml-2">
          <Typography variant="h6" fontWeight="bold">
            {trader.name} <VerifiedIcon color="primary" fontSize="small" />
          </Typography>
          <Typography
            className={`${
              rank === 2
                ? "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                : "bg-gradient-to-r from-teal-400 to-cyan-400"
            } 
      text- bg-clip-text text-sm`}
            color="textSecondary"
          >
            <div className="font-bold text-xs">{trader.tradingStyle}</div>
          </Typography>
        </div>
      </Stack>
      <CardContent>
        <div className="flex justify-around relative -top-8 -left-6 ml-2">
          <div className="text-center">
            <Typography
              variant="h6"
              className="font-bold text-xs text-gray-900"
            >
              <div className="font-bold text-sm text-left">{trader.Alerts}</div>
            </Typography>
            <Typography variant="caption" className="text-xs text-gray-500">
              <div className="font-bold">Alerts</div>
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div className="text-center">
            <Typography
              variant="h6"
              className="font-bold text-xl text-gray-900"
            >
              <div className="font-bold text-sm text-left">
                {trader.Trades}{" "}
              </div>
            </Typography>
            <Typography variant="caption" className="text-xs text-gray-500">
              <div className="font-bold"> Trades</div>
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem />

          <div className="text-center">
            <Typography
              variant="h6"
              className="font-bold text-xl text-gray-900"
            >
              <div className="font-bold text-sm text-left">
                {trader.averageGain * 100}%
              </div>
            </Typography>
            <Typography variant="caption" className="text-xs text-gray-500">
              <div className="font-bold"> Avg Gain</div>
            </Typography>
          </div>
        </div>
      </CardContent>
      <button className="w-full border-2 border-gray-400 text-gray-700 relative -top-4 font-bold text-sm py-2 px-4 rounded-md hover:bg-gray-500 hover:text-white transition-colors duration-200">
        Profile
      </button>
    </Card>
  );
}

export default TraderCard;
