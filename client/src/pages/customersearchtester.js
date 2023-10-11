import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Customersearch from './customersearch';
const Tester = () => {
   const dispatch = useDispatch();
	
	
 //const[customerid,setCustomerid]=useState("");
  //  const[customername,setCustomername]=useState("");
 //   const[customercodicifiscale,setCustomercodicifiscale]=useState("");
    const[customerdetails,setCustomerdetails]=useState({_id:"",firstName:"",lastName:"",codicefiscale:""});
    
    return(
		<>
        <div style={{display:"flex"}}>
		<div>
        <Customersearch setCustomerdetails={setCustomerdetails}/>
        </div>
        <div style={{}}>
        <div style={{width:"40%",marginLeft:"auto",marginRight:"auto"}}>
        <label>Id</label>
        <input type="text" value={customerdetails._id} onChange={(e)=>{setCustomerdetails({...customerdetails,_id:e.target.value})}}/>
        <label>Name</label>
        <input type="text" value={customerdetails.firstName} onChange={(e)=>{setCustomerdetails({...customerdetails,firstName:e.target.value})}}/>
        <label>Codici fiscale</label>
        <input type="text" value={customerdetails.codicefiscale} onChange={(e)=>{setCustomerdetails({...customerdetails,codicefiscale:e.target.value})}}/>
        </div>
        </div>
        </div>
		</>
	);
}

export default Tester;


