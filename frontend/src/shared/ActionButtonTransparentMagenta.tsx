import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage)=> void;
}

const ActionButtonTransparentMagenta = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-full bg-white border-solid border-2 border-magenta-40 text-magenta-40 px-10 py-2 hover:bg-magenta-40 hover:text-white"
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >{children}</AnchorLink>
  )
}

export default ActionButtonTransparentMagenta