import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import { HomePage } from "./components/HomePage/HomePage";
import { ArchivePage } from "./components/ArchivePage/ArchivePage";
import { LoginPage } from './components/LoginPage/LoginPage';
import { PageNotFound } from "./components/PageNotFound";
import { useAuth } from './context/AuthContext';
import { SignUpPage } from "./components/SignupPage/SignupPage";


function App() {
  const { initialAuth : { isLoggedIn }} = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={isLoggedIn && <HomePage />} />
        <Route path="/archive" element={isLoggedIn && <ArchivePage />} />
        <Route path='/login' element={!isLoggedIn && <LoginPage />} />
        <Route path='/signup' element={!isLoggedIn && <SignUpPage />} />
        <Route path='*' element={ <PageNotFound />} />
      </Routes> 
    </div>
  );
}

export default App;
