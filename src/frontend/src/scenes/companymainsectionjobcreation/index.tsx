import SwissComLogo from '@/assets/SwissComLogo.png'
import EditPencilButton from '@/assets/EditPencilButton.png'
type Props = {}

const CompanyMainSectionJobCreation = (props: Props) => {
    return (
        <div className='flex flex-col items-center align-top bg-slate-50 p-10 border'>
            <div className='flex flex-col w-10/12 rounded-lg gap-y-5 '>
                {/* profile header */}
                <div className='flex flex-row w-full bg-white rounded-2xl p-4 '>
                    <div className='flex flex-col w-full '>
                        <div className='p-4'>
                            <h1 className='font-bold text-md'>SPECIFY A JOB</h1>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='flex flex-col w-2/12 p-4 '>
                                <img className="border-purple-50 border-4 rounded-full" src={SwissComLogo}/>
                            </div>
                            <div className='flex flex-col w-10/12 p-4 gap-y-4 '>
                                <div className='flex flex-row'>
                                    <h1 className='font-bold text-xl'>Swisscom</h1>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <h2 className='flex flex-col text-lg underline underline-offset-4'>www.swisscom.ch</h2>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <h4 className='text-sm'>Telecommunications</h4>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col gap-4 p-4'>
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-3/12 rounded-md justify-center text-xs bg-purple-20'>Job title</label>
                                <input type="text" placeholder='Junior Consultant Data & AI' className='flex flex-row text-sm w-full border border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                   
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-3/12 rounded-md justify-center text-xs bg-purple-20'>Location</label>
                                <input type="text" placeholder='Bern, Zurich' className='flex flex-row text-sm w-full border border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-4/12 rounded-md justify-center text-xs bg-purple-20'>Employment Type</label>
                                <input type="text" placeholder='Full-time' className='flex flex-row text-sm w-full border border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-3/12 rounded-md justify-center text-xs bg-purple-20'>Job Format</label>
                                <input type="text" placeholder='On-site' className='flex flex-row text-sm w-full border border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                        </div>
                        <div className='flex flex-row p-4'>
                            <div className='flex flex-col border border-gray-90 rounded-md p-3 w-full gap-4'>
                                <h1 className='flex flex-row font-bold'>About the role</h1>
                                <p className='text-sm text-gray-90'>Using the latest analytics and data tools, you will develop data warehouses and data lakes, dashboards or report solutions.</p>
                                <ul className='text-sm text-gray-90'>
                                    <li>Designing, integrating and developing solutions for our external customers</li>
                                    <li>Using technologies such as SAP, Microsoft, AWS or open source</li>
                                    <li>Support with requirements analysis, solution concepts and testing</li>
                                </ul>
                                <h1 className='flex flex-row font-bold'>Your skills</h1>
                                <ul className='text-sm text-gray-90'>
                                    <li>Degree (University/FH/HF) in computer science or business informatics</li>
                                    <li>Initial knowledge of programming, especially with a focus on databases (SQL, NoSQL) and/or full-stack software development (.NET etc.)</li>
                                </ul>
                                <h1 className='flex flex-row font-bold'>What sets you apart</h1>
                                <ul className='text-sm text-gray-90'>
                                    <li>Great interest in the connection between business and IT</li>
                                    <li>Very good German and English, oral and written</li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col gap-4 p-4'>
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-5/12 rounded-md justify-center text-xs bg-purple-20'>Experience of employee</label>
                                <input type="text" placeholder='1 year' className='flex flex-row text-sm w-full border border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                   
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-5/12 rounded-md justify-center text-xs bg-purple-20'>Expiration Date of this job</label>
                                <input type="text" placeholder='12 Dec 2023' className='flex flex-row text-sm w-full border border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                            <div className='flex flex-col w-full  gap-y-1'>
                                <label className='flex flex-row w-3/12 rounded-md justify-center text-xs bg-purple-20'>Salary Range</label>
                                <input type="text" placeholder='65k' className='flex flex-row w-full border text-sm border-gray-90 rounded-md p-2 text-purple-90 placeholder:text-slate-400'/>
                            </div>
                            <div className='flex flex-col items-end justify-end w-full  gap-y-1'>
                                <button className='flex flex-row justify-center p-2 w-full text-sm text-white bg-purple-50 rounded-full'>Create Job</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
        
            {/* end profile header */}

        

        </div>
    </div>
      )
}

export default CompanyMainSectionJobCreation