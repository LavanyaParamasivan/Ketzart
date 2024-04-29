
import useArts from "../hooks/useArts";
import ArtRow from "./artrow";
import Banner from "./banner"



  
const ArtList =()=>{

const {arts,setArts} = useArts();


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