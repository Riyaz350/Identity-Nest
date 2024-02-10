import { useContext, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";
import {MagnifyingGlassIcon, ChevronUpDownIcon,} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, IconButton, Tooltip, Checkbox, } from "@material-tailwind/react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

  const TABS = [ { label: "All", value: "all", }, { label: "Monitored", value: "monitored", }, { label: "Unmonitored", value: "unmonitored", }, ];
  const thClass = "cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"

   
const Users = () => {
    const {usersCol} = useContext(AuthContext)
    const [checked, setChecked] = useState(false) 
    

    return (
        <div className="max-w-7xl mx-auto">
            <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div> */}

      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
            <th className={`${thClass}  pl-1 flex items-center w`}>
            <Checkbox onClick={()=>setChecked(!checked)} />
            <FaRegTrashAlt className={`${!checked ? 'invisible' : 'visible'} text-red-500 bg-white hover:scale-110`} />
            </th>
            <th className={`${thClass}`}>
              User
            </th>
            <th className={`${thClass}`}>
              Age
            </th>
            <th className={thClass}>
              Role
            </th>
            <th className={thClass}>
              Status
            </th>
            <th className={thClass}>
              Joined Date
            </th>
            <th className={thClass}>
               
            </th>
            </tr>
          </thead>


          <tbody>
            {usersCol.map(
              (userr, index) => {
                const isLast = index === usersCol.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={userr?.id}>
                    <td><Checkbox checked={checked} /></td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src='https://i.ibb.co/f4hGS6m/image.png' alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {userr?.doc.Name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {userr?.doc.userEmail}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td>
                    <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {userr?.doc.Age ? userr?.doc.Age : 'Not set'}
                        </Typography>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userr?.doc.Role}
                        </Typography>

                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={userr?.doc.Active ? "Active" : "Inactive"}
                          color={userr?.doc.Active ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {userr?.doc.Joined}
                      </Typography>
                    </td>

                    <td className={`${classes} flex gap-2 text-black text-xl`}>
                    <CiEdit />
                    <FaEye />
                    <FaRegTrashAlt className="text-red-500 text-base" />
                    </td>
                    
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
        </div>
    );
};

export default Users;
