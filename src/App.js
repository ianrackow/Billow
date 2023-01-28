import React from "react";
import './App.css';
import OrderDetails from "./components/OrderDetails";
import Settings from "./components/Settings";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();
  return (
    <div className='App'>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<OrderDetails />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
