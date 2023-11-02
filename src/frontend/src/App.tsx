import Navbar from "./scenes/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import Footer from "./scenes/footer";
import PasswordRecovery from "./pages/Passwordrecovery";
import WelcomeCompanies from "./pages/WelcomeCompanies";
import CandidateProfile from "./pages/CandidatesProfile";
import CompanyProfile from "./pages/CompanyProfile";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Condition pour exclure l'affichage de la barre de navigation (Navbar) et du footer
  const excludeNavbarAndFooter = (pathname: string) => {
    return pathname === '/candidate-profile' || pathname === '/company-profile';
  };


  const renderNavbar = () => {
    if (excludeNavbarAndFooter(window.location.pathname)) {
      return null; 
    } else {
      return <Navbar isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />;
    }
  };

  const renderFooter = () => {
    if (excludeNavbarAndFooter(window.location.pathname)) {
      return null; 
    } else {
      return <Footer setSelectedPage={setSelectedPage} />;
    }
  };


  return (
    <>
      <div className="app">
        <BrowserRouter>
          {renderNavbar()}
          <div>
            <Routes>
              <Route path="/" element={<Home isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/password-recovery" element={<PasswordRecovery />} />
              <Route path="/welcome-companies" element={<WelcomeCompanies />} />
              <Route path="/candidate-profile" element={<CandidateProfile />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
            </Routes>
          </div>
          {renderFooter()}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
