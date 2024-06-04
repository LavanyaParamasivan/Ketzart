import { useContext, useState ,useRef} from "react";


import { navigationContext } from "../App";
import navValues from "../helpers/navValues"; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { Navbar,Nav,NavDropdown,NavItem } from "react-bootstrap";



const Banner = (props) =>{
    const {navigate }= useContext(navigationContext);
    //const {param:username}= useContext(navigationContext);
  
    const textFromStorage = localStorage.getItem('my-key');
    const menuRef =useRef();
    const imgRef= useRef();
const toggle= "welcome" + ' ' + textFromStorage;
   
    return (
<>

  
   
     
<header className="row mainheader">

    <div className="col-1 mb-4">
        <img src="./artlogo.png"  className="imgall"alt="logo" onClick={()=> navigate(navValues.home)}/>
    </div>
    <div className="col-10 mt-5 text center subtitleStyle"  >
  {props.headerText} &nbsp; - &nbsp;{props.subText}</div>
  <div  className="col-1 profile mt-5">
  <Stack direction="row" spacing={2}>
      {/* <Avatar {...stringAvatar('lav lav')} /> */}
      &nbsp;   &nbsp;   &nbsp;   &nbsp;
      <Avatar  className="avtr">{textFromStorage.charAt(0) + textFromStorage.charAt(1) }</Avatar>
    
  
    </Stack>  
    <Navbar>
        <Nav  >
  <NavDropdown  className="logout mt-0 " title= {toggle}>
    <NavDropdown.Item className="mt-0 bglog" onClick={()=> navigate(navValues.login)}>
        Logout
    </NavDropdown.Item>
  </NavDropdown>
        </Nav>
    </Navbar>
  
  
  </div>
 

</header>

 
    
 
    
</>
       
    );
       

}
export default Banner;