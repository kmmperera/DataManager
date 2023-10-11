import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ongoingdeliverysub from './ongoingdeliverysub';
import {getongoingdelivery,updategetongoingdelivery,getcompleteddeliveries} from '../actions/delivery';

const Completeddelivery = (props) => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const delivery=useSelector((state)=>state.delivery);
	
	const mystyle={marginTop:"20px"};
	const {user :userred}=auth;
   const status="paid";
  
    useEffect(()=>{
        dispatch(getcompleteddeliveries());

    },[props.ongoingprop]);

  
	//console.log(delivery.newdelivery.name);
	
	return(
		<>
		{

            Object.keys(delivery.completeddeliveries).map((d,index)=>{
               
               return(  <Ongoingdeliverysub key={index} nk={index} d={d}dobj={delivery.completeddeliveries[d]}/>)
            })
        }
		
		</>
	);
}

export default Completeddelivery;


