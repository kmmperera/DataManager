const initState = {
    error:null,
    photocopys:{},
    
    }
    
     const photocopy=(state = initState, action) => {
        switch (action.type) {
        case "newphotocopysuccess":
                state = {
                    ...state,
                    photocopys:{...state.photocopys,...action.payload.savedphotocopy},
                  
                }
                break;
    
        case "newphotocopyfail":
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
    export default photocopy;
    