import { SelectedPage } from "@/shared/types"

import BlackLogo from '@/assets/logo_Black_Small.svg'
import ActionButtonMagenta from "@/shared/ActionButtonMagenta";
import FBLogo from '@/assets/fa-dribbble.png'
import TWLogo from '@/assets/fa-facebook-square.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <section className="flex flex-col md:flex-row p-20">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-evenly md:items-start w-full ">
            {/* COLUMN 1 */}
            <div className="flex flex-col items-center gap-5 w-full md:items-start md:w-3/12">
                <img className="flex flex-row w-6/12 md:flex-row" src={BlackLogo}/>
                <p className="flex flex-row text-xs md:flex-row text-gray-90">Be sure to take a look at our Terms of Use and Privacy Policy</p>
            </div>
            {/* COLUMN 2 */}
            <div className="flex flex-col md:w-4/12">
              <ul className="flex flex-row justify-evenly md:flex-col md:items-center gap-4 text-xs text-purple-90">
                <li>Who we are</li>
                <li>Our Thinking</li>
                <li>About Platform</li>
                <li>Programs</li>
              </ul>  
            </div>    
            {/* COLUMN 3 */}
            <div className="flex flex-col gap-4 md:w-4/12">
              <div className="flex flex-col w-full">
              <p className="flex flex-row text-sm">Subscribe our Newsletters</p>
              </div>
              <div className="flex flex-row gap-2">
                <input className="border border-s rounded-full"></input>
                <ActionButtonMagenta setSelectedPage={setSelectedPage}>Submit</ActionButtonMagenta>
              </div>
              <ul className="flex flex-row gap-10 text-sm">
                <li><img src={FBLogo}/></li>
                <li><img src={TWLogo}/></li>
                <li><img src={TWLogo}/></li>
              </ul>  
            </div>

   
        </div>
    </section>
  )
}

export default Footer