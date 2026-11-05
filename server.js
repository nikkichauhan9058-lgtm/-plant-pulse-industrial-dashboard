const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
function getReactorStatus() {
    const currentTemp = (Math.random() * (130 -75) + 75).toFixed(2);
    const currentPressure = (Math.random() * (7-1) + 1).toFixed(2);

let operatingState = "Normal";
if (currentTemp > 115){
    operatingState = "CRITICAL:THERMAL RUNAWAY RISK";
} else if (currentPressure > 5.5){
    operatingState = "CRITICAL: HIGH PRESSURE ALERT";
}
return {
    timestamp: new Date().toLocaleTimeString(),
    temperature: `${currentTemp} °C`,
        pressure: `${currentPressure} bar`,
        safetyStatus: operatingState
};
}
app.get('/api/reactor', (req, res) => {
    const freshData = getReactorStatus(); // Generate new reactor readings
    res.json(freshData); 
});

app.listen(PORT, () => {
    console.log(`🚀 Plant Pulse engine active! View live data at: http://localhost:5000/api/reactor`);
});