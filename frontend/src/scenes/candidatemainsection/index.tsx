import EmilyPic from '@/assets/candidates/EmilyBigPic.png'
import OpenNewTab from '@/assets/OpenNewTab.png'
import DownChevron from '@/assets/DownChevron.png'
import EditPencilButton from '@/assets/EditPencilButton.png'
import logoExemple from '@/assets/candidates/Logo.png'
import womenplusplus from '@/assets/candidates/WOMEN++.png'
import powercoders from '@/assets/candidates/Powercoders.png'

type Props = {}

const CandidateMainSection = (props: Props) => {
  return (
    <div className='flex flex-col max-md max-w-max items-center align-top bg-slate-50 p-10 '>
    <div className='flex flex-col flex-grow-0 w-10/12 rounded-lg gap-y-5'>
    
        {/* profile header */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-4'>
            <div className='flex flex-col w-3/12 p-4'>
                <img className="border-purple-50 border-4 rounded-full" src={EmilyPic}/>
            </div>
            <div className='flex flex-col w-9/12 p-4 gap-y-4'>
                <div className='flex flex-row'>
                    <h1 className='font-bold text-xl'>Emily</h1>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <h2 className='flex flex-col text-lg underline underline-offset-4'>Data Scientist</h2>
                    <img className="flex flex-col h-6" src={OpenNewTab} />
                    
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <h4 className='text-sm'>Lausanne, Switzerland</h4>
                </div>
                <p className='flex flex-row text-md text-gray-90 w-9/12'>+41 23 456 78 90</p>
                <div className='flex flex-row items-center w-8/12 gap-x-4'>
                <button className='flex justify-center items-center gap-x-2 w-6/12 rounded-full bg-purple-50 text-white p-2'>
                    Currently I am <img src={DownChevron} alt="Down Chevron" className="ml-1" />
                </button>
                <button className='flex justify-center items-center gap-x-2 w-6/12 rounded-full border-2 text-gray-90 p-2'>
                    Update profile
                </button>
                </div>
            </div>
        </div>
        {/* end profile header */}
        {/* values */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4'>
                <div className='flex flex-row justify-between'>
                    <h3 className='flex flex-col w-11/12 font-bold'>Values</h3>
                    <img className='flex flex-col w-8' src={EditPencilButton}/>
                </div>
                <p className='flex flex-row w-full text-sm text-gray-90'>In my future work, I value environments that celebrate diversity and foster inclusion. I firmly believe that diverse teams bring unique insights and creativity to the table, driving innovation and success. In my next role, I'm actively seeking opportunities that prioritize collaboration among individuals from various backgrounds and experiences. I thrive in dynamic, adaptable settings that embrace change and continuously push boundaries. Furthermore, I am committed to my professional growth, always eager to learn and enhance my skills to contribute effectively to diverse and inclusive workplaces.</p>
            </div>
        </div>
        {/* end values */}
        {/* Initiative */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='flex flex-row font-bold'>Initiatives</h3>
                        <p className='flex flex-row w-full text-xs text-gray-90'>2 Initiative completed</p>
                    </div>
                </div>

                <div className='flex flex-row gap-4 justify-between '>
                        <div className='flex flex-col w-1/12'>
                            <img className='flex flex-col w-18 p-0 mt-4 ' src={womenplusplus}/>
                        </div>
                        <div className='flex flex-col w-3/12'>
                            <h4 className='text-xm'>Deploy(impact)</h4>
                            <p className='flex flex-row w-full text-xs text-purple-90'>Women++</p>
                            <p className='flex flex-row w-full text-xs text-gray-90'>Completed in Nov, 2023</p>
                        </div>
                        <div className='flex flex-col items-center w-1/12'>
                            <img className='flex flex-col  w-20 p-1 ' src={powercoders}/>
                        </div>
                        <div className='flex flex-col w-3/12'>
                            <h4 className='text-xm'>Women Connect</h4>
                            <p className='flex flex-row w-full text-xs text-purple-90'>Powercoders</p>
                            <p className='flex flex-row w-full text-xs text-gray-90'>Completed in Nov, 2023</p>
                        </div>
                </div>
            </div>
        </div>
        {/* end Initiative */}
        {/* Work */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='flex flex-row font-bold'>Work Experience</h3>
                    </div>
                </div>

                <div className='flex flex-row gap-4 justify-between '>
                        <div className='flex flex-col w-1/12'>
                            <img className='flex flex-col w-18 p-0 mt-4 ' src={logoExemple}/>
                        </div>
                        <div className='flex flex-col w-10/12'>
                            <h4 className='text-xs'>Data Analyst</h4>
                            <div className='inline-flex w-10/12'>
                                <p className='text-xs'>Tech Hub</p>
                                <p className='flex flex-row w-full text-xs text-gray-90'>Freelance</p>
                            </div>
                            <p className='text-xs'>Jan 2023 — Present</p>
                            <p className='flex flex-row w-full text-xs text-gray-90'>I was actively engaged in building foundational skills and gaining practical experience in data analysis.</p>
                        </div>
                </div>
            </div>
        </div>
        {/* end Work */}
    </div>
</div>
  )
}

export default CandidateMainSection