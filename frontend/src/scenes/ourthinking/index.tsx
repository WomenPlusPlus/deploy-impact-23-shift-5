import ActionButtonTransparentMagenta from "@/shared/ActionButtonTransparentMagenta";
import { SelectedPage } from "@/shared/types";

import OurThinkingImage from "@/assets/OurThinkingImage.png"
import AboutPlatformPinkArrow from '@/assets/about-platform-pink-arrow.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurThinking = ({setSelectedPage}: Props) => {
  return (
    <section id="ourthinking" className="flex flex-col item-center bg-gray-100 md:flex-row p-10 md:p-20">
      <div className="flex flex-col md:flex-row md:w-full ">
        {/* IMAGE */}
        <div className="flex flex-row md:flex-col pb-7 md:pr-20 ">
          <img className="md:w-full" src={OurThinkingImage}/>
        </div>
        {/* OUR THINKING */}
        <div className="flex flex-col md:flex-col md:w-7/12  md:px-10 ">
          <h3 className="flex flex-row md:flex-col font-bold text-2xl">Our Thinking:</h3>
          <h3 className="flex flex-row font-bold text-2xl pb-5">Empowering everyone in Tech</h3>
          <p className="flex flex-rowtext-gray-90 pb-10">At EntryTech Hub, we believe in the transformative power of diversity and inclusion in the tech industry. Our mission is simple: to empower candidates, support companies, and strengthen associations in their pursuit of digital excellence.</p>
          <h3 className="flex flex-row text-magenta-40 font-bold text-2xl">Our Values</h3>
            <div className="flex flex-col h-6/12 w-full items-start md:flex-row md:justify-center">
              <div className="grid md:grid-rows-2 md:grid-flow-col gap-4">
                <div className="">
                  <div className="flex flex-row md:w-full gap-4 items-center py-4">
                    <img src={AboutPlatformPinkArrow}/>
                      <h3>INCLUSIVITY</h3>
                  </div>
                  <div>
                    <p className="text-gray-90">We're dedicated to creating a level playing field where everyone has a fair shot at tech careers.</p>
                  </div>
                  </div>
                          <div className="">
                              <div className="flex flex-row gap-4 items-center py-4">
                                  <img src={AboutPlatformPinkArrow}/>
                                  <h3>DIVERSITY</h3>
                              </div>
                              <div><p className="text-gray-90">We celebrate differences because we know that diverse teams drive innovation and excellence.</p></div>
                          </div>
                          <div className="">
                              <div className="flex flex-row gap-4 items-center py-4">
                                  <img src={AboutPlatformPinkArrow}/>
                                  <h3>GROWTH</h3>
                              </div>
                              <div><p className="text-gray-90">We're passionate about personal and professional development, and we're committed to helping you grow.</p></div>
                          </div>
                          <div className="">
                          <div className="flex flex-row gap-4 items-center py-4">
                                  <img src={AboutPlatformPinkArrow}/>
                                  <h3>IMPACT</h3>
                              </div>
                              <div><p className="text-gray-90">We measure our success by the positive change we bring to individuals and the industry.</p></div>
                        </div>
              </div>
  
          </div>
          <div className="flex flex-row py-10">
              <ActionButtonTransparentMagenta setSelectedPage={setSelectedPage}>Sign Up Now</ActionButtonTransparentMagenta>
          </div>
        </div>
        </div>
    </section>
    
  )
}

export default OurThinking