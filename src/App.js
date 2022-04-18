import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import { HomePage } from "./components/HomePage/HomePage";
import { ArchivePage } from "./components/ArchivePage/ArchivePage";
import { LoginPage } from './components/LoginPage/LoginPage';
import { PageNotFound } from "./components/PageNotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes> 
    </div>
  );
}

export default App;
