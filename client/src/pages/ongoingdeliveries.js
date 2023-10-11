import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ongoingdeliverysub from './ongoingdeliverysub';
import {getongoingdelivery,updategetongoingdelivery} from '../actions/delivery';

const Ongoingdelivery = (props) => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const delivery=useSelector((state)=>state.delivery);
	
	const mystyle={marginTop:"20px"};
	const {user :userred}=auth;
   const status="paid";
  
    useEffect(()=>{
        dispatch(getongoingdelivery());

    },[props.ongoingprop]);
    
  
	//console.log(delivery.newdelivery.name);
	
	return(
		<>
		{

            Object.keys(delivery.ongoingdelivery).map((d,index)=>{
               
               return(  <Ongoingdeliverysub key={index} nk={index} d={d}dobj={delivery.ongoingdelivery[d]}/>)
            })
        }
		
		</>
	);
}

export default Ongoingdelivery;


