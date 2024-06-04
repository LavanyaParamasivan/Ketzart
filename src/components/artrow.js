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
   
    <>

<div className="row">
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
      </div>
      </>
   
    
    );
    }

    export default ArtRow;
