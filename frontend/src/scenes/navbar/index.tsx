import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import reactIcon from '@/assets/react.svg'

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex item-center justify-between"
  return (
    <nav>
        <div className={`${flexBetween} fixed top0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={reactIcon}/>
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Team</p>
                            <p>Contact Us</p>
                        </div>
                        <div>
                        <p>Sign in</p>
                        <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar