import CompanySidebar from '@/scenes/companysidebar'
import CandidateNavbar from '@/scenes/candidatenavbar'
import CompanyMainSection from '@/scenes/companymainsection'

type Props = {}

const CompanyProfile = (props: Props) => {
  return (
    <div className="flex flex-row">
        <div className='flex flex-col min-w-fit'>
            <CompanySidebar/>
        </div>
        <div>
        <div className="flex flex-wrap">
            <CandidateNavbar/>  
            <CompanyMainSection />
        </div>
    </div>
    </div>
  )
}

export default CompanyProfile