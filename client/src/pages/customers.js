import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from '../ui/navigation';
import Footer from '../ui/footer';
import {newcustomer} from '../actions/customeractions';
import Getallcustomers from './getallcustomers';

const Customers = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const[firstname,setFirstname]=useState("");
	const[lastname,setLastname]=useState("");
	const[teln,setTeln]=useState("");
	const[codicefiscale,setCodicefiscale]=useState("");
	const mystyle={marginTop:"20px"};
	const {user :userred}=auth;
   
   
   
	
	const submitfunc=(e)=>{
		e.preventDefault();
		const customer={firstname,lastname,teln,codicefiscale};
		dispatch(newcustomer(customer));
		cleanupfunc();
		
		
	}
	const cleanupfunc=()=>{
		setFirstname("");
		setLastname("");
		setTeln("");
		setCodicefiscale("");
		
	}
	
	
	return(
		<>
		
		<div className="customercontainer" style={{}}>
		<div className="App" style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
      <header className="App-header">
       <div className="formwrapper">
		<div className="inputs" style={mystyle} >
			<span>First Name</span>
			<input  type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value);}}/>
		</div>
		<div className="inputs" style={mystyle} >
			<span>Last Name</span>
			<input  type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value);}}/>
		</div>
		<div className="inputs" style={mystyle} >
			<span>Tel No</span>
			<input  type="text" value={teln} onChange={(e)=>{setTeln(e.target.value);}}/>
		</div>
	    <div className="inputs" style={mystyle}>
			<span>Codice Fiscale</span>
			<input type="text"  value={codicefiscale} onChange={(e)=>{setCodicefiscale(e.target.value);}}/>
	    </div>
		<div> <input type="submit" value="SUBMIT" onClick={submitfunc}/></div>
	   </div>
	   
	  
      </header>
    </div>
		</div>
		<Getallcustomers/>
		
		</>
	);
}

export default Customers;


