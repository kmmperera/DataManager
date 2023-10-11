import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Customersearch from './customersearch';

import {newdebt} from '../actions/debts';
const Debts = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const[debtvalue,setDebtvalue]=useState("");
	
    const[customerdetails,setCustomerdetails]=useState({_id:"",firstName:"",lastName:"",codicefiscale:""});

	

	const mystyle={marginTop:"20px"};
	
   
   
   
	
	const submitfunc=(e)=>{
		e.preventDefault();
		const date=new Date();
		const operator=auth.user._id;
		const details={debtvalue,id:customerdetails._id,date,operator};
		dispatch(newdebt(details));
		cleanupfunc();
		
		
	}
	const cleanupfunc=()=>{
		setDebtvalue("");
		setCustomerdetails({_id:"",firstName:"",lastName:"",codicefiscale:""});
		
	}


	
	
	return(
		<>
		<div style={{display:"flex"}}>
		<div>
        <Customersearch setCustomerdetails={setCustomerdetails}/>
        </div>
		<div style={{width:"40%",marginLeft:"auto",marginRight:"auto"}} >
		<div >
      
		
	    <div >
			<span>Customer Codice Fiscale </span>
			<input type="text"  value={customerdetails.codicefiscale} onChange={(e)=>{setCustomerdetails({...customerdetails,codicefiscale:e.target.value});}}/>
	    </div>
		<div >
			<span>Customer Name </span>
			<input type="text"  value={customerdetails.firstName} onChange={(e)=>{setCustomerdetails({...customerdetails,firstName:e.target.value});}}/>
	    </div>
		<div >
			<span>Amount</span>
			<input type="text"  value={debtvalue} onChange={(e)=>{setDebtvalue(e.target.value);}}/>
	    </div>
		

		<div> <input type="submit" value="SUBMIT" onClick={submitfunc}/></div>
	   
    </div>
		</div>
		</div>
		
		</>
	);
}

export default Debts;


