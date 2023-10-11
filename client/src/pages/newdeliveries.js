import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Customersearch from './customersearch';

import {newdelivery} from '../actions/delivery';

const Newdelivery = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const delivery=useSelector((state)=>state.delivery);
	const[name,setName]=useState("");
	const[price,setPrice]=useState("");
	//const[customer,setCustomer]=useState("");
	const[customerdetails,setCustomerdetails]=useState({_id:"",firstName:"",lastName:"",codicefiscale:""});



	const mystyle={marginTop:"20px"};
	const {user :userred}=auth;
   const status="paid";
  
   
	
	const submitfunc=(e)=>{
		e.preventDefault();
		const paidDate=new Date();
		const operator=auth.user._id;
		
		const delivery={name,price,customer:customerdetails._id,status,paidDate,operator};
		dispatch(newdelivery(delivery));
		cleanupfunc();
		
		
	}
	const cleanupfunc=()=>{
		setName("");
		setPrice("");
	//	setCustomer("");
	setCustomerdetails({_id:"",firstName:"",lastName:"",codicefiscale:""});
		
	}
	//console.log(delivery.newdelivery.name);
	
	return(
		<>
		<div  style={{display:"flex"}}>

		<div>
		<Customersearch setCustomerdetails={setCustomerdetails}/>
		</div>

		<div style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
		<div style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
      
       <div >
		<div  >
			<span> Customer Name</span>
			<input  type="text" value={customerdetails.firstName} onChange={(e)=>{setCustomerdetails({...customerdetails,firstName:e.target.value})}}/>
		</div>
		<div >
			<span>Description </span>
			<input  type="text" value={name} onChange={(e)=>{setName(e.target.value);}}/>
		</div>
	
		<div  >
			<span>Codice fiscale</span>
			<input  type="text" value={customerdetails.codicefiscale} onChange={(e)=>{setCustomerdetails({...customerdetails,codicefiscale:e.target.value})}}/>
		</div>
		<div >
			<span>Price</span>
			<input  type="text" value={price} onChange={(e)=>{setPrice(e.target.value);}}/>
		</div>
		
		<div> <input type="submit" value="SUBMIT" onClick={submitfunc}/></div>
	   </div>
	   
	  
     
    </div>
		</div>

		</div>

		{  delivery.newdelivery.name && (  
		<div style={{width:"40%",border:"1px solid grey",borderRadius:"4px",padding:"2px",margin:"10px"}}>
			<p>Last Item</p>
			<p>Name:{delivery.newdelivery.name && delivery.newdelivery.name}</p>
			<p>Price:{delivery.newdelivery.price && delivery.newdelivery.price}</p>
			<p>Date:{delivery.newdelivery.paidDate && delivery.newdelivery.paidDate.split("T")[0]}</p>

		</div>	)
		}
		</>
	);
}

export default Newdelivery;


