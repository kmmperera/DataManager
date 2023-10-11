const initState = {
    error:null,
    newmoneytransfer:{},
    
    }
    
     const moneytransfer=(state = initState, action) => {
        switch (action.type) {
        case "newmoneytransfersuccess":
                state = {
                    ...state,
                    newmoneytransfer:action.payload.savedmoneytransfer,
                  
                }
                break;
    
        case "newmoneytransferfail":
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
    export default moneytransfer;
    