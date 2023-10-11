const initState = {
    error:null,
    newdebt:{},
   
    }
    
     const debts=(state = initState, action) => {
        switch (action.type) {
        case "newdebtsuccess":
                state = {
                    ...state,
                    newdebt: action.payload.saveddebt,
                   

                }
                break;
    
        case "newdebtfail":
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
    export default debts;
    