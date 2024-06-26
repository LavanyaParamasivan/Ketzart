import React from "react";
import '../components/Card-style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Card = props =>{
    return(
      // <Row xs={2} md={3} className="g-4">
      // {Array.from({ length: 4 }).map((_, idx) => (
      //   <Col key={idx}>
        <div className="card">
        <div className="card-body">
          <img src={props.img} alt="" className="card-img-top"/>
          <h6 className="card-title">{props.title}</h6>
          <h7 className="card-title">{props.medium}</h7>
           <p className="card-text text-secondary">
              {props.price}
           </p>
        </div>
       
  <button className="btn btn-secondary" onClick={props.click}>
          Bid
          </button>
 
      </div>
    //   </Col>
    //   ))}
    // </Row>
      
      
    )
}

export default Card;