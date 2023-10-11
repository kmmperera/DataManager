import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from '../ui/navigation';
import Footer from '../ui/footer';
import {getallcustomers,deletecustomer} from '../actions/customeractions'
const Getallcustomers = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const customersred = useSelector((state) => state.customer);
	//const [allcustomers,setAllcustomers]=useState(customersred.customers);
   // const [customerid,setCustomerid]=useState();

	const {user :userred}=auth;
	const getSum=(total, num)=> {
	return total + num;
	}		
    const deleteFunc=(id)=>{
		let customerid=id;
		const customer={customerid};
		dispatch(deletecustomer(customer));
		
		
		
	}
   useEffect(()=>{
	   
		dispatch(getallcustomers());
	   //console.log(customersred.customers);
	   //setAllcustomers(customersred.customers);
   },[]);
    return(
		<>
		
		<div className="getcustomerscontainer" style={{display:"flex", flexWrap:"wrap",margin:"0px 50px"}}>
			{
				
				// Object.keys(allcustomers).map((c,index)=>{ return( <div> {allcustomers[c].firstName}</div>) }) 
				
				 Object.keys(customersred.customers).map((c,index)=>{
					 return(
					 <div key={index} style={{border:"1px solid grey",width:"220px",margin:"10px",borderRadius:"4px",padding:"2px"}}> 
					 <p  onClick={()=>{deleteFunc(customersred.customers[c]._id)}}style={{position:"relative",left:"90%",top:"5%",backgroundColor:"red",width:"14px",cursor:"pointer"}}>X</p>
					 <p>First Name:{customersred.customers[c].firstName}</p>
					 <p>Last Name:{customersred.customers[c].lastName}</p>
					 <p>Tel No:{customersred.customers[c].teln}</p>
					 <p>Codice Fiscale:{customersred.customers[c].codicefiscale}</p>
					 <p>Debts:{customersred.customers[c].debts  && customersred.customers[c].debts.map((n)=>{return Number(n)}).reduce(getSum, 0) }</p>
					 <p>Id:{c}</p>

					 </div>
					 
					 ) }
					 ) 

			}
		</div>
		</>
	);
}

export default Getallcustomers;


