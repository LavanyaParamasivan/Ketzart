import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormator";
import { navigationContext } from "../App";
import Bids from "./bids";
import navValues from "../helpers/navValues";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from 'react';
import  Breadcrumb from './Breadcrumb';
import Banner from "./banner";

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
     <Banner headerText="KetzArt" subText="Relish The Creativity"/> 
    <Breadcrumb crumbs={crumbs} selected={selected}/>
    <div className="row ">
      <div className="col-5 art">
        <div className="row mt-2">
          <img
            className="img-fluid"
            src={
              art.photo ? `./artImages/${art.photo}.jpg` : './artlogo.png`'
            }
            alt="art pic"
          />
        </div>
      </div>
      
      <div className="col-7 bid">
        <div className="row mt-2">
        
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
          <div className="col-12 mt-2">{art.description}</div>
        </div>
        <Bids art={art}/>
      </div>
  
    </div>
    <div></div>
    
    </>
    
  );
};

export default Art;