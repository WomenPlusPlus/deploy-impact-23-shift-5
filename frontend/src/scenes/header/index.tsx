import { SelectedPage } from "@/shared/types"
import ActionButtonMagenta from "@/shared/ActionButtonMagenta";
import PowerCoders from "@/assets/PowerCoders.png";
import DigitalSwitzerland from "@/assets/DigitalSwitzerland.png"
import WomenPlusPlus from "@/assets/WomenPlusPlus.png"

type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Header = ({ setSelectedPage }: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
    id="home"
    className="gap-16 bg-purple-50 md:h-auto md:pb-0">
    {/* IMAGE AND MAIN HEADER */}
    <div className="flex flex-row bg-homepage-header bg-no-repeat bg-cover py-20"> 
        <div className="flex flex-col md:w-1/12 md:bg-headerGraphics bg-no-repeat bg-contain mx-5 md:mx-10">
        </div>
            {/* MAIN HEADER */}
            <div className="flex flex-col w-11/12">
                {/* HEADINGS */}
                <div className="flex flex-row 0">
                    <h1 className="text-3xl font-bold text-white py-2">JOIN THE INCLUSIVE </h1>
                </div>
                <div className="flex flex-row ">
                    <h1 className="text-3xl font-bold py-2 text-magenta-40">TECH REVOLUTION</h1>
                </div>
                <div className="flex flex-row ">
                    <p className="text-white py-2 w-10/12 md:w-8/12">Empowering Candidates, Companies, and Associations for a Brighter Future</p>
                </div>
                <div className="flex flex-row py-4">
                <ActionButtonMagenta setSelectedPage={setSelectedPage}>Get Started Now</ActionButtonMagenta>
                </div>
                            {/* LOGOS IMAGE */}
                <div className="flex flex-row gap-2 align-middle items-center md:flex-row md:align-middle md:w-4/12">
                    <div className="flex flex-row justify-center  w-4/12">
                        <img className="" src={PowerCoders}/>
                    </div>
                    <div className="flex flex-row justify-center w-4/12">
                        <img className="" src={DigitalSwitzerland}/>
                    </div>
                    <div className="flex flex-row justify-center w-4/12">
                        <img className="-mx-44" src={WomenPlusPlus}/>
                    </div>
                </div>
            </div>

    </div>

    </section>
  )
}

export default Header