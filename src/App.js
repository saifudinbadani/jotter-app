import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import { HomePage } from "./components/HomePage/HomePage";
import { ArchivePage } from "./components/ArchivePage/ArchivePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes> 
    </div>
  );
}

export default App;
