import axios from './api';
//import axios from 'axios';



const newdelivery=(delivery)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/newdelivery",{delivery});
		if (res.status === 200) {
			let{saveddelivery}= res.data;
        dispatch({ type: "newdeliverysuccess",payload:{saveddelivery}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "newdeliveryfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "newdeliveryfail",
        payload: { error },
      });
		 }
	}
	
	
}

const getongoingdelivery=()=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.get("/getongoingdelivery");
		if (res.status === 200) {
			let{savedongoingdelivery}= res.data;
        dispatch({ type: "ongoingdeliverysuccess",payload:{savedongoingdelivery}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "ongoingdeliveryfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "ongoingdeliveryfail",
        payload: { error },
      });
		 }
	}
	
	
}
const getcompleteddeliveries=()=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.get("/getcompleteddeliveries");
		if (res.status === 200) {
			let{completeddeliveries}= res.data;
        dispatch({ type: "completeddeliverysuccess",payload:{completeddeliveries}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "completeddeliveryfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "completeddeliveryfail",
        payload: { error },
      });
		 }
	}
	
	
}
const updategetongoingdelivery=(details)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/updategetongoingdelivery",{details});
		if (res.status === 200) {
			let{updatedongoingdelivery}= res.data;
        dispatch({ type: "updateongoingdeliverysuccess",payload:{updatedongoingdelivery}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "updateongoingdeliveryfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "updateongoingdeliveryfail",
        payload: { error },
      });
		 }
	}
	
	
}
export {newdelivery,getongoingdelivery,updategetongoingdelivery,getcompleteddeliveries};
