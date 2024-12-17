import React from "react";

const LeaderboardTable = ({ traders = [], onSelectTrader }) => {
  if (!traders || traders.length === 0) {
    return <div>No trader data available</div>;
  }

  const topTraders = [...traders]
    .sort((a, b) => b.returnPercent - a.returnPercent)
    .slice(0, 10);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Rank</th> {/* Rank column */}
          <th className="border p-2">Name</th>
          <th className="border p-2">Return %</th>
          <th className="border p-2">Profit</th>
        </tr>
      </thead>
      <tbody>
        {topTraders.map((trader, index) => (
          <tr
            key={trader.id}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectTrader(trader.id)} // Trigger the trader selection
          >
            <td className="border p-2">{index + 1}</td>{" "}
            {/* Rank based on index */}
            <td className="border p-2">{trader.name}</td>
            <td className="border p-2">{trader.returnPercent}</td>
            <td className="border p-2">{trader.profit.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
