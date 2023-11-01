type Props = {}

const WelcomeCompanies = (props: Props) => {
  return (
    <section>
        <div className="flex flex-row justify-center p-20 bg-WelcomeBackgroundGraphic bg-no-repeat bg-center bg-cover h-[750px]">
            <div className="flex flex-col items-center gap-5 pt-24">
                <div className="flex flex-col items-center gap-5">
                    <h4 className="text-2xl text-white">WELCOME EMPLOYER</h4>
                    <h1 className="text-4xl text-center font-bold text-white"><span className="text-magenta-40">EMPOWER</span> YOUR TEAM WITH SKILLED CANDIDATES</h1>
                    <p className="text-lg  text-white">To begin posting jobs and recruiting, please verify your email.</p>
                </div>
                <div className="flex flex-row w-10/12 h-[45px] gap-x-4">
                    <input type="text" placeholder="Enter your email address" className="border bg-transparent rounded-full w-full text-start text-white px-3" />
                    <button className="bg-magenta-40 rounded-full w-full text-white">Verify</button>
                </div>
                <div className="flex flex-col w-full h-[45px] gap-x-4">
                    <div className="flex flex-row justify-center gap-4 pt-8">
                    <input type="checkbox" />
                    <p className="text-white text-sm">By clicking Verify I accept data Privacy Terms and Conditions</p>
                    </div>
                    <p className="text-white text-center text-sm">You already have an account? Please <span className="text-bold cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WelcomeCompanies