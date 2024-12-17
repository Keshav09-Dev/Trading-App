# React + Vite

# Trading App

This project is a **Trading App Dashboard** designed to display a leaderboard of traders and their performance over time. It allows users to view detailed information about top traders, including their profit, return percentage, and performance chart. The app is built using **React** and **ApexCharts** for the performance visualization.

## Folder Structure

The project is organized into the following folder structure:

```
/trading-app
├── /public
│   └── index.html            # The main HTML file
├── /src
│   ├── /components
│   │   ├── LeaderboardTable.jsx   # Displays a table of top traders
│   │   ├── PerformanceChart.jsx   # Displays the performance chart for the selected trader│   │
│   │   └── Navbar.jsx.jsx         # Displays the Navbar
│   ├── /pages
│   │   └── Dashboard.jsx         # The main dashboard component that brings together the leaderboard and chart
│   ├── /utils
│   │   └── chartSetup.js         # Setup for Apex charts
|   |   └── traderData.js         # Contains mock data for traders (you can replace with actual API calls)
│   ├── App.js                    # Main React component that renders the Dashboard
│   ├── index.js                  # Entry point to the app, renders the App component
│   └── App.css                   # Custom CSS styles for the project
├── /node_modules
│   └── ...                       # All dependencies installed via npm
├── package.json                 # Defines the project dependencies and scripts
└── README.md                    # This file
```

## How the Project Works

### 1. **Leaderboard Table**

The leaderboard is displayed in a table format showing the top traders sorted by their return percentage. Each row in the table corresponds to a trader, and when clicked, it triggers the selection of the trader to view their detailed performance chart.

### 2. **Performance Chart**

Once a trader is selected from the leaderboard, the **PerformanceChart** component is updated to display the trader's performance data over the last few months. The chart is created using **React ApexCharts** and provides a visual representation of the trader's profit over time.

### 3. **Trader Info**

The trader's detailed information (name, return percentage, profit) is displayed in a separate card in the **TraderInfo** component.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/trading-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd tradingapp
   ```

3. **Install the required dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install dependencies:

   ```bash
   npm install
   ```

4. **Run the app locally:**

   Start the development server:

   ```bash
   npm start
   ```

   This will open the app in your default browser at `http://localhost:5173`.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **React-ApexCharts** - Charting library for visualizing data in the form of area charts.
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development.
- **Node.js** (for managing dependencies and running the app)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
