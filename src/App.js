import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "./App.css";
import OrderDetails from "./components/OrderDetails";
import Settings from "./components/Settings";
import Summary from "./components/Summary";

function App() {
  if (!localStorage.getItem("totalEmissions")) {
    localStorage.setItem("totalEmissions", 0);
  }
  const history = createMemoryHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Routes>
          <Route path="/" element={<OrderDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
