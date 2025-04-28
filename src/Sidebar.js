import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
 // ListItemSuffix,
  //Chip,
} from '@material-tailwind/react';

 import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
      UserCircleIcon,
//   Cog6ToothIcon, 
//   InboxIcon,
//   PowerIcon,
 } from "@heroicons/react/24/solid"

// //import { Link } from 'react-router-dom';

import {useNavigate} from 'react-router-dom';


//import App from './App';


import{FaHome,FaProjectDiagram} from "react-icons/fa"


const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Card className="ml-auto opacity-90  h-full w-60  shadow-xl bg-gradient-to-r from-indigo-600 to-purple-800">
      <div className="p-4 mb-2">
        <Typography variant="h5" color="white" className="text-xl underline">
          Sidebar
        </Typography>   
       </div>
       <List>
        <ListItem>
          <ListItemPrefix className="px-4 py-4">
            <FaHome className="text-white h-8 w-8 "/>
          </ListItemPrefix> 
         
        <Typography variant="h5" color="white" className="text-xl" onClick={async() => {console.log('Clicked Home'); navigate("/")}}>
          Home
        </Typography>   
        </ListItem> 
        <ListItem>
          <ListItemPrefix className="px-4 py-4"> 
            <FaProjectDiagram className="text-white h-8 w-8"/>
          </ListItemPrefix>
        <Typography variant="h5" color="white" className="text-xl" onClick={() => navigate("../Project",{replace:true})}>
          Projects
        </Typography>   
        </ListItem>
        <ListItem> 
          <ListItemPrefix className='px-4 py-4'>
            <UserCircleIcon className="text-white h-8 w-8"/>
          </ListItemPrefix>
        <Typography variant="h5" color="white" className="text-xl"  onClick={() => navigate("/Contacts")}>
          Contacts
        </Typography>   
          </ListItem>
        </List>
       </Card>
   );
};

export default Sidebar;