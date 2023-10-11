import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getongoingdelivery,updategetongoingdelivery} from '../actions/delivery';

const Ongoingdeliverysub = (props) => {
   const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const delivery=useSelector((state)=>state.delivery);
	
	const mystyle={marginTop:"20px"};
	const {user :userred}=auth;
   const status="paid";
  const[selectedobj,setSelectedobj]=useState({id:"",received:false,delievered:false});
   
	
	// if(props.dobj && props.dobj.deliveredDate){

    //     setSelectedobj({...selectedobj,delievered:true,id:props.dobj._id})
    // }
    // if(rops.dobj && props.dobj.recievedDate){
    //     setSelectedobj({...selectedobj,received:true,id:props.dobj._id})
        
    // }
   
    // useEffect( ()=>{ 
    //     if(props.dobj && props.dobj.recievedDate){
    //     setSelectedobj({...selectedobj,received:true,id:props.dobj._id})
        
    // }
    // if(props.dobj && props.dobj.deliveredDate){

    //     setSelectedobj({...selectedobj,delievered:true,id:props.dobj._id})
    // }
    //     },[]);
    // useEffect(()=>{
       
    //     console.log(selectedobj);
    // },[selectedobj]);

    // useEffect(()=>{
    //     console.log(delivery.ongoingdelivery);

    // },[delivery.ongoingdelivery]);
    
    // const checkboxrecefunc=(e)=>{
    //     setSelectedobj({...selectedobj,received:e.target.checked,id:e.target.checked? e.target.id:"",delievered:false});

    // }

    // const checkboxdelefunc=(e)=>{
    //     setSelectedobj({...selectedobj,received:true,delievered:e.target.checked,id:e.target.checked? e.target.id:""});

        
    // }
 useEffect( ()=>{ 
        if(props.dobj ){
        setSelectedobj({...selectedobj,received:props.dobj.recievedDate?true:false,delievered:props.dobj.deliveredDate?true:false,id:props.dobj._id})
        
    }
   
        },[]);

    const checkboxrecefunc=(e)=>{
        setSelectedobj({...selectedobj,received:e.target.checked,id:e.target.id});

    }

    const checkboxdelefunc=(e)=>{
        setSelectedobj({...selectedobj,received:true,delievered:e.target.checked,id:e.target.id});

        
    }
	const updateDelivery=()=>{
        let date=new Date();
        let details={date,selectedobj};
        if(setSelectedobj.id != ""){ 
        dispatch(updategetongoingdelivery(details));
        }
       // console.log(selectedobj);
       // console.log(details);

    }
   
  
	//console.log(delivery.newdelivery.name);
	//	console.log(props.dobj && props.dobj.recievedDate);

	return(
		<>
		

            
              
               
                    <div style={{border:"1px solid grey"}}key={props.nk}>
                     <p> Name:  {props.dobj.name} </p>
                     <p> Customer:  {props.dobj.customer} </p>
                     <p> Operator:  {props.dobj.operator} </p>
                    
                     <label><input id={props.d} checked={selectedobj.received } onChange={checkboxrecefunc} type="checkbox" />Received </label>
                     <label><input  id={props.d} checked={selectedobj.delievered}  onChange={checkboxdelefunc} type="checkbox" />Delivered </label>
                     <input type="submit" value="Update" onClick={updateDelivery} />
                    </div>

              
           
      
		
		</>
	);
}

export default Ongoingdeliverysub;


