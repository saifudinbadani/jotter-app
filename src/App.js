import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import { HomePage } from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
