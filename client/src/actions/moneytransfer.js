import axios from './api';
//import axios from 'axios';



const newmoneytransfer=(details)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/newmoneytransfer",{details});
		if (res.status === 200) {
			let{savedmoneytransfer}= res.data;
        dispatch({ type: "newmoneytransfersuccess",payload:{savedmoneytransfer}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "newmoneytransferfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "newmoneytransferfail",
        payload: { error },
      });
		 }
	}
	
	
}


export {newmoneytransfer};
