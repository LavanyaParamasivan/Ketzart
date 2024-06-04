import { useContext } from "react";
import currencyFormatter from "../../helpers/currencyFormator";
import { navigationContext } from "../../App";
import Bids from "../Bids/bids";
import navValues from "../../helpers/navValues";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from 'react';

import Banner from "../banner";
import styles from './art.module.css'


const Art = () => {
  const {param:art}= useContext(navigationContext);
  const {navigate} = useContext(navigationContext);
  const [crumbs,setCrumbs]= useState(['Home','Arts']);
  const selected =crumb =>{
    console.log(crumb);
    navigate(navValues.home);
  }
  return (
    <>
   
    <div className={styles.luxury}>



        <div >
          <img
            className="img-fluid"
            src={
              art.photo ? `./artImages/${art.photo}.jpg` : './artlogo.png`'
            }
            alt="art pic"
          />
        </div>
       
  
        {/* <div className="row mt-2">
        
        <h2 className="col-12">{art.name}</h2>
        </div>
        <div className="row">
          <h3 className="col-12">{art.medium}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(art.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">{art.description}</div>
        </div> */}
  
              <div className={styles.heading}>
        <h1>{art.name}</h1>
        <h4>{art.medium}</h4>
        <h4>  {currencyFormatter.format(art.price)}</h4>
        <div className={styles.text_bg}>
          <p>
            <span>{art.description}</span>
          </p>
        </div>

      </div>
     
        <Bids art={art}/>
      {/* </div> */}
      </div>
   
    
    </>
    
  );
};

export default Art;