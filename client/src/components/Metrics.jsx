import React from "react";
import "./Metrics.css"; // Import styles
import { MdOutlineNotifications } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import { FaDollarSign, FaExchangeAlt, FaHeart, FaUser } from "react-icons/fa";
import { PieChart, Pie, Cell } from "recharts";
import { FaPlus } from "react-icons/fa6";


import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Metrics = () => {


  const piedata = [
    { name: "Basic Tees", value: 55, color: "lightgreen" },
    { name: "Custom Short Pants", value: 31, color: "gold" },
    { name: "Super Hoodies", value: 14, color: "lightcoral" },
  ];
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background
      titleFont: { size: 14, weight: "bold", family: "Arial" },
      titleColor: "#ffffff",
      bodyFont: { size: 12, family: "Arial" },
      bodyColor: "#ffffff",
      padding: 10,
      cornerRadius: 8,
      displayColors: false, // Hide color box
      callbacks: {
        label: (tooltipItem) => {
          return `Count: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: { drawBorder: false, display: false },
    },
    y: {
      beginAtZero: true,
      grid: { drawBorder: false },
      ticks: { stepSize: 100 }, // Y-axis step size is now 100 instead of 50
    },
  },
};

  const metricsData = [
    {
      title: "Total Revenues",
      number: "$2,15,000",
      change: "2.15%",
      icon: <FaDollarSign />,
    },
    {
      title: "Total Transactions",
      number: "1,200",
      change: "-1.7%",
      icon: <FaExchangeAlt />,
    },
    {
      title: "Total Likes",
      number: "8,500",
      change: "11.2%",
      icon: <FaHeart />,
    },
    {
      title: "Total Users",
      number: "3,200",
      change: "-4.2%",
      icon: <FaUser />,
    },
  ];

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Guest",
        data: [400, 500, 300, 350],
        backgroundColor: "lightcoral",
        barThickness: 35,
      },
      {
        label: "User",
        data: [350, 320, 200, 380],
        backgroundColor: "lightgreen",
        barThickness: 35,
        
      },
    ],
  };

  return (
    <div className="metrics">
      {/* Dashboard Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Dashboard</p>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p>Search</p>
          <MdOutlineNotifications size={27} />
          <IoPersonCircleSharp size={27} />
        </div>
      </div>

      {/* Metrics Cards & Chart */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        {/* Metrics Section */}
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          p={1}
          width="80%"
          maxWidth="900px"
        >
          {metricsData.map((item, index) => {
            const changeValue = parseFloat(item.change);
            const isPositive = changeValue >= 0;
            return (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  width: 160,
                  borderRadius: "1rem",
                  boxShadow: 3,
                }}
              >
                <Box sx={{ fontSize: 24, color: "#3b82f6" }}>{item.icon}</Box>
                <Typography variant="body2">{item.title}</Typography>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: isPositive ? "green" : "red",
                      backgroundColor: isPositive ? "lightgreen" : "lightcoral",
                      padding: "2px 6px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                    }}
                  >
                    {isPositive ? `+${item.change}` : item.change}
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>

        {/* Bar Chart Section */}
        <Paper
          elevation={3}
          sx={{
            width: "76%",
            maxWidth: "900px",
            mt: 3,
            p: 2,
            borderRadius: "1rem",
            boxShadow: 3,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Graph Title */}
          <div
            style={{
              marginBottom: "-1.5rem",
            }}
          >
            <p
              style={{
                margin: "3px",
              }}
            >
              Activities
            </p>
            <p
              style={{
                margin: "3px",
              }}
            >
              May - June 2021
            </p>
          </div>

          {/* Bar Chart */}
          <Box sx={{ width: "100%", height: "300px" }}>
            {" "}
            {/* Adjust height here */}
            <Bar data={data} options={options} />
          </Box>
        </Paper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "98%",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: 350,
              p: 2,
              borderRadius: "1rem",
              boxShadow: 3,

              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom:"1rem",
                
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Top Products
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                May - June 2021
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PieChart width={130} height={150}>
                <Pie
                  data={piedata}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={50}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {piedata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

              {/* Product Details */}

              <Box sx={{ ml: 2 }}>
                {piedata.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: item.color,
                        mr: 1,
                      }}
                    />
                    <Box>
                      <Typography variant="body1" fontWeight="bold">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="gray">
                        {item.value}%
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </div>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              width: 350,
              p: 2,
              borderRadius: "1rem",
              boxShadow: 3,
              alignContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginLeft:"3rem",

              backgroundColor: "white",
              height: "205px",
            }}
          >
            <FaPlus
              size={30}
              style={{
                backgroundColor: "grey",
                borderRadius: "50%",
                padding: "1rem",
              }}
            />
            <p>Add new profile</p>
          </Paper>
        </div>
      </Box>
    </div>
  );
};

export default Metrics;
