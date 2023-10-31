import { useState } from 'react';
import CandidateSidebar from '@/scenes/candidatesidebar'
import CandidateNavbar from '@/scenes/candidatenavbar'
import CandidateMainSection from '@/scenes/candidatemainsection'
import CandidatesMatches from '@/scenes/candidatematches';

const CandidateProfile= () => {
    const [activeSection, setActiveSection] = useState<string>('profile');

    const switchSection = (section: string) => {
        setActiveSection(section);
      };
    
return (
    <>
      <div className="flex flex-row">
        <div className='flex flex-col min-w-fit'>
            <CandidateSidebar switchSection={switchSection} />
        </div>
        <div>
        <div className='flex flex-col' style={{ flex: 1 }}>
                <CandidateNavbar/>
                <div style={{ overflowY: 'auto', maxHeight: '100vh', width: '100%' }}>
                  {activeSection === 'profile' ? (
                  <CandidateMainSection />
                  ) : activeSection === 'mymatches' ? (
                  <CandidatesMatches /> 
                  ) : null}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CandidateProfile