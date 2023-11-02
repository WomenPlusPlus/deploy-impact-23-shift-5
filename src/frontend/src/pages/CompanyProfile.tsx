import { useState } from 'react'
import CompanySidebar from '@/scenes/companysidebar'
import CandidateNavbar from '@/scenes/candidatenavbar'
import CompanyMainSection from '@/scenes/companymainsection'
import CompanyMainSectionJobCreation from '@/scenes/companymainsectionjobcreation'

type Props = {}

const CompanyProfile = (props: Props) => {
  const [activeSection, setActiveSection] = useState("CompanyMainSection");

  const handleNewJobClick = () => {
    setActiveSection("CompanyMainSectionJobCreation");
  };

  const handleProfileClick = () => {
    setActiveSection("CompanyMainSection");
  };

  return (
    <div className="flex flex-row">
      <div className='flex flex-col min-w-fit'>
        <CompanySidebar onNewJobClick={handleNewJobClick} onProfileClick={handleProfileClick}/>
      </div>
      <div className='flex flex-col w-full'>
        <CandidateNavbar />
        {activeSection === "CompanyMainSection" ? (
          <CompanyMainSection />
        ) : activeSection === 'CompanyMainSectionJobCreation' ? (
          <CompanyMainSectionJobCreation />
        ) : null}
      </div>
    </div>
  );
}

export default CompanyProfile



