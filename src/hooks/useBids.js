import { useEffect, useState } from "react";
import { handleResponse, handleError } from "./apiUtils";


const useBids = (artId) => {
  const [bids, setBids] = useState([]);
  //const { get } = (`http://localhost:3001/bids/${artId}`);

  useEffect(() => {
    const fetchBids = async () => {
        const response = await fetch(`https://ketzartdataorgin.onrender.com/bids?artId=${artId}`);
        const bids = await response.json();
      setBids(bids);
 
    };
    fetchBids();
  }, []);

  const postBid = async (bid) => {
    await fetch(`https://ketzartdataorgin.onrender.com/bids?artId=${bid.artId}`, {
      method:"POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    })
    .then(handleResponse)
    .catch(handleError);
  };
  const updatedBid = async (bid) => {
  await fetch(`https://ketzartdataorgin.onrender.com/bids/${bid.id}`, {
      method:"PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
     

    })
   
  };
const deletedBid = async (bid) => {
  await fetch(`https://ketzartdataorgin.onrender.com/bids/${bid.id}`, {
      method:"DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
     

    })
   
  };

  const addBid = (bid) => {
    postBid(bid);
    setBids([...bids, bid]);
  };
const updateBid = (bid,edit) =>{
 updatedBid (edit);
  setBids(bid);
}
const deleteBid =(bid,afterslice)=>{
  deletedBid(afterslice[0]); 
  setBids(bid);
}

  return { bids, addBid,setBids,updateBid ,deleteBid};
};

export default useBids;


// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ""), {
//     method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(course)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }