import React, { useEffect, useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { traders } from "../utils/traderData";

const PerformanceChart = ({ traderId }) => {
  const [trader, setTrader] = useState(null);
  const [profitData, setProfitData] = useState([]);

  // Hook to fetch trader data
  useEffect(() => {
    const traderData = traders.find((t) => t.id === traderId) || null;
    setTrader(traderData);
  }, [traderId]);

  // Hook to generate profit data
  useEffect(() => {
    if (trader?.profit) {
      const data = Array.from(
        { length: 5 },
        (_, i) => trader.profit * (i + 1) * 0.2
      );
      setProfitData(data);
    } else {
      setProfitData([]);
    }
  }, [trader]);

  // Memoize chart options
  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      colors: ["#28a745"],
      grid: {
        show: true,
        borderColor: "#e0e0e0",
      },
    }),
    []
  );

  const chartSeries = useMemo(
    () => [{ name: "Profit", data: profitData }],
    [profitData]
  );

  // UI rendering logic (after all hooks)
  if (!trader) {
    return <ErrorMessage message="Trader not found!" />;
  }

  if (isNaN(trader.profit)) {
    return <ErrorMessage message="Invalid trader data!" />;
  }

  if (!profitData.length) {
    return <ErrorMessage message="No performance data available." />;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg">
      <TraderInfo trader={trader} />
      <div className="mt-8">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={300}
        />
      </div>
    </div>
  );
};

// Reusable components
const TraderInfo = ({ trader }) => (
  <div className="mb-6 p-4 bg-gray-50 shadow-md rounded-lg grid gap-4 md:grid-cols-2">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {trader.name}
      </h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Return %:</span> {trader.returnPercent}%
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Profit:</span>{" "}
        <span
          className={`font-medium ${
            trader.profit >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {trader.profit.toFixed(2)} USD
        </span>
      </p>
    </div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="text-center text-gray-500">{message}</div>
);

export default PerformanceChart;
