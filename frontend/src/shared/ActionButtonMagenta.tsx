import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage)=> void;
}

const ActionButtonMagenta = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-full bg-magenta-40 text-white px-10 py-2 hover:bg-purple-20 hover:text-white;"
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >{children}</AnchorLink>
  )
}

export default ActionButtonMagenta