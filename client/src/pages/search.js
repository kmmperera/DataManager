import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deletecustomer} from '../actions/customeractions'
import {searchresults} from '../actions/searchactions'
const Search = () => {
   const dispatch = useDispatch();
	
	const searchred = useSelector((state) => state.search);
	//const [allcustomers,setAllcustomers]=useState(searchred.searches);
    const [searchinput,setSearchinput]=useState("");
   

    const getSum=(total, num)=> {
        return total + num;
        }		
	
    const getsearch=()=>{
		let searchstring=searchinput;
		const customer={searchinput};
		dispatch(searchresults(customer));
		
		
		
    }
    const deleteFunc=(id)=>{
		let customerid=id;
		const customer={customerid};
		dispatch(deletecustomer(customer));
		
		
		
	}
    // useEffect(()=>{
	// 	if(searchinput !=""){ 
	// 	let searchstring=searchinput;
	// 	const customer={searchinput};
	// 	dispatch(searchresults(customer));
	// 	}
	// },[searchinput]);
    return(
		<>
		<div style={{width:"30%",marginLeft:"20px"}}>
		<div>
        <label>Search</label>
		<input  type="text" value={searchinput} onChange={(e)=>{setSearchinput(e.target.value);}}/>

        </div>
		<div > <input type="submit" value="SUBMIT" onClick={getsearch}/></div>
		</div>

<div className="searchresultscontainer" style={{display:"flex", flexWrap:"wrap",margin:"0px 50px"}}>
			{
				
				// Object.keys(allcustomers).map((c,index)=>{ return( <div> {allcustomers[c].firstName}</div>) }) 
				
				 Object.keys(searchred.searches).map((c,index)=>{
					 return(
					 <div key={index} style={{border:"1px solid grey",width:"200px",margin:"10px",borderRadius:"4px",padding:"2px"}}> 
					 <p  onClick={()=>{deleteFunc(searchred.searches[c]._id)}}style={{position:"relative",left:"90%",top:"5%",backgroundColor:"red",width:"14px",cursor:"pointer"}}>X</p>
					 <p>First Name:{searchred.searches[c].firstName}</p>
					 <p>Last Name:{searchred.searches[c].lastName}</p>
					 <p>Tel No:{searchred.searches[c].teln}</p>
					 <p>Codice Fiscale:{searchred.searches[c].codicefiscale}</p>
					 <p>Debts:{searchred.searches[c].debts  && searchred.searches[c].debts.map((n)=>{return Number(n)}).reduce(getSum, 0) }</p>

					 </div>
					 
					 ) }
					 ) 

			}
		</div>

		</>
	);
}

export default Search;


