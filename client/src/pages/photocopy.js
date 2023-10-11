import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCalendar } from "react-icons/fa";
import Calendar from './calendar';
import {newphotocopy} from '../actions/photocopy';
const Photocopy = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
    const[amount,setAmount]=useState("");
    const[date,setDate]=useState("");
    const[operator,setOperator]=useState("");
	const[todaydate,setTodaydate]=useState("");
	const[fromdate,setFromdate]=useState("");
	const[todate,setTodate]=useState("");
	const[calendaronoff,setCalendaronoff]=useState(false);

	const mystyle={marginTop:"20px",position:"relative"};
	const calendartoggle=()=>{

		if(calendaronoff){setCalendaronoff(false)}
		else{setCalendaronoff(true)}
	}
   useEffect(()=>{

    setOperator(auth.user._id);
   },[]);
   useEffect(()=>{

   
   },[date]);
   
	
	const submitfunc=(e)=>{
		e.preventDefault();
		const details={amount,operator,date};
		dispatch(newphotocopy(details));
		cleanupfunc();
		
		
	}
	const cleanupfunc=()=>{
		setAmount("");
		setDate("");
		
	}
	
	
	return(
		<>
		
		<div className="photocopycontainer" style={{}}>
		<div className="App" style={{width:"30%"}}>
      <header className="App-header" style={{position:"relative",left:"20px"}}>
       <div className="formwrapper">
		
	    <div className="inputs" style={mystyle}>
			<span>Date </span>
			
			<input type="text"  value={date} onChange={(e)=>{setDate(e.target.value);}}/>
			<span onClick={calendartoggle}style={{position:"absolute",cursor:"pointer",marginLeft:"10px"}}><FaCalendar/></span>
			<div style={{position:"absolute",left:"120%",top:"15%"}}>
			{

				calendaronoff && <Calendar dateonoff={calendaronoff} datesetter={setDate}/>
			}
			</div>
	    </div>
		
		<div className="inputs" style={mystyle}>
			<span>Amount</span>
			<input type="text"  value={amount} onChange={(e)=>{setAmount(e.target.value);}}/>
	    </div>
		<div> <input type="submit" value="SUBMIT" onClick={submitfunc}/></div>
	   </div>
	   
	  
      </header>
    </div>
		</div>
		
		
		</>
	);
}

export default Photocopy;


