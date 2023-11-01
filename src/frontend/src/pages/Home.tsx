import React from 'react'
import Header from '@/scenes/header'
import AboutUs from "@/scenes/aboutus"
import AboutPlatform from "@/scenes/aboutplatform"
import OurThinking from "@/scenes/ourthinking"
import Programs from "@/scenes/programs"
import { SelectedPage } from '@/shared/types'
import JoinTechRev from '@/scenes/jointechrev'


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Home:React.FC<Props> = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

  return (
    <div>
        <Header setSelectedPage={setSelectedPage} />
        <AboutUs setSelectedPage={setSelectedPage}/>
        <AboutPlatform setSelectedPage={setSelectedPage}/>
        <OurThinking setSelectedPage={setSelectedPage}/>
        <Programs setSelectedPage={setSelectedPage} />
        <JoinTechRev setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default Home