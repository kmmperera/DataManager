import axios from './api';
//import axios from 'axios';



const newcustomer=(customer)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/addcustomer",{customer});
		if (res.status === 200) {
			let{customer}= res.data;
        dispatch({ type: "newcustomersuccess",payload:{customer}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "newcustomerfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "newcustomerfail",
        payload: { error },
      });
		 }
	}
	
	
}
const getallcustomers=()=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.get("/getallcustomers");
		if (res.status === 200) {
			let{allcustomers}= res.data;
        dispatch({ type: "getallcustomerssuccess",payload:{allcustomers}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "getallcustomersfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "getallcustomersfail",
        payload: { error },
      });
		 }
	}
	
	
}
const submitdebts=(debts)=>{
	
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/submitdebts",{debts});
		if (res.status === 200) {
			let{updatedcustomer}= res.data;
        dispatch({ type: "submitdebtssuccess",payload:{updatedcustomer}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "submitdebtsfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "submitdebtsfail",
        payload: { error },
      });
		 }
	}
	
}

const deletecustomer=(customer)=>{
	
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/deletecustomer",{customer});
		if (res.status === 200) {
			let{deletedcustomer}= res.data;
        dispatch({ type: "deletecustomersuccess",payload:{deletedcustomer}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "deletecustomerfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "deletecustomerfail",
        payload: { error },
      });
		 }
	}
	
}

export {newcustomer,getallcustomers,submitdebts,deletecustomer};
