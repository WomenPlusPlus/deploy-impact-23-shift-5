import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/LogoEntryTechHub.png';
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useNavigate, useLocation } from "react-router-dom";
import LogoBlack from "@/assets/logo_Black_Small.svg";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "";
  const navigate = useNavigate();
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 items-center`}>
            {/* LEFT SIDE */}
            <img onClick={() => { navigate("/") }} className="h-4 w-auto cursor-pointer" alt="logo" src={isHomepage ? Logo : LogoBlack} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full items-center`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="About us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="About Platform" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Programs" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8 items-center text-purple-20`}>
                  <p onClick={() => {
                    navigate("/login")
                  }} className="cursor-pointer">Login</p>
                  <button className="rounded-full bg-purple-50 px-10 py-2 hover:bg-magenta-40 hover:text-white;" onClick={() => {
                    navigate("/signup")
                  }}>Signup</button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-purple-20 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-purple-20 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="About us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Our mission" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Programs" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
       

            </div>
          )}
        </nav>
      );      
}

export default Navbar