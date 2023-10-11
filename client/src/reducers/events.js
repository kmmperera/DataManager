const initState = {
    error:null,
    photocopys:{},
    moneytransfers:{},
    deliveries:{},
    debts:{},
    }
    
     const events=(state = initState, action) => {
        switch (action.type) {
        case "geteventssuccess":
                state = {
                    ...state,
                    photocopys: action.payload.allevents.resultpc,
                    moneytransfers:action.payload.allevents.resultmt,
                    deliveries:action.payload.allevents.resultdly,
                    debts:action.payload.allevents.resultds,

                }
                break;
    
        case "geteventsfail":
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
    export default events;
    