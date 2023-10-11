import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchresults} from '../actions/searchactions';
const Customersearch = (props) => {
   const dispatch = useDispatch();
	
	const searchred = useSelector((state) => state.search);
	//const auth=useSelector((state)=>state.auth);
    const[selectedcustomer,setSelectedcustomer]=useState("");

    const [searchinput,setSearchinput]=useState("");
	
    //const[customername,setCustomername]=useState("");
    //const[operatorname,setOperatorname]=useState("");
  
	const selectedstyle={cursor:"pointer",border:"1px solid grey",borderRadius:"4px",padding:"2px",backgroundColor:"#394264"};
	const notselectedstyle={cursor:"pointer",border:"1px solid grey",borderRadius:"4px",padding:"2px"};
    
	
    
    
	const setInputs=(c)=>{
		props.setCustomerdetails && props.setCustomerdetails({...searchred.searches[c]} );

      //  props.setCustomername && props.setCustomername(searchred.searches[c].firstName );
      //  props.setCustomerid && props.setCustomerid(searchred.searches[c]._id );
	//	props.setCustomercodicifiscale && props.setCustomercodicifiscale(searchred.searches[c].codicefiscale );

     //   props.setOperatorname && props.setOperatorname(auth.user.firstName);
	    setSelectedcustomer(c);
	
	}
	
    useEffect(()=>{
		if(searchinput !=""){ 
	//	let searchstring=searchinput;
		const customer={searchinput};
		dispatch(searchresults(customer));
		}
    },[searchinput]);
	
	
    return(
		<>
		<div style={{display:"flex"}}>
		<div  style={{position:"relative"}}>
		<div style={{width:"100%",marginLeft:"20px"}}>
		<div>
        <label>Search Customers</label>
		<input  type="text" value={searchinput} onChange={(e)=>{setSearchinput(e.target.value);}}/>

        </div>
		</div>

<div className="searchresultscontainer" style={{width:"100%",marginTop:"0px",marginLeft:"20px"}}>
			{
				
				// Object.keys(allcustomers).map((c,index)=>{ return( <div> {allcustomers[c].firstName}</div>) }) 
				
				 Object.keys(searchred.searches).map((c,index)=>{
					 return(
                         
					 <div onClick={()=>{setInputs(c)}}key={index} style={selectedcustomer == c ?selectedstyle:notselectedstyle }> 
					 <p> Name:{searchred.searches[c].firstName } {searchred.searches[c].lastName}</p>
					 
					 <p>Codice Fiscale:{searchred.searches[c].codicefiscale}</p>

					 </div>
					
					 ) }
					 ) 

			}
		</div>
		</div>
		
		</div>
		
		</>
	);
}

export default Customersearch;


