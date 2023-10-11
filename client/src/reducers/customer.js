const initState = {
error:null,
customers:{},
customer:{
	firstName: '',
    lastName: '',
    teln: '',
	codicefiscale:''
        
	}
}

 const customer=(state = initState, action) => {
	switch (action.type) {
	case "newcustomersuccess":
            state = {
                ...state,
				customers:{...state.customers,...action.payload.customer},
              
            }
            break;

	case "newcustomerfail":
            state = {
                ...state,
				error:action.payload.error
		
               
            }
			
            break;
	case "getallcustomerssuccess":
            state = {
                ...state,
				customers:{...state.customers,...action.payload.allcustomers},
              
            }
            break;
			
	case "getallcustomersfail":
            state = {
                ...state,
				error:action.payload.error
		
               
            }
			
            break;
			
	case "submitdebtssuccess":
            state = {
                ...state,
				customers:{...state.customers,...action.payload.updatedcustomer},
              
            }
            break;
			
	case "submitdebtsfail":
            state = {
                ...state,
				error:action.payload.error
		
               
            }
			
            break;		
	case "deletecustomersuccess":
			//let newposts=state.posts.filter((p)=>(p._id != action.payload.details.postId));
			let deletedid=action.payload.deletedcustomer._id;
		  let newcustomers=state.customers;
		  delete newcustomers[deletedid] ;
		  
		 
		 

            state = {
               	...state,
				customers:newcustomers,
				
            }
            break;
	case "deletecustomerfail":
            state = {
                ...state,
				error:action.payload.error
		
               
            }
			
            break;			
			
default:
		state={...state,}
	
	

	}
return state;
}
export default customer;
