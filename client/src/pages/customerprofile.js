import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deletecustomer} from '../actions/customeractions'
import {searchresults} from '../actions/searchactions'
const Customerprofile = () => {
   const dispatch = useDispatch();
	
	const searchred = useSelector((state) => state.search);
	//const [allcustomers,setAllcustomers]=useState(searchred.searches);
    const [searchinput,setSearchinput]=useState("");
    const[selectedcustomer,setSelectedcustomer]=useState("");
	const selectedstyle={cursor:"pointer",width:"100%",border:"1px solid grey",borderRadius:"4px",padding:"2px",backgroundColor:"#394264"};
	const notselectedstyle={cursor:"pointer",width:"100%",border:"1px solid grey",borderRadius:"4px",padding:"2px"};


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
    const setInputs=(c)=>{
		
       
        setSelectedcustomer(c);
        
        }
        useEffect(()=>{
            if(searchinput !=""){ 
            let searchstring=searchinput;
            const customer={searchinput};
            dispatch(searchresults(customer));
            }
        },[searchinput]);

        console.log(selectedcustomer !="" && searchred.searches[selectedcustomer] &&  searchred.searches[selectedcustomer].debts.length)

    return(
		<>
		<div style={{width:"30%",marginLeft:"20px"}}>
		<div>
        <label>Search</label>
		<input  type="text" value={searchinput} onChange={(e)=>{setSearchinput(e.target.value);}}/>

        </div>
		
		</div>

<div className="searchresultscontainer" style={{minHeight:"40vh",width:"30%",margin:"0px 20px"}}>
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
        <div>
            {

             ( searchred.searches[selectedcustomer] &&  Object.keys(searchred.searches).length >0 &&  selectedcustomer !="") ?(<div>{

             <div>   
                 <div style={{padding:"20px",margin:"35px"}}>
                     <p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"15%"}}> Info</p>
                <p>Name:  {searchred.searches[selectedcustomer].firstName}</p>
                <p>Codice Fiscale:  {searchred.searches[selectedcustomer].codicefiscale}</p>
                </div>
                <div  style={{padding:"20px",margin:"35px"}}>
                <p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"15%"}}> Debts</p>
                <table>
                <thead>
				<tr>
   					 <th>Date</th>
   					 <th>Amount</th>
   					 <th>operator</th>
  				</tr>
				  </thead>
				  <tbody>
                    {
                        
                        searchred.searches[selectedcustomer] &&    searchred.searches[selectedcustomer].debts.map((d,index)=>{
                              return(  
                                   <tr key={index}>
                                <td> {d.date.split("T")[0]}</td>
                                <td> {d.amount}</td>
                                <td> {d.operator.firstName}</td>

                                </tr>
                                )
                            })
                     
                        
                        
                    }
                    </tbody>
                    </table>
                </div>

                <div  style={{padding:"20px",margin:"35px"}}>
                <p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"15%"}}> Money Transfers</p>

<table>
                <thead>
				<tr>
   					 <th>Date</th>
   					 <th>Amount</th>
   					 <th>operator</th>
  				</tr>
				  </thead>
				  <tbody>
                    {
                        
                        searchred.searches[selectedcustomer] &&    searchred.searches[selectedcustomer].moneytransfer.map((d,index)=>{
                              return(  
                                   <tr key={index+1000}>
                                <td> {d.date.split("T")[0]}</td>
                                <td> {d.amount}</td>
                                <td> {d.operator.firstName}</td>

                                </tr>
                                )
                            })
                     
                        
                        
                    }
                    </tbody>
                    </table>

                </div>

               
            </div>
                }</div>):null

            }

        </div>

		</>
	);
}

export default Customerprofile;


