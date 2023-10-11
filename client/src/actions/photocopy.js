import axios from './api';
//import axios from 'axios';



const newphotocopy=(photocopy)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/addphotocopy",{photocopy});
		if (res.status === 200) {
			let{savedphotocopy}= res.data;
        dispatch({ type: "newphotocopysuccess",payload:{savedphotocopy}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "newphotocopyfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "newphotocopyfail",
        payload: { error },
      });
		 }
	}
	
	
}
const searchphotocopy=(details)=>{
	return async (dispatch) => {
		let res;
		 
		 try{
		res=await axios.post("/searchphotocopy",{details});
		if (res.status === 200) {
			let{searchedphotocopy}= res.data;
			
			dispatch({ type: "searchphotocopysuccess",payload:{searchedphotocopy}});
		}
		else{
			const {error}=res.data;
			 dispatch({ type: "searchphotocopyfail",payload:{error}});
		}
		 }
		 catch(error){
			 
		dispatch({
        type: "searchphotocopyfail",
        payload: { error },
      });
		 }
	}
	
	
}
export {newphotocopy,searchphotocopy};
