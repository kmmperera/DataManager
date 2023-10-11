
import React,{useEffect} from "react";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import PrivateRoute from "./pages/redirect";
import Userdetails from "./pages/userdetails";
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {isUserLoggedIn} from './actions/authactions';



function App() {
	
	const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

  useEffect(() => {
	

      dispatch(isUserLoggedIn());
    	// dispatch(getallusers());
  }, []);

useEffect(() => {
	if(auth.user.firstName !== ""){
   localStorage["user"]=JSON.stringify(auth.user);
    }
  }, [auth.user]);

  return (
  <div className="App">
           <Switch>
		   <Route exact path="/" component={Home} />
		   <PrivateRoute exact path="/signin" component={Signin} />
		   <PrivateRoute exact path="/signup" component={Signup} />
		   <Route exact path="/userdetails" component={Userdetails} />
		 



		   </Switch>
  </div>
  );
}

export default App;
