import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Calendar from './calendar';
import Customers from './customers';
import Debts from './debts';
import Search from './search';
import Photocopy from './photocopy';
import SearchPhotocopy from './searchphotocopy';
import Moneytransfer from './moneytransfer';
import Newdeliveries from './newdeliveries';
import Ongoingdeliveries from './ongoingdeliveries';
import Completeddelivery from './completeddeliveries';
import Tester from './customersearchtester';
import Events from './searchevents';
import Customerprofile from './customerprofile';
const MenuTab = ({component: Component, ...rest}) => {
   
		switch (Component) {
  case "Calendar":
    return <Calendar {...rest} />;
    break;
	
 case "Customers":
    return <Customers {...rest} />;
    break;
	
	case "Debts":
    return <Debts {...rest} />;
    break;

  case "Search":
    return <Search {...rest} />;
    break;

    case "Photocopy":
    return <Photocopy {...rest} />;
    break;  

    case "SearchPhotocopy":
    return <SearchPhotocopy {...rest} />;
    break;  

    case "Moneytransfer":
    return <Moneytransfer {...rest} />;
    break;  

    case "Newdeliveries":
    return <Newdeliveries {...rest} />;
    break;  

    case "Ongoingdeliveries":
    return <Ongoingdeliveries {...rest} />;
    break;  

    case "Completeddelivery":
    return <Completeddelivery {...rest} />;
    break;  

    case "Tester":
    return <Tester {...rest} />;
    break;  

    case "Events":
    return <Events {...rest} />;
    break;  

    case "Customerprofile":
    return <Customerprofile {...rest} />;
    break; 
 
  default:
     return <Calendar {...rest} />;
}
       
          
        
   
}

export default MenuTab;


