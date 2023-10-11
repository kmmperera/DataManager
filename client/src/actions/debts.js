import axios from './api';
//import axios from 'axios';



const newdebt=(details)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/newdebt",{details});
		if (res.status === 200) {
			let{saveddebt}= res.data;
        dispatch({ type: "newdebtsuccess",payload:{saveddebt}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "newdebtfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "newdebtfail",
        payload: { error },
      });
		 }
	}
	
	
}

export {newdebt};