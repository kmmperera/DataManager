const initState = {
    error:null,
    newdelivery:{},
    ongoingdelivery:{},
    updatedongoingdelivery:{},
    completeddeliveries:{},
    }
    
     const delivery=(state = initState, action) => {
        switch (action.type) {
        case "newdeliverysuccess":
                state = {
                    ...state,
                    newdelivery:action.payload.saveddelivery,
                  
                }
                break;
    
        case "newdeliveryfail":
                state = {
                    ...state,
                    error:action.payload.error
            
                   
                }
                
                break;


         case "ongoingdeliverysuccess":
                state = {
                    ...state,
                    ongoingdelivery:action.payload.savedongoingdelivery,
                  
                }
                break;
    
        case "ongoingdeliveryfail":
                state = {
                    ...state,
                    error:action.payload.error
            
                   
                }
                
                break;

        case "updateongoingdeliverysuccess":
                state = {
                    ...state,
                    updatedongoingdelivery:action.payload.updatedongoingdelivery,
                    ongoingdelivery:{...state.ongoingdelivery,...action.payload.updatedongoingdelivery},
                }
                break;
    
        case "updateongoingdeliveryfail":
                state = {
                    ...state,
                    error:action.payload.error
            
                   
                }
                
                break;
         case "completeddeliverysuccess":
                state = {
                    ...state,
                    completeddeliveries:action.payload.completeddeliveries,
                  
                }
                break;
    
        case "completeddeliveryfail":
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
    export default delivery;
    