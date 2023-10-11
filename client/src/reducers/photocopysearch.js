const initState = {
    error:null,
    photocopysearches:{},
    
    }
    
     const photocopysearch=(state = initState, action) => {
        switch (action.type) {
        case "searchphotocopysuccess":
                state = {
                    ...state,
                    photocopysearches:action.payload.searchedphotocopy,
                  
                }
                break;
    
        case "searchphotocopyfail":
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
    export default photocopysearch;
    