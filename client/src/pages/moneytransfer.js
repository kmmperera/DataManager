import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deletecustomer} from '../actions/customeractions'
import { FaCalendar } from "react-icons/fa";
import Calendar from './calendar';
import {searchresults} from '../actions/searchactions';
import {newmoneytransfer} from '../actions/moneytransfer';
const Moneytransfer = () => {
   const dispatch = useDispatch();
	
	const searchred = useSelector((state) => state.search);
	const auth=useSelector((state)=>state.auth);
	const moneytransferred=useSelector((state)=>state.moneytransfer);
	//const [allcustomers,setAllcustomers]=useState(searchred.searches);
    const [searchinput,setSearchinput]=useState("");
	const[selectedcustomer,setSelectedcustomer]=useState("");
	const[calendaronoff,setCalendaronoff]=useState(false);
	const[date,setDate]=useState("");

	const[amount,setAmount]=useState("");
    const[customername,setCustomername]=useState("");
    const[operatorname,setOperatorname]=useState("");
    const[bankaccount,setBankaccount]=useState("");
	const[transferdate,setTransferdate]=useState("");
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
		
    setCustomername(searchred.searches[c].firstName );
    setOperatorname(auth.user.firstName);
	setSelectedcustomer(c);
	
	}
	const calendartoggle=()=>{

		if(calendaronoff){setCalendaronoff(false)}
		else{setCalendaronoff(true)}
	}
	const newtransfer=()=>{
		let details={
			operator:auth.user._id,
			customer:selectedcustomer,
			amount:amount,
			date:transferdate,
			bankaccount:bankaccount
		};
		dispatch(newmoneytransfer(details));
	}
    useEffect(()=>{
		if(searchinput !=""){ 
		let searchstring=searchinput;
		const customer={searchinput};
		dispatch(searchresults(customer));
		}
    },[searchinput]);
	useEffect(()=>{
		setTransferdate(date);
   
	},[date]);
	useEffect(()=>{
		console.log(moneytransferred.newmoneytransfer);
   
	},[moneytransferred.newmoneytransfer]);
    return(
		<>
		<div style={{display:"flex"}}>
		<div >
		<div style={{width:"100%",marginLeft:"20px"}}>
		<div>
        <label>Search Customers</label>
		<input  type="text" value={searchinput} onChange={(e)=>{setSearchinput(e.target.value);}}/>

        </div>
		</div>

<div className="searchresultscontainer" style={{width:"100%",margin:"0px 20px"}}>
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
		<div style={{width:"40%",marginLeft:"auto",marginRight:"auto"}}>
		<div>
        <label>Customer Name</label>
		<input  type="text" value={customername} onChange={(e)=>{setCustomername(e.target.value);}}/>

        </div>
		<div>
        <label>Amount</label>
		<input  type="text" value={amount} onChange={(e)=>{setAmount(e.target.value);}}/>

        </div>
		<div style={{position:"relative"}}>
        <label>Date</label>
		<input  type="text" value={transferdate} onChange={(e)=>{setTransferdate(e.target.value);}}/>
		<span onClick={calendartoggle}style={{position:"absolute",cursor:"pointer",marginLeft:"10px"}}><FaCalendar/></span>
			<div style={{position:"absolute",right:"-7%",top:"105%"}}>
			{

				calendaronoff && <Calendar dateonoff={calendaronoff} datesetter={setDate}/>
			}
			</div>
        </div>
		<div>
        <label>Bank Account No</label>
		<input  type="text" value={bankaccount} onChange={(e)=>{setBankaccount(e.target.value);}}/>

        </div>
		<div>
        <label>Operator Name</label>
		<input  type="text" value={operatorname} onChange={(e)=>{setOperatorname(e.target.value);}}/>

        </div>
		<div > <input type="submit" value="SUBMIT" onClick={newtransfer}/></div>
		</div>
		</div>
		<div >
			{
				Object.keys(moneytransferred.newmoneytransfer).map((m,index)=>{
					return (
						<div style={{width:"40%",border:"1px solid grey",borderRadius:"4px",padding:"2px",margin:"10px"}} key={index+900}>
						<p>Customer : {moneytransferred.newmoneytransfer[m].firstName}</p>
						<p>Amount :{moneytransferred.newmoneytransfer[m].moneytransfer[moneytransferred.newmoneytransfer[m].moneytransfer.length-1].amount}</p>
						<p>Account :{moneytransferred.newmoneytransfer[m].moneytransfer[moneytransferred.newmoneytransfer[m].moneytransfer.length-1].bankaccount}</p>
						<p>Date :{moneytransferred.newmoneytransfer[m].moneytransfer[moneytransferred.newmoneytransfer[m].moneytransfer.length-1].date.split("T")[0]}</p>

						</div>

					)
				})
			}
		</div>
		</>
	);
}

export default Moneytransfer;


