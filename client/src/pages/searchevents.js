import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCalendar } from "react-icons/fa";
import Calendar from './calendar';
import {getevents} from '../actions/events';
import '../css/tablestyle.css';
const Events = () => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const searchevents=useSelector((state)=>state.events);
	const pcsearch = useSelector((state) => state.photocopysearch);

    
    
    const[operator,setOperator]=useState(auth?auth.user._id:"");
	
	const[fromdate,setFromdate]=useState("");
	const[todate,setTodate]=useState("");
	const[startcalendaronoff,setStartdayCalendaronoff]=useState(false);
	const[endcalendaronoff,setEnddayCalendaronoff]=useState(false);
	const[pctotal,setPctotal]=useState(0);
	const[dlytotal,setDlytotal]=useState(0);
	const[mttotal,setMttotal]=useState(0);
	const[dbtotal,setDbtotal]=useState(0);
	const[totaltotal,setTotaltotal]=useState(0);

	const mystyle={marginTop:"20px",position:"relative"};
	

	

	const startdaycalendartoggle=()=>{

		if(startcalendaronoff || endcalendaronoff ){setStartdayCalendaronoff(false)}
		else{setStartdayCalendaronoff(true)}
	}
	const enddaycalendartoggle=()=>{

		if(endcalendaronoff || startcalendaronoff){setEnddayCalendaronoff(false)}
		else{setEnddayCalendaronoff(true)}
	}

	const calotal=(obj)=>{
	return	Object.keys(obj).map((o,index)=>{

			return Number(obj[o].amount || obj[o].price );
		}).reduce((total,num)=>{
			return total+num;
		},0);
	
	}
	const calpctotalpromiss=new Promise((resolve,reject)=>{
		resolve(calotal(searchevents.photocopys));
		reject(0);

	});
	const calmttotalpromiss=new Promise((resolve,reject)=>{
		resolve(calotal(searchevents.moneytransfers));
		reject(0);

	});
	const caldbtotalpromiss=new Promise((resolve,reject)=>{
		resolve(calotal(searchevents.debts));
		reject(0);

	});
	const caldlytotalpromiss=new Promise((resolve,reject)=>{
		resolve(calotal(searchevents.deliveries));
		reject(0);

	});

	// calpctotalpromiss.then((resolve)=>{ setPctotal(resolve)},(error)=>{setPctotal(0)});

	// calmttotalpromiss.then((resolve)=>{ setMttotal(resolve)},(error)=>{setMttotal(0)});
	// caldbtotalpromiss.then((resolve)=>{ setDbtotal(resolve)},(error)=>{setDbtotal(0)});
	// caldlytotalpromiss.then((resolve)=>{ setDlytotal(resolve)},(error)=>{setDlytotal(0)});

	Promise.all([calpctotalpromiss,calmttotalpromiss,caldbtotalpromiss,caldlytotalpromiss]).then((promiseresult)=>{
		const[resultcalpctotalpromiss,resultcalmttotalpromiss,resultcaldbtotalpromiss,resultcaldlytotalpromiss]=promiseresult;
		setPctotal(resultcalpctotalpromiss);
		setMttotal(resultcalmttotalpromiss);
		setDbtotal(resultcaldbtotalpromiss);
		setDlytotal(resultcaldlytotalpromiss);
		setTotaltotal(resultcalpctotalpromiss+resultcalmttotalpromiss+resultcaldbtotalpromiss+resultcaldlytotalpromiss);
	}).catch((error)=>{
		setPctotal(0);
		setMttotal(0);
		setDbtotal(0);
		setDlytotal(0);
		setTotaltotal(0);
		console.log(error);

	});
	const submitfunc=(e)=>{
		e.preventDefault();
		const details={todate,operator,fromdate};
		dispatch(getevents(details));
	
		
		
	}
	
	
	
	return(
		<>
		<div style={{display:"flex"}}>
		<div  style={{flex:"4"}} className="photocopycontainer" >
		<div className="App" style={{width:"30%"}}>
      <div className="App-header" style={{position:"relative",left:"20px"}}>
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
	   
	  
      </div>
    </div>
		</div>
	<div style={{flex:"2",marginTop:"20px"}} >
		<p>Photo Copy: {pctotal}</p>
		<p>Deliveries: {dlytotal}</p>
		<p>Debts: {dbtotal}</p>
		<p>Money Transfers: {mttotal}</p>
		<p style={{marginTop:"20px",fontSize:"20px"}}>Total: {totaltotal}</p>

	</div>
		</div>	

			<div style={{padding:"20px",margin:"35px"}}>
			<p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"15%"}}>Photo Copy</p>
				<table style={{width:"100%"}}>
					<thead>
				<tr>
   					 <th>Date</th>
   					 <th>Amount</th>
   					 <th>operator</th>
  				</tr>
				  </thead>
				  <tbody>
				  {
					  	 searchevents.photocopys && Object.keys(searchevents.photocopys).map((p,index)=>{
							//pctotal += Number(searchevents.photocopys[p].amount);
						//	console.log(pctotal);
							   return(
								<tr key={index+100000}>
									<td> {searchevents.photocopys[p].date.split("T")[0]}</td>
									<td> {searchevents.photocopys[p].amount}</td>
									<td> {searchevents.photocopys[p].operator.firstName}</td>
								</tr>	

							   )
						   })

				  }
				  </tbody>
				</table>
			</div>	



				<div style={{padding:"20px",margin:"35px"}}>
			<p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"15%"}}>Deliverires</p>
				<table style={{width:"100%"}}>
					<thead>
				<tr>
   					 <th>Date</th>
   					 <th>Price</th>
					<th>Customer</th>	
   					 <th>Operator</th>
  				</tr>
				  </thead>
				  <tbody>
				  {
					  	 searchevents.deliveries && Object.keys(searchevents.deliveries).map((d,index)=>{
							   return(
								<tr key={index+10000000}>
									<td> {searchevents.deliveries[d].updatedAt.split("T")[0]}</td>
									<td> {searchevents.deliveries[d].price}</td>
									<td> {searchevents.deliveries[d].customer.firstName}</td>

									<td> {searchevents.deliveries[d].operator.firstName}</td>
								</tr>	

							   )
						   })

				  }
				  </tbody>
				</table>
			</div>	


				<div style={{padding:"20px",margin:"35px"}}>
			<p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"25%"}}>Money Transfers</p>
				<table style={{width:"100%"}}>
					<thead>
				<tr>
   					 <th>Date</th>
   					 <th>Amount</th>
					<th>Customer</th>	
   					 <th>Operator</th>
  				</tr>
				  </thead>
				  <tbody>
				  {
					  	 searchevents.moneytransfers && Object.keys(searchevents.moneytransfers).map((m,index)=>{
							   return(
								<tr key={index+1000000000}>
									<td> {searchevents.moneytransfers[m].date.split("T")[0]}</td>
									<td> {searchevents.moneytransfers[m].amount}</td>
									<td> {searchevents.moneytransfers[m].customer.firstName}</td>

									<td> {searchevents.moneytransfers[m].operator.firstName}</td>
								</tr>	

							   )
						   })

				  }
				  </tbody>
				</table>
			</div>	
		

			<div style={{padding:"20px",margin:"35px"}}>
			<p style={{marginBottom:"10px",padding:"10px",backgroundColor:"#009DDC",width:"25%"}}>Debts</p>
				<table style={{width:"100%"}}>
					<thead>
				<tr>
   					 <th>Date</th>
   					 <th>Amount</th>
					<th>Customer</th>	
   					 <th>Operator</th>
  				</tr>
				  </thead>
				  <tbody>
				  {
					  	 searchevents.debts && Object.keys(searchevents.debts).map((db,index)=>{
							   return(
								<tr key={index+100000000000}>
									<td> {searchevents.debts[db].date.split("T")[0]}</td>
									<td> {searchevents.debts[db].amount}</td>
									<td> {searchevents.debts[db].customer.firstName}</td>

									<td> {searchevents.debts[db].operator.firstName}</td>
								</tr>	

							   )
						   })

				  }
				  </tbody>
				</table>
			</div>	
		
		
		</>
	);
}

export default Events;


