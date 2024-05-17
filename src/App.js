import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import ArtList from './components/artList';
import ArtRow from './components/artrow';
import  Art from './components/art'
import { useCallback, useState } from 'react';
import navValues from './helpers/navValues';
import React from 'react';
import ComponentPicker from './components/componetPicker';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Route,Router,NavLink,HashRouter,BrowserRouter,Routes} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

const navigationContext = React.createContext(navValues.login)
function App() {
  
  const navigate = useCallback(
 (navTo,param) => setNav({current:navTo,param, navigate}),
 []
  );
const [nav,setNav] = useState({current:navValues.login, navigate});
  return (
    <>
    <navigationContext.Provider value={nav}>
   
    <ComponentPicker currentNavLocation={nav.current}></ComponentPicker>
    
    {/* <Routes>
        <Route path ="/" element={<Login />} />
    <Route path ="/register" element={<Register />} />
    <Route path ="/arts" element={<ArtList />} />
    <Route path ="/art" element={<Art />} />


    </Routes> */}
  {
 nav.current === navValues.home && <Footer />
 }
 {
 nav.current === navValues.art && <Footer />
 }
   
    </navigationContext.Provider>
  
</>

  );
}
export {navigationContext};
export default App;
