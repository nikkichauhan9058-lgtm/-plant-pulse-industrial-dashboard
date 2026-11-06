# Plant Pulse - Industrial Process Monitoring Dashboard

A full-stack application bridging Chemical Engineering process telemetry with modern software architecture.

## ⚙️ Core Technical Architecture (Current Progress)
* **Backend Framework:** Built a functional Node.js & Express server from scratch.
* **Process Simulation Matrix:** Implemented an algorithmic engine that models dynamic reactor state variations, tracking continuous Temperature, Pressure, and process status.
* **Safety Interlocks:** Programmed threshold monitors to flag safety violations (e.g., thermal runaway risks or high-pressure alerts) dynamically.

## 🚀 Setup & Execution Instructions
1. Clone this repository to your local machine.
2. Open your terminal inside the project directory and run:
   ```bash
   npm install
   ```
3. Boot up the live process simulation stream by running:
   ```bash
   node server.js
   ```
4. Access the live JSON telemetry feed at: `http://localhost:5000/api/reactor`
