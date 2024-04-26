
import useArts from "../hooks/useArts";
import ArtRow from "./artrow";
import Banner from "./banner"


// const artsArray = [
//   {
//     id: 1,
//     name: "Together Is Beautiful",
//     medium: "Acrylic Art",
//     price: 545,
//     description:"Experience the beauty of unity and collaboration in the 'Together is Beautiful' artwork, crafted with vibrant acrylic hues",
//     photo: "277667"
//   },
//   {
//     id: 2,
//     name: "We Stick Together",
//     medium: "Acrylic Art",
//     price: 445,
//     description:"We Stick Together artwork celebrates unity and resilience through vibrant colors and interconnected shapes",
//     photo: "462358"
//   },
// {
// id: 3,
// name: "A Sunset At Sea",
// medium: "Acrylic Art",
// price: 445,
// description:"A Sunset At Sea captures the tranquil beauty of the ocean as the sun dips below the horizon, painting the sky with vibrant hues of orange and pink",
// photo: "259600"
// },
// {
// id: 4,
// name: "A Sunset At Sea",
// medium: "Acrylic Art",
// price: 445,
// description:"A Sunset At Sea captures the tranquil beauty of the ocean as the sun dips below the horizon, painting the sky with vibrant hues of orange and pink",
// photo: "534182"
// },
// {
// id: 5,
// name: "A Women",
// medium: "Acrylic Art",
// price: 445,
// description:"A captivating portrayal of feminine strength and grace, evoking emotions with every stroke",
// photo: "164558"
// }
//   ];
  
const ArtList =()=>{

const {arts,setArts} = useArts();

// const addArts =()=>{
//   setArts([...arts,
//     {
//       id: 3,
//       name: "Sunset At Sea",
//       medium: "Acrylic Art",
//       price: 680,
//     },
//   ]);
// }
return(
    <>
      <Banner headerText="KetzArt" subText="Relish The Creativity"/> 
    <div className=" mb-5 ">
       < h2 className="themeFontColor auctiontext  text-center">
        Artworks On Auction
       </h2>
    </div>
    <div className="wrapper">
    {arts.map(h => <ArtRow key={h.id} art={h}/>)}
    </div>
            
    {/* <div className=" mb-5 ">
       < h2 className="themeFontColor  text-center">
        Artworks On Auction
       </h2>
    </div>
    <div className="row">

       
        </div> */}
     {/* <div className=" mb-5 ">
       < h2 className="themeFontColor  text-center">
        Artworks On Auction
       </h2>
    </div>
    <table className="table table-hover ">
      <thead className="themeFontColor text-cente"> 
        <tr>
          <th>Artwork Name</th>
          <th>Medium</th>
          <th>Asking Price</th>
        </tr>
      </thead>
      <tbody>
         {arts.map(h => <ArtRow key={h.id} art={h}/>)}
       
      </tbody> */}
      {/* <button className="btn btn-primary" onClick={addArts}>
Add
      </button> */}
    {/* </table>
    */}
    </>
     
)
}

export default ArtList;