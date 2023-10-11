import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCalendar } from "react-icons/fa";
import Calendar from './calendar';
import {searchphotocopy} from '../actions/photocopy';
const SearchPhotocopy = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const pcsearch = useSelector((state) => state.photocopysearch);

    const[amount,setAmount]=useState("");
    const[date,setDate]=useState("");
    const[operator,setOperator]=useState("");
	const[todaydate,setTodaydate]=useState("");
	const[fromdate,setFromdate]=useState("");
	const[todate,setTodate]=useState("");
	const[startcalendaronoff,setStartdayCalendaronoff]=useState(false);
	const[endcalendaronoff,setEnddayCalendaronoff]=useState(false);
	let totalpc=0;
	let totalarry=[];
	const mystyle={marginTop:"20px",position:"relative"};
	const startdaycalendartoggle=()=>{

		if(startcalendaronoff || endcalendaronoff ){setStartdayCalendaronoff(false)}
		else{setStartdayCalendaronoff(true)}
	}
	const enddaycalendartoggle=()=>{

		if(endcalendaronoff || startcalendaronoff){setEnddayCalendaronoff(false)}
		else{setEnddayCalendaronoff(true)}
	}
	const getSum=(total, num)=> {
		return total + num;
		}	
	const arrayred=(cl)=>{
		totalpc=cl.reduce(getSum, 0);
		console.log( cl);

	}
	const caltotal=(arracallback)=>{

		totalarry = Object.keys(pcsearch.photocopysearches ).map((c)=>{
			console.log( pcsearch.photocopysearches[c].amount);
			console.log( totalpc);

				return   pcsearch.photocopysearches[c].amount;
		
			
			
		})
		arracallback(totalarry);
	//	totalpc=totalarry.reduce(getSum, 0);
	}	
	caltotal(arrayred);
   useEffect(()=>{

    setOperator(auth.user._id);
   },[]);
   useEffect(()=>{

   
   },[date]);
   
	
	const submitfunc=(e)=>{
		e.preventDefault();
		const details={todate,operator,fromdate};
		dispatch(searchphotocopy(details));
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
			<span>Starting Date </span>
			
			<input type="text"  value={fromdate} onChange={(e)=>{setFromdate(e.target.value);}}/>
			<span onClick={startdaycalendartoggle}style={{position:"absolute",cursor:"pointer",marginLeft:"10px"}}><FaCalendar/></span>
			<div style={{position:"absolute",left:"120%",top:"15%"}}>
			{

				startcalendaronoff && <Calendar fromdate={startcalendaronoff} fromdatesetter={setFromdate}/>
			}
			</div>
	    </div>
		
		<div className="inputs" style={mystyle}>
			<span>Ending Date</span>
			<input type="text"  value={todate} onChange={(e)=>{setTodate(e.target.value);}}/>
			<span onClick={enddaycalendartoggle}style={{position:"absolute",cursor:"pointer",marginLeft:"10px"}}><FaCalendar/></span>
			<div style={{position:"absolute",left:"120%",top:"15%"}}>
			{

				endcalendaronoff && <Calendar todate={endcalendaronoff} todatesetter={setTodate}/>
			}
			</div>
            
	    </div>
		<div> <input type="submit" value="SUBMIT" onClick={submitfunc}/></div>
	   </div>
	   
	  
      </header>
    </div>
		</div>
		<div>
			


			
			<p>Total : {totalpc}</p>
			

			
		</div>
		<div>
		{
				
				// Object.keys(allcustomers).map((c,index)=>{ return( <div> {allcustomers[c].firstName}</div>) }) 
				
				 Object.keys(pcsearch.photocopysearches).map((p,index)=>{
					 return(
					 <div key={index} style={{border:"1px solid grey",width:"400px",margin:"10px",borderRadius:"4px",padding:"2px"}}> 
					
					 <p>Amount:{pcsearch.photocopysearches[p].amount}</p>
					 <p>Operator:{pcsearch.photocopysearches[p].operator}</p>
					 


					 </div>
					 
					 ) }
					 ) 

			}


		</div>
		
		</>
	);
}

export default SearchPhotocopy;


