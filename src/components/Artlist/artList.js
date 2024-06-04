
import useArts from "../../hooks/useArts";
import ArtRow from "../artrow";
import Banner from "../banner"
import styles from './artList.module.css'




  
const ArtList =()=>{

const {arts,setArts} = useArts();


return(
    <>
      {/* <Banner headerText="KetzArt" subText="Relish The Creativity"/>  */}

   
  
      <div className={styles.luxury}>
              <div className={styles.heading}>
        <h1>Arts For Auction</h1>
        <div className={styles.text_bg}>
          <p>
            <span >Discover exceptional pieces and unique masterpieces at our exclusive art auction, where passion and creativity come together</span>
          </p>
        </div>

      </div>
      </div>
  
    <div className="wrapper content-wrap">
    {arts.map(h => <ArtRow key={h.id} art={h}/>)}
    </div>
  
            
    
    </>
     
)
}

export default ArtList;