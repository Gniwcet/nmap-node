import "./App.css";
import { QueryInterface } from "./components/QueryInterface";
import { History } from "./components/History";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<QueryInterface />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
