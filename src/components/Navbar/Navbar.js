import { React, useState,useContext } from 'react';
import styles from './Navbar.module.css';
import { navigationContext } from "../../App";
import navValues from "../../helpers/navValues"; 


import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const Navbar = () => {
  const {navigate }= useContext(navigationContext);
  const [nav, setNav] = useState(false);
  const textFromStorage = localStorage.getItem('my-key');

  const toggle= "welcome" + ' ' + textFromStorage;
  return (
    <header className={styles.navbar}>
     <button onClick={()=> navigate(navValues.home)}><img src="./logo.png" className='imgall' alt="logo" /></button> 
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <a ><button  onClick={()=> navigate(navValues.home)} className={styles.navbtn}>Home
              </button></a>
          </li>
          <li className={styles.profile}>
            <AiOutlineUser size={35} style={{ marginTop: '6px' }} /><span className={styles.profile}>{toggle}
              </span>
          </li>
          <li>
            <a ><button  onClick={()=> navigate(navValues.login)} className={styles.navbtn}>SignOut
              </button></a>
          </li>
        
         
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        
      </div>
    </header>
  );
};

export default Navbar;