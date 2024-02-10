import React, { useContext } from "react";
import {Card,Typography,List,ListItem,ListItemPrefix,Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";
import {PresentationChartBarIcon, UserCircleIcon,  PowerIcon} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../Authentication/AuthProvider";
import {IconButton, Input,Drawer,} from "@material-tailwind/react";
import {} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon,Bars3Icon,XMarkIcon,} from "@heroicons/react/24/outline"; 
import { NavLink } from 'react-router-dom';
import { GrUserManager } from "react-icons/gr";
import { ImUsers } from "react-icons/im";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const {user, logOut} =useContext(AuthContext)
  const navLinks = 'flex bg-gray-200  p-2 rounded-lg hover:bg-gray-500'
 

  const handleLogOut =()=>{
    logOut()
  }


 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Identity Nest
            </Typography>
          </div>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          {user?
          <List>
          

            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />

            <NavLink to='/users' className={navLinks}>
              <ListItemPrefix>
                <ImUsers  className="h-5 w-5" />
              </ListItemPrefix>
                Users
            </NavLink>

            <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-2 w-2 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className={navLinks} selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-1">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Profile
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className=" ">
            <List className="p-0 space-y-2 ml-4">

            <NavLink to='/' className={navLinks}>
            <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
                Personal
            </NavLink>

            <NavLink to='/' className={navLinks}>
            <ListItemPrefix>
                <GrUserManager className="text-black"/>
            </ListItemPrefix>
                Professional
            </NavLink>

            </List>
          </AccordionBody>
        </Accordion>

            <NavLink className='flex ml-3 mt-2' onClick={handleLogOut}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </NavLink>

          </List>
        :
        <NavLink to='/logIn' className='flex'>
        <ListItemPrefix>
          <PowerIcon className="h-5 w-5" />
        </ListItemPrefix>
        Log In
        </NavLink>
        }
        </Card>
      </Drawer>
    </>
  

    // <Card className="h-[calc(100vh)] rounded-none  w-fit lg:w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    //   <div className="mb-2 p-4">
    //     <Typography variant="h5" color="blue-gray">
    //       Info Nest
    //     </Typography>
    //   </div>
    //   {user?
    //   <List>

       


    //     <NavLink className={navLinks}>
    //       <ListItemPrefix>
    //         <InboxIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       Users
    //       <ListItemSuffix>
    //         <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
    //       </ListItemSuffix>
    //     </NavLink>


        
      
    //     }

    // </Card>
  );
}