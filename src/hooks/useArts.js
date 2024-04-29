import { useState,useEffect } from "react";

const useArts =()=>{
    const[arts,setArts] = useState([]);
    useEffect(() => {
      const fetchHouses = async () => {
        const response = await fetch("https://ketzartdataorgin.onrender.com/arts");
        const arts = await response.json();
        setArts(arts);
      };
      fetchHouses();
    }, []);
    return {arts,setArts};
}

export default useArts;