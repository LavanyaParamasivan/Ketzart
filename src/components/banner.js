import { useContext, useState ,useRef} from "react";


import { navigationContext } from "../App";
import navValues from "../helpers/navValues"; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Navbar,Nav,NavDropdown,NavItem } from "react-bootstrap";


// const subtitleStyle = {
//     fontFamily: "PT Sans",
//   fontSize: "xxx-large",
//   color: "#8c52ff",


// };

// function stringToColor(string) {
//     let hash = 0;
//     let i;
  
//     /* eslint-disable no-bitwise */
//     for (i = 0; i < string.length; i += 1) {
//       hash = string.charCodeAt(i) + ((hash << 5) - hash);
//     }
  
//     let color = '#';
  
//     for (i = 0; i < 3; i += 1) {
//       const value = (hash >> (i * 8)) & 0xff;
//       color += `00${value.toString(16)}`.slice(-2);
//     }
//     /* eslint-enable no-bitwise */
  
//     return color;
//   }
  
//   function stringAvatar(name) {
//     return {
//       sx: {
//         bgcolor: stringToColor(name),
//       },
//       children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//     };
//   }

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
    {/* {
        open &&   <div  ref={menuRef} className="bg-white p-4 w-30 shadow-lg absolute -center top-20"> 
        <ul>
       {
           Menu.map((menu)=>(
               <li onClick={()=>setOpen(false)} className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100" key={menu}>
                   {menu}
               </li>
       ))
       }
        </ul>
            </div>
    }
   */}
  
  </div>


</header>

  <footer >

 
  <p>&copy; 2024 &nbsp; By Ketzart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
 
  Follow Us  &nbsp;&nbsp;&nbsp;
  <img src="./artImages/instagram.png" className="imgsrc"></img> &nbsp;&nbsp;&nbsp;  <img src="./artImages/facebook.png" className="imgsrc"></img>&nbsp;&nbsp;&nbsp;  <img src="./artImages/twitter.png" className="imgsrc"></img></p>

        </footer>


    
</>
       
    );
       

}
export default Banner;