import SwissComLogo from '@/assets/SwissComLogo.png'
type Props = {}

const CandidatesMatches = (props: Props) => {
  return (
    <div className='flex flex-col w-full items-center align-top bg-slate-50 p-10  '>
    <div className='flex flex-col flex-grow-0 w-10/12 rounded-lg gap-y-5'>

        <div className='flex flex-row'>
            <div className='flex flex-col w-4/12 p-8'>
                <p className='font-bold'>Job</p>
            </div>
            <div className='flex flex-col w-3/12 p-8'>
                <p className='font-bold'>Description</p>
            </div>
            <div className='flex flex-col w-3/12 p-8'>
                <p className='font-bold'>How you Match</p>
            </div>
        </div>

        {/* jobs */}
        <div className='flex flex-row w-full align-top bg-white rounded-2xl p-8'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex flex-row justify-between gap-4 items-center border-b pb-6 border-gray-90'>
                    <div className='flex flex-col w-4/12 gap-2'>
                        <h4 className='font-bold'>Junior Consultant Data & AI</h4>
                        <p className='flex flex-row w-full text-xs text-gray-90'>On-Site, Contract </p>
                        <div className='flex flex-row items-center gap-x-4'>
                            <img src={SwissComLogo} className='flex flex-col w-2/12 border-2 border-purple-70 rounded-full p-1' />
                            <p className='font-bold'>Swisscom</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-3/12'>
                        <p className='flex flex-row w-full text-sm text-gray-90'>We are one of the best-known, most trustworthy and most valuable brands in Switzerland.</p>
                    </div>
                    <div className='flex flex-col w-2/12 justify-center'>
                        <p className='flex flex-row w-full text-md justify-center font-bold text-purple-90'>95%</p>
                    </div>
                    <div className='flex flex-col w-3/12'>
                        <button className='border rounded-full font-normal p-2'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
        {/* end jobs */}

    </div>
</div>
  )
}

export default CandidatesMatches