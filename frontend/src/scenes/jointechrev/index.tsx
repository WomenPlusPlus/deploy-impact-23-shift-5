import ActionButtonMagenta from "@/shared/ActionButtonMagenta"
import { SelectedPage } from "@/shared/types"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const JoinTechRev = ({setSelectedPage}: Props) => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex md:flex-row md:w-full justify-center bg-JoinTechRevolution bg-no-repat bg-cover h-96">
        <div className="flex flex-col gap-5 items-center justify-center">
       <h1 className="flex flex-row text-2xl font-bold justify-center">Join Our Tech Revolution</h1>
       <p className="flex flex-row justify-center">Discover Opportunities, Empower Careers, and Foster Diversity</p>
        <div className="flex flex-row justify-center">
          <ActionButtonMagenta setSelectedPage={setSelectedPage}>Get Started</ActionButtonMagenta>
        </div>
      </div>
      </div>
    </section>
  )
}

export default JoinTechRev