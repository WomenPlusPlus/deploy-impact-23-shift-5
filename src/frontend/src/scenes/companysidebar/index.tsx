import React from "react";
import {
  Card,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import EntryTechHubLogo from '@/assets/logo_Black_Small.svg'

type CompanySidebarProps = {
  onNewJobClick: () => void;
  onProfileClick: () => void;
};

const CompanySidebar = (props: CompanySidebarProps) => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="flex flex-col w-full p-3 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex-col items-center justify-center gap-4 p-0 b-2">
        <div className="flex flex-row justify-center p-5">
          <img className="" src={EntryTechHubLogo} />
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col pr-4">
            <Avatar src="./src/assets/SwissComLogo.png" alt="Picture" className="w-[80px] border-purple-70 border-2 rounded-full flex-shrink-01" />
          </div>
          <div className="flex flex-col">
            <Typography variant="h6">Swisscom</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Telecommunications
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 pt-6 ">
        <button className="flex flex-row text-purple-70 font-roboto font-bold text-{17px} leading-5.5 w-5/6 rounded-full white p-2 border-2 px-5 ">
          <img className="w-5.5 h-5.5 ml-8 mr-1"src="./src/assets/candidates/mail_outline.png"></img>
          Inbox
        </button>
        <button onClick={props.onProfileClick} className=" flex flex-row w-5/6 rounded-full bg-purple-50 p-2 font-bold text-{17px} justify-center font-roboto leading-5.5 text-white">Profile</button>
        <button onClick={props.onNewJobClick} className=" flex flex-row w-5/6 rounded-full bg-magenta-40 p-2 font-bold text-{17px} justify-center font-roboto leading-5.5 text-white">New Job</button>

        
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
              <Typography className="mr-auto font-bold text-sm/[17px] font-roboto text-purple-70">
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

export default CompanySidebar