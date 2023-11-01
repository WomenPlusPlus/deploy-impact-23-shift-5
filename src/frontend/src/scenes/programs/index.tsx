
import { SelectedPage } from "@/shared/types";

import WomenConnect from '@/assets/WomenConnect.png';
import Bootcamps from '@/assets/Bootcamps.png';
import FutureCoders from '@/assets/FutureCoders.png';
import Scholarship from '@/assets/Scholarship.png';
import HackNLead from '@/assets/HackNLead.png';
import DeployImpact from '@/assets/DeployImpact.png';
import PinkArrow from '@/assets/about-platform-pink-arrow.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Programs = ({setSelectedPage}: Props) => {
  return (
    <section id="programs" className="flex flex-row md:flex-row">

            {/* TITLE */}
            <div className="flex flex-col items-center w-full p-20">
                <h3 className="flex flex-row text-2xl font-bold py-5">Explore Our Empowering Programs</h3>
                <p className="flex flex-row text-gray-50 pb-10">Unlock Opportunities with Our Range of Initiatives</p>
           
            {/* PROGRAMS */}
            <div className="grid md:grid-cols-3 md:grid-flow-row gap-10">
                <div className="flex flex-col items-center gap-y-5 ">
                    <img className="rounded-md" src={DeployImpact}/>
                    <h4 className="font-semibold tracking-wider">DEPLOY (IMPACT)</h4>
                    <p className="text-gray-70 w-full text-center">Deploy(impact) is a hands-on software development program for social good.</p>
                </div>
                <div className="flex flex-col items-center gap-y-5 ">
                    <img className="rounded-md" src={HackNLead}/>
                    <h4 className="font-semibold tracking-wider">HACK’N’LEAD</h4>
                    <p className="text-gray-70 w-full text-center">Hack'n'Lead: Switzerland's women-friendly hackathon, where diverse talent collaborates, learns, and builds real products in one weekend.</p>
                </div>
                <div className="flex flex-col items-center gap-y-5 ">
                    <img className="rounded-md" src={Scholarship}/>
                    <h4 className="font-semibold tracking-wider">SCHOLARSHIP</h4>
                    <p className="text-gray-70 w-full text-center">Discover coding careers with a 50% scholarship for women in partnership with Constructor Learning.</p>
                </div>
                <div className="flex flex-col items-center gap-y-5 ">
                    <img className="rounded-md" src={FutureCoders}/>
                    <h4 className="font-semibold tracking-wider">FUTURECODERS</h4>
                    <p className="text-gray-70 w-full text-center">Unlock your programming potential and explore IT careers together with fellow young enthusiasts, ages 13 to 20, including refugees and those from low-income backgrounds.</p>
                </div>
                <div className="flex flex-col items-center gap-y-5 ">
                    <img className="rounded-md" src={Bootcamps}/>
                    <h4 className="font-semibold tracking-wider">BOOTCAMPS</h4>
                    <p className="text-gray-70 w-full text-center">Powercoders Bootcamp offers a 13-week intensive programming course with specialization tracks and a Swiss company internship for supported job integration.</p>
                </div>
                <div className="flex flex-col items-center gap-y-5">
                    <img className="rounded-md" src={WomenConnect}/>
                    <h4 className="font-semibold tracking-wider">WOMEN CONNECT</h4>
                    <p className="text-gray-70 w-full text-center">Discover IT at our Women Connect Workshops – explore, learn, and get inspired by Women in Tech!</p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center pt-10 w-full">
                <span className="text-magenta-40">See all programs</span>
                <img src={PinkArrow} alt="Arrow" className="h-4 ml-2" />
            </div>
            </div>
    </section>
  )
}

export default Programs