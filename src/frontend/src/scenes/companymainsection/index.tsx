import SwissComLogo from '@/assets/SwissComLogo.png'
import OpenNewTab from '@/assets/OpenNewTab.png'
import DownChevron from '@/assets/DownChevron.png'
import EditPencilButton from '@/assets/EditPencilButton.png'
import Switch from '@/assets/Switch.png'
import LinkedIn from '@/assets/LinkedIn.png'
import Instagram from '@/assets/Instagram.png'

type Props = {}

const CompanyMainSection = (props: Props) => {
  return (
    <div className='flex flex-col max-md max-w-max items-center align-top bg-slate-50 p-10 border border-red-500'>
    <div className='flex flex-col w-10/12 rounded-lg gap-y-5'>
        {/* profile header */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-4'>
            <div className='flex flex-col w-3/12 p-4'>
                <img className="border-purple-50 border-4 rounded-full" src={SwissComLogo}/>
            </div>
            <div className='flex flex-col w-9/12 p-4 gap-y-4'>
                <div className='flex flex-row'>
                    <h1 className='font-bold text-xl'>Swisscom</h1>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <h2 className='flex flex-col text-lg underline underline-offset-4'>www.swisscom.ch</h2>
                    <img className="flex flex-col h-6" src={OpenNewTab} />
                    
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <h4 className='text-sm'>Telecommunications</h4>
                </div>
                <p className='flex flex-row text-md text-gray-90 w-9/12'>We are one of the best-known, most trustworthy and most valuable brands in Switzerland.</p>
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
                <p className='flex flex-row w-full text-sm text-gray-90'>Responsible action for people and the environment: through our sustainability strategy 2025, we want to go beyond Swisscom and do our bit for a sustainable future in line with the United Nations’ 17 sustainable development goals. We have defined goals that will make a difference both within and beyond Swisscom, especially for our customers and society; further extending our leadership role in this area. We are becoming completely climate neutral. And, together with our customers, we are saving an additional 1 million tonnes of CO2 every year.</p>
            </div>
        </div>
        {/* end values */}
        {/* address */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='flex flex-row font-bold'>Address</h3>
                    </div>
                    <div className='flex flex-col'>
                        <img className='flex flex-col w-8 ' src={EditPencilButton}/>
                    </div>
                </div>
                <h4 className='font-bold'>Headquarters</h4>
                <p className='flex flex-row w-full text-sm text-gray-90'>Ey 10, 3063 Ittigen, Switzerland</p>
            </div>
        </div>
        {/* end address */}
        {/* jobs */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='flex flex-row font-bold'>Jobs</h3>
                    </div>
                    <div className='flex flex-col'>
                        <img className='flex flex-col w-8 ' src={EditPencilButton}/>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-4 border-b pb-6 border-gray-90'>
                    <div className='flex flex-col w-4/12'>
                        <h4 className='font-bold'>Junior Consultant Data & AI</h4>
                        <p className='flex flex-row w-full text-xs text-gray-90'>On-Site, Contract </p>
                    </div>
                    <div className='flex flex-col w-3/12'>
                        <p className='flex flex-row w-full text-sm text-gray-90'>Bern, Zurich, Switzerland</p>
                    </div>
                    <div className='flex flex-col w-2/12'>
                        <p className='flex flex-row w-full text-sm text-gray-90'>Entry Level</p>
                    </div>
                    <div className='flex flex-col w-3/12'>
                        <p className='flex flex-row w-full font-bold text-md text-gray-90'>Expire  - Dec 12, 2023</p>
                    </div>
                </div>
            </div>
        </div>
        {/* end jobs */}
        {/* enrquiries */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='flex flex-row font-bold'>Enquiries</h3>
                    </div>
                    <div className='flex flex-col'>
                        <img className='flex flex-col w-8' src={EditPencilButton} alt="Edit Button" />
                    </div>
                    </div>
                    <div className='flex flex-row gap-4 justify-between '>
                        <div className='flex flex-col w-1/12'>
                            <h4 className='font-bold text-sm'>Contact</h4>
                        </div>
                        <div className='flex flex-col w-3/12'>
                            <h4 className='text-xs'>Aidlin Meyer</h4>
                            <p className='flex flex-row w-full text-xs text-gray-90'>ameyer@business.com</p>
                        </div>
                        <div className='flex flex-row  items-end'>
                            <div className='flex flex-col '>
                                <p className='flex flex-row w-full text-xs text-gray-90'>
                                Ask me if the contact person remains the same after 3 months
                                </p>
                            </div>
                            <div className='flex flex-col w-5/12 items-end justify-end'>
                                <img className='text-sm text-gray-90 w-4/12' src={Switch} alt="Switch" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/* end enquiries */}
        {/* social */}
        <div className='flex flex-row w-full bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='flex flex-row font-bold'>Social</h3>
                    </div>
                    <div className='flex flex-col'>
                        <img className='flex flex-col w-8 ' src={EditPencilButton}/>
                    </div>
                </div>
                <div className='flex flex-col w-2/12 gap-6'>
                    <div className='flex flex-row justify-between gap-x-4'>
                        <h4 className='flex flex-col font-bold'>LinkedIn</h4>
                        <img src={LinkedIn} />
                    </div>
                    <div className='flex flex-row justify-between gap-x-4'>
                        <h4 className='flex flex-row font-bold'>Facebook</h4>
                        <img src={Instagram} />
                    </div>
                </div>
            </div>
        </div>
        {/* social */}
    </div>
</div>
  )
}

export default CompanyMainSection