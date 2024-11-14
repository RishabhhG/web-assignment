# 🌐 Web Assignment

**Live Project:** [View Here!](https://web-assignment-p27k.onrender.com/)

Welcome to the **Web Assignment** repository! This project showcases a responsive, visually compelling static web page that integrates live data from Google Sheets through a custom Google Apps Script, enabling seamless data ingestion and real-time updates.

## ✨ Features
- **Responsive Design**: Adaptable layout for all devices.
- **Engaging Animations**: Eye-catching transitions and effects for a modern web feel.
- **Live Data Integration**: Real-time data updates from Google Sheets through Apps Script.

## 🛠️ Tech Stack
- **Frontend**: React, Material UI, CSS, JavaScript, Tailwind CSS
- **Data Source**: Google Sheets with Google Apps Script for dynamic updates

### 🔗 Data Ingestion
This project fetches live data from a Google Sheet, ensuring updates happen in real-time. The custom Google Apps Script handles data ingestion, eliminating the need for manual refreshes.


### 📘 API Documentation
For a comprehensive overview of the API endpoints and data structure, refer to the detailed [Leaderboard API Documentation](https://abrupt-plant-954.notion.site/Leaderboard-API-Documentation-13e826bfa1d780d8920ad345e4d05710) on Notion.

## Google Apps Script Code
This project includes a Google Apps Script to fetch live data from Google Sheets and structure it for the leaderboard.

The script includes:
- `doGet`: Main function to return leaderboard data as JSON
- `getTopThreeTraders`: Fetches the top 3 traders based on rank, Xscore, and average gain
- `getKeyMetrics`: Calculates key performance metrics like most active trader, longest streak, and highest rank change
- `segregateByTrophies`: Segregates data based on trophy categories
[View the full Google Apps Script code](/ingest_from_sheets.gs)


## 🚀 Getting Started
To explore the project locally, follow these simple steps.

### Prerequisites
Ensure Git is installed to clone the repository.

### ⚙️ Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/RishabhhG/web-assignment.git

### 📂 Usage
Open `index.html` in your browser to experience the responsive and interactive layout firsthand.


### 🤝 Contributing
Your contributions are welcome! Feel free to open an issue or submit a pull request with any suggestions or improvements to make this project even better.

### 📜 License
This project is licensed under the MIT License.

