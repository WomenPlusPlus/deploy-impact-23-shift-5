import WhoWeAreVideo from "@/assets/WhoWeAreVideo.png";
import TargetIcon from "@/assets/fa-bullseye.png";
import CroptIcon from "@/assets/fa-crop.png";
import DiamondIcon from "@/assets/fa-diamond.png";

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section id="about-us" className="bg-white flex flex-col justify-center items-center md:h-auto md:w-full md:pb-0 md:px-40">
        <div className="flex flex-col w-10/12 md:flex-row md:w-full md:gap-8 md:p-10 ">
                <div className="flex flex-col md:flex-col md:w-5/12">
                    <h1 className="flex flex-row w-full text-3xl font-bold pt-12">About Us</h1>
                    <p className="flex flex-row w-full py-4">Founded on the principles of equality and digital education, EntryTech Hub brings together a coalition of forward-thinking associations, tech companies, and job seekers. We believe that everyone, regardless of their background or experience, should have access to the limitless possibilities of the digital world.</p>
                    <p className="flex flex-row w-full py-4">At EntryTech Hub, we are more than just a digital platform. We are a community-driven initiative with a mission to empower individuals, foster inclusivity, and create opportunities in the tech industry.</p>
                </div>
                <div className="flex flex-row justify-center md:flex-col md:w-7/12">
                    <img className="flex flex-row w-full " src={WhoWeAreVideo}/>
                </div>
        </div>
        <div className="flex flex-col w-10/12  md:p-10 md:flex-row md:w-full">
                <div className="flex flex-col md:w-4/12 ">
                    <div className="flex flex-row items-center gap-4 py-4">
                        <div className="flex flex-col"><img src={TargetIcon}/></div>
                        <div className="flex flex-col"><p className="text-purple-90">Diverse Community</p></div>
                    </div>
                    <div className="flex flex-row"><p className="text-gray-70">Our vibrant community comprises motivated job seekers, socially responsible companies, and influential associations.</p></div>
                    <div className="flex flex-row items-center gap-4 py-4">
                        <div className="flex flex-col"><img src={DiamondIcon}/></div>
                        <div className="flex flex-col"><p className="text-purple-90">Inclusivity</p></div>
                    </div>
                    <div className="flex flex-row"><p className="text-gray-70">EntryTech Hub promotes diversity and inclusivity by partnering with associations dedicated to creating a more equitable tech industry.</p></div>
                </div>
                <div className="flex flex-col md:w-4/12 ">
                    <div className="flex flex-row items-center gap-4 py-4">
                        <div className="flex flex-col"><img src={CroptIcon}/></div>
                        <div className="flex flex-col"><p className="text-purple-90">Skill Empowerment</p></div>
                    </div>
                    <div className="flex flex-row"><p className="text-gray-70">We offer comprehensive skill-building resources and connect candidates with opportunities that match their potential.</p></div>
                    <div className="flex flex-row items-center gap-4 py-4">
                        <div className="flex flex-col"><img src={DiamondIcon}/></div>
                        <div className="flex flex-col"><p className="text-purple-90"> Impactful Results</p></div>
                    </div>
                    <div className="flex flex-row"><p className="text-gray-70">Our track record includes success stories of job seekers landing life-changing roles and companies finding top talent that aligns with their values.</p></div>
                </div>
                <div className="flex flex-row w-full h-48 md:flex-col md:w-4/12 md:h-auto bg-whoWeAreGraphics bg-no-repeat bg-contain "></div>
        </div>       

    </section>
  )
}

export default AboutUs