import React, { useContext } from "react";
import currencyFormator from "../helpers/currencyFormator"
import { navigationContext } from "../App";
import navValues from "../helpers/navValues";
import Card from "./CardUi";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardHeader
  } from 'mdb-react-ui-kit';



const ArtRow=({art})=>{

    const {navigate} = useContext(navigationContext)
    return(
    //     <tr onClick={()=> navigate(navValues.art, art)} >
    //     <td title="Click here">
    // {art.name}
    //     </td>
    //     <td>
    // {art.medium}
    //     </td>
    //    {art.price && (
    //     <td className={'${art.price >= 500 ? "text-primary" : "" }'}>
         
    // {currencyFormator.format(art.price)}
    //     </td>)}
    
    // </tr>

    <MDBRow className='row-cols-1 row-cols-md-3 g-4   text-center ' >
    <MDBCol>
      <MDBCard>
        <MDBCardImage
       src={
       art.photo ? `./arts/${art.photo}.jpg` : './artlogo.png`'
                } 
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle><em>{art.name}</em></MDBCardTitle>
        
          <MDBCardText>
          {art.medium} 

          </MDBCardText>
          <MDBCardText>
      
          {currencyFormator.format(art.price)}
          </MDBCardText>
       
        </MDBCardBody>
        <MDBBtn onClick={()=> navigate(navValues.art, art)}>Bid</MDBBtn>
      </MDBCard>
  
    </MDBCol>
      </MDBRow>

  
    // <div className="wrapper">
    //     <Card  img={
    // //           art.photo ? `./artImages/${art.photo}.jpg` : './artlogo.png`'
    // //         } title={art.name} medium={art.medium} price={currencyFormator.format(art.price)} click={()=> navigate(navValues.art, art)}/>
    // </div>
    // <div className="cardbox justify-content-center">
      
    //     <div className="row container">
    //         <div className="col-sm ">
    //             <Card  img={
    //           art.photo ? `./artImages/${art.photo}.jpg` : './artlogo.png`'
    //         } title={art.name} medium={art.medium} price={currencyFormator.format(art.price)} click={()=> navigate(navValues.art, art)}/>
    //         </div>
    //         {/* <div className="col-md-4">
    //             <Card/>
    //         </div>
    //         <div className="col-md-4">
    //             <Card/>
    //         </div> */}
    //     </div>
    
    // </div>
    
    );
    }

    export default ArtRow;
