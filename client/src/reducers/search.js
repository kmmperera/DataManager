const initState = {
    error:null,
    searches:{},
    
    }
    
     const search=(state = initState, action) => {
        switch (action.type) {
        case "searchsuccess":
                state = {
                    ...state,
                    searches:action.payload.searches,
                  
                }
                break;
    
        case "searchfail":
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
    export default search;
    