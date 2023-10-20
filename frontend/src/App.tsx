import Navbar from "./scenes/navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SelectedPage } from "@/shared/types"
import { useEffect, useState } from "react"
import Footer from "./scenes/footer"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  
  useEffect(()=>{
    const handleScroll = () => {
      if (window.screenY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.screenY != 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <div className="app">
        <BrowserRouter>
            <Navbar isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
            <div>
            <Routes>
              <Route path="/" element={<Home isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
            </div>
            <Footer setSelectedPage={setSelectedPage} /> 
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
