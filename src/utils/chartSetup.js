// src/utils/chartSetup.js
import {
  Chart as ChartJS,
  CategoryScale, // Required for the x-axis (Category scale)
  LinearScale, // Required for the y-axis (Linear scale)
  BarElement, // For Bar chart
  Title, // For Chart title
  Tooltip, // For tooltips
  Legend, // For Chart legend
} from "chart.js";

// Register the components globally
ChartJS.register(
  CategoryScale, // Register Category Scale
  LinearScale, // Register Linear Scale
  BarElement, // Register Bar Element for Bar charts
  Title, // Register Title for chart title
  Tooltip, // Register Tooltip for showing tooltips
  Legend // Register Legend
);
