import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import AboutUs from "@/scenes/aboutus"
import AboutPlatform from "@/scenes/aboutplatform"
import OurThinking from "@/scenes/ourthinking"
import Programs from "@/scenes/programs"
import JoinTechRev from "./scenes/jointechrev"
import Footer from "./scenes/footer"

import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"


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
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
      <AboutUs setSelectedPage={setSelectedPage}/>
      <AboutPlatform setSelectedPage={setSelectedPage}/>
      <OurThinking setSelectedPage={setSelectedPage}/>
      <Programs setSelectedPage={setSelectedPage} />
      <JoinTechRev setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
      </div>
      
    </>
  )
}

export default App
