import { SelectedPage } from "@/shared/types";
import ActionButtonMagenta from "@/shared/ActionButtonMagenta";
// images import 
import AboutPlatformBlueArrow from '@/assets/about-platform-arrow.png';
import AboutPlatformPinkArrow from '@/assets/about-platform-pink-arrow.png'
import AboutPlatformWoman from '@/assets/about-platform-woman.png';
import AboutPlatformMan from '@/assets/about-platform-man.png';
import AboutPlatformGroup from '@/assets/about-platform-group.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutPlatform = ({ setSelectedPage }: Props) => {
  return (
        <section id="about-platform" className="bg-white flex flex-col md:h-auto md:pb-0  ">
           <div className="flex flex-col items-start p-10 md:pl-40 ">
                <div className="flex flex-row md:w-full md:gap-8 md:p-10">
                    <h1 className="flex flex-row w-full text-3xl font-bold pt-12 ">About Platform</h1>
                </div>
                <div className="flex flex-col md:flex-row  w-full ">
                <div className=" md:w-9/12">
                
                    {/* FOR JOB SEEKERS TITLE + INFO*/}
                    <div className="flex flex-row gap-4 py-8 md:gap-8 md:p-10 ">
                        <div><img className="h-8" src={AboutPlatformBlueArrow}/></div> 
                        <div><h2 className="text-2xl">For Job Seekers</h2> </div>
                    </div>
                    <div className="grid md:grid-rows-2 md:grid-flow-col gap-4">
                        <div className="">
                            <div className="flex flex-row gap-4 items-center py-4">
                                <img src={AboutPlatformPinkArrow}/>
                                <h3>TAILORED SEARCHES</h3>
                            </div>
                            <div><p className="text-gray-90">Say goodbye to endless job searches. Our platform uses smart algorithms to connect you with positions that match your skills, preferences, and career goals.</p></div>
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-4 items-center py-4">
                                <img src={AboutPlatformPinkArrow}/>
                                <h3>SKILL ENHANCEMENT</h3>
                            </div>
                            <div><p className="text-gray-90">Access a treasure trove of resources for skill development. Hone your abilities with courses, workshops, and practical challenges, all designed to make you stand out.</p></div>
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-4 items-center py-4">
                                <img src={AboutPlatformPinkArrow}/>
                                <h3>CAREER GROWTH</h3>
                            </div>
                            <div><p className="text-gray-90">Start your journey in the tech industry with confidence. Our platform is your launchpad to exciting entry-level jobs and apprenticeships.</p></div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-5/12">
                    <img className="" src={AboutPlatformWoman} />
                </div>
                </div>
            </div>
            {/* companies */}
               <div className="flex flex-col items-start p-10 md:pr-40 ">
                <div className="flex flex-col md:flex-row w-full">
                <div className="hidden md:block flex flex-col md:w-5/12">
                    <img className="" src={AboutPlatformMan} />
                </div>
                    <div className="md:w-9/12 md:pl-10">
                    
                        {/* FOR JOB SEEKERS TITLE + INFO*/}
                        <div className="flex flex-row gap-4 py-8 md:gap-8 md:p-10 ">
                            <div><img className="h-8" src={AboutPlatformBlueArrow}/></div> 
                            <div><h2 className="text-2xl">For Companies</h2> </div>
                        </div>
                        <div className="grid md:grid-rows-2 md:grid-flow-col gap-4">
                            <div className="">
                                <div className="flex flex-row gap-4 items-center py-4">
                                    <img src={AboutPlatformPinkArrow}/>
                                    <h3>TOP TALENTS</h3>
                                </div>
                                <div><p className="text-gray-90">Access a pool of diverse, motivated, and pre-screened candidates. Find the perfect fit for your company's culture and requirements.</p></div>
                            </div>
                            <div className="">
                                <div className="flex flex-row gap-4 items-center py-4">
                                    <img src={AboutPlatformPinkArrow}/>
                                    <h3>EFFICIENT HIRING</h3>
                                </div>
                                <div><p className="text-gray-90">Access a treasure trove of resources for skill development. Hone your abilities with courses, workshops, and practical challenges, all designed to make you stand out.</p></div>
                            </div>
                            <div className="">
                                <div className="flex flex-row gap-4 items-center py-4">
                                    <img src={AboutPlatformPinkArrow}/>
                                    <h3>IMPACTFUL ASSOCIATIONS</h3>
                                </div>
                                <div><p className="text-gray-90">Partner with associations committed to diversity and inclusion. Showcase your commitment to social responsibility.</p></div>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-5/12 md:hidden">
                    <img className="" src={AboutPlatformMan} />
                </div>
                </div>
            </div>
            {/* associations */}
            <div className="flex flex-col items-start p-10 md:pl-40 ">
                <div className="flex flex-col md:flex-row w-full">
                <div className=" md:w-9/12">
                
                    {/* FOR JOB SEEKERS TITLE + INFO*/}
                    <div className="flex flex-row gap-4 py-8 md:gap-8 md:p-10 ">
                        <div><img className="h-8" src={AboutPlatformBlueArrow}/></div> 
                        <div><h2 className="text-2xl">For Associations</h2> </div>
                    </div>
                    <div className="grid md:grid-rows-2 md:grid-flow-col gap-4">
                        <div className="">
                            <div className="flex flex-row gap-4 items-center py-4">
                                <img src={AboutPlatformPinkArrow}/>
                                <h3>IMPACT TRACKING</h3>
                            </div>
                            <div><p className="text-gray-90">Monitor the progress of your initiatives with detailed insights. Assign badges and recognize members for their accomplishments.</p></div>
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-4 items-center py-4">
                                <img src={AboutPlatformPinkArrow}/>
                                <h3>INFLUENCE & COLLABORATIONS</h3>
                            </div>
                            <div><p className="text-gray-90">Join forces with like-minded associations and organizations to create a united front for change in the tech industry.</p></div>
                        </div>
                        <div className="b">
                            <div className="flex flex-row gap-4 items-center py-4">
                                <img src={AboutPlatformPinkArrow}/>
                                <h3>COMMUNITY ENGAGEMENT</h3>
                            </div>
                            <div><p className="text-gray-90">Strengthen your association's mission by facilitating employment opportunities for your members in the tech sector.</p></div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-5/12">
                    <img className="" src={AboutPlatformGroup} />
                </div>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 md:justify-center py-10">
                <div className="flex flex-row">
                           <h1 className="text-3xl italic">Join us shaping the future</h1>
                </div>
                            <ActionButtonMagenta setSelectedPage={setSelectedPage}>Sign Up Now!</ActionButtonMagenta>
            </div>
        </section>   
  )
}

export default AboutPlatform