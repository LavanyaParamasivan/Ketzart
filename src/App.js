import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import ArtList from './components/Artlist/artList';
import ArtRow from './components/artrow';
import  Art from './components/Art/art'
import { useCallback, useState } from 'react';
import navValues from './helpers/navValues';
import React from 'react';
import ComponentPicker from './components/componetPicker';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Route,Router,NavLink,HashRouter,BrowserRouter,Routes} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";

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

{
 nav.current === navValues.home && <Navbar/>
 }
 {
 nav.current === navValues.art && <Navbar/>
 }

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
