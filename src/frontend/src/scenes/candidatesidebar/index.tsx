import React, { useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import EntryTechHubLogo from '@/assets/logo_Black_Small.svg'

type CandidateSidebarProps = {
  switchSection: (section: string) => void;
};

const CandidateSidebar: React.FC<CandidateSidebarProps> = ({ switchSection }) => {
  const [open, setOpen] = useState<number>(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

 
  return (
    <Card className="h-[calc(110vh)] w-12/12 p-3 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex-col items-center justify-center gap-4 p-0 b-2">
        <div className="flex flex-row justify-center p-5">
          <img className="" src={EntryTechHubLogo} />
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col pr-4">
            <Avatar src="./src/assets/candidates/EmilyPicture.png" alt="Picture" className="w-[80px] border-purple-70 border-2 rounded-full flex-shrink-01" />
          </div>
          <div className="flex flex-col">
            <Typography variant="h6">Emily</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Telecommunications
            </Typography>
          </div>
        </div>
      </div>
      <div className="m-2 flex-wrap items-center gap-4 pt-6">
        <button className="text-purple-70 font-roboto font-bold text-{17px} leading-5.5 w-5/6 rounded-full white p-2 border-2 mb-5 px-5 py-2.5 text-center inline-flex items-center mr-2">
          <img className="w-5.5 h-5.5 ml-8 mr-1"src="./src/assets/candidates/mail_outline.png"></img>
          Inbox
        </button>
        <button 
          onClick={() => switchSection('profile')}
          className="w-5/6 rounded-full bg-purple-50 p-2 font-bold text-{17px} font-roboto leading-5.5 text-white">Profile</button>
      </div>
      <List>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem className="p-2.5 mb-2 mt-2" selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/icon-dashboard.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
                Overview
              </Typography>
          </ListItem>
          <hr className="my-2 #CAC5CD" />
          <ListItem className="p-2.5 mb-6" selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/Search.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto  text-purple-70">
                Search
              </Typography>
          </ListItem> 
          <ListItem className="mb-6 p-2.5 " selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/favorite.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
                Favorites
              </Typography>
          </ListItem> 
          <ListItem className="p-2.5 mb-6" selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/Games.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography 
                onClick={() => switchSection('mymatches')}
                className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
                My Matches
              </Typography>
          </ListItem> 
          <ListItem className="p-2.5 mb-6" selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/Grading.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
                Initiatives
              </Typography>
          </ListItem> 
          <ListItem className="p-2.5 mb-6" selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/Description.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
                My Application
              </Typography>
          </ListItem> 
          <ListItem className="p-2.5 " selected={open === 0}>
              <ListItemPrefix>
                <img src='./src/assets/candidates/Vector.png' className="h-6 w-6 mr-1"/>
              </ListItemPrefix>
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
                Help
              </Typography>
          </ListItem> 
            </List>

    </Card>
  );
}

export default  CandidateSidebar