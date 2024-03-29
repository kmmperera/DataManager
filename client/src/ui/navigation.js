import './navigation.css';
import React from "react";
import { Link,useHistory   } from 'react-router-dom';
import {signout} from '../actions/authactions';
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt,FaHome } from "react-icons/fa";

const Navigation=(props)=>{

const dispatch = useDispatch();
const auth = useSelector((state) => state.auth);
const {user :userred}=auth;
let history = useHistory();


const logout=(props)=>{
	
	dispatch(signout());
	
   history.push('/signin');
	
}

	return (
	<div className="mainbodywrapper">
		<div className="homewrapper"> 
			<div className="nav">

				<div className="logowrapper" >
					<Link to={"/"} style={{paddingLeft:"20px"}}><p><FaHome/>Home</p></Link>
					{auth.loggedin?	<div className="leftlinkwrapper"><Link to={"/userdetails"} ><p> <FaUserAlt/>{userred.firstName} Profile</p></Link></div> :null }
				</div>
				<div className="linkwrapper">
			{!auth.loggedin?<><Link to={"/signin"}><div>Sign in</div></Link><Link to={"/signup"}><div>Sign up</div></Link></> :null
			}
			
			
			
			{auth.loggedin? <div onClick={logout} style={{cursor: "pointer",}}>Sign out</div> : null}
				</div>
				
			</div>
			{props.children}
			
		</div>
	</div>	
	);
}

export default Navigation;
