import axios from './api';
//import axios from 'axios';



const searchresults=(customer)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/searchcustomer",{customer});
		if (res.status === 200) {
			let{searches}= res.data;
        dispatch({ type: "searchsuccess",payload:{searches}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "searchfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "searchfail",
        payload: { error },
      });
		 }
	}
	
	
}


export {searchresults};
