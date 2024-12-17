import React, { useEffect, useState } from "react";
import PerformanceChart from "../components/performanceChart";
import LeaderboardTable from "../components/LeaderboardTable";
import { traders } from "../utils/traderData";

const Dashboard = () => {
  const [selectedTraderId, setSelectedTraderId] = useState(traders[0]?.id);

  const handleTraderSelection = (id) => {
    console.log("Trader selected:", id); // Log the selected ID
    setSelectedTraderId(id);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-6">
        {" "}
        {/* Set specific column widths for large screens */}
        {/* Leaderboard */}
        <div className="w-full bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Leaderboard</h2>
          <LeaderboardTable
            traders={traders}
            onSelectTrader={handleTraderSelection} // Pass the function to handle selection
          />
        </div>
        {/* Performance Chart */}
        <div className="w-full bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Performance Chart</h2>
          <PerformanceChart traderId={selectedTraderId} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
