// Fetch data from Google Sheets and return as JSON
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // Ensure your sheet name matches here
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Filter and format data as per requirements
  return ContentService.createTextOutput(JSON.stringify({
    topThreeTraders: getTopThreeTraders(rows),
    keyMetrics: getKeyMetrics(rows),
    leaderboard: rows,
    segregatedData: segregateByTrophies(rows)
  })).setMimeType(ContentService.MimeType.JSON);
}

// Helper functions

// Get top 3 traders by Xscore and average gain
function getTopThreeTraders(data) {
  return data
    .sort((a, b) => {
      // Convert ranks to numbers for sorting, handling cases where Rank is undefined
      const rankA = parseInt(a.Rank, 10) || Infinity;
      const rankB = parseInt(b.Rank, 10) || Infinity;
      return rankA - rankB || b.Xscore - a.Xscore || parseFloat(b['Avg Gain']) - parseFloat(a['Avg Gain']);
    })
    .slice(0, 3)
    .map(trader => ({
      name: trader.Name,
      tradingStyle: trader['Trading Style'],
      streaks: trader.Streaks,
      avatar: 'DefaultAvatarURL', // Add a default URL or field if you have avatars
      Xscore: trader.Xscore,
      averageGain: trader['Avg Gain'],
      rank: trader.Rank || 'N/A',
      Trades: trader.Trades,
      Alerts: trader.Alerts,
    }));
}


// Get key metrics: Most Tips Given, Most Active, Longest Streak, Rank Change
function getKeyMetrics(data) {
  const mostTipsGiven = data.sort((a, b) => b.Alerts - a.Alerts)[0];
  const mostActive = data.sort((a, b) => b.Trades - a.Trades)[0];
  const longestStreak = data.sort((a, b) => b.Streaks - a.Streaks)[0];
  const highestRankChange = data.sort((a, b) => b.Rank - a.Rank)[0]; // Assuming rank decrease is a positive change

  return {
    mostTipsGiven: mostTipsGiven ? { name: mostTipsGiven.Name, count: mostTipsGiven.Alerts } : { name: '', count: 0 },
    mostActive: mostActive ? { name: mostActive.Name, count: mostActive.Trades } : { name: '', count: 0 },
    longestStreak: longestStreak ? { name: longestStreak.Name, count: longestStreak.Streaks } : { name: '', count: 0 },
    rankChange: highestRankChange ? { name: highestRankChange.Name, count: highestRankChange.Rank } : { name: '', count: 0 }
  };
}


// Segregate data based on trophies
function segregateByTrophies(data) {
  return data.reduce((acc, trader) => {
    const trophy = trader.Trophies;
    if (!acc[trophy]) acc[trophy] = [];
    acc[trophy].push(trader);
    return acc;
  }, {});
}
