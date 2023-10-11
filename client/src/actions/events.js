import axios from './api';
//import axios from 'axios';



const getevents=(details)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/getevents",{details});
		if (res.status === 200) {
			let{allevents}= res.data;
        dispatch({ type: "geteventssuccess",payload:{allevents}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "geteventsfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "geteventsfail",
        payload: { error },
      });
		 }
	}
	
	
}

export {getevents};
