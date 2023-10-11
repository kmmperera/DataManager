import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './menu.css';
import MenuTab from './menutab';
import Calendar from './calendar';

const MainMenu=(props)=>{
	
	
	//const dispatch = useDispatch();

		const[menutab,setMenutab]=useState("Calendar");

		const selectedstylesmenu={color:"#009DDC"};
	useEffect(() => {
	console.log("this is from menu");
  		}, []);
	
	
	return (
	<>
		<div className="homediv">
		<div className="menudiv">
		<ul className="menuul">
				<li ><a style={menutab =="Calendar" ? selectedstylesmenu:null  } onClick={()=>{setMenutab("Calendar");} } href="#">Calendar</a></li>
				<li><a style={menutab =="Events" ? selectedstylesmenu:null  } onClick={()=>{setMenutab("Events");} } href="#">Events</a></li>

				<li ><a  href="#"> Customers</a>
				<ul className="submenuul">
				
				<li ><a style={menutab =="Customers" ? selectedstylesmenu:null  }   onClick={()=>{setMenutab("Customers");} }href="#">Add Customers</a></li>
				
				<li ><a style={menutab =="Customerprofile" ? selectedstylesmenu:null  }   onClick={()=>{setMenutab("Customerprofile");} }href="#"> Profiles</a></li>

				</ul>
				</li>
				<li ><a  href="#"> Photocopy</a>
				<ul className="submenuul">
				<li><a style={menutab =="Photocopy" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("Photocopy");} } href="#">Add PhotoCopy</a></li>
				<li><a style={menutab =="SearchPhotocopy" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("SearchPhotocopy");}} href="#">Search PhotoCopy</a></li>
				</ul>
				</li>
				<li><a style={menutab =="Debts" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("Debts");} } href="#">Debts</a></li>
				<li><a  href="#">ToDos</a></li>
				<li><a href="#">Deliveries</a>
				<ul className="submenuul">
				<li><a style={menutab =="Newdeliveries" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("Newdeliveries");} } href="#">Add Deliveries</a></li>
				<li><a style={menutab =="Ongoingdeliveries" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("Ongoingdeliveries");} }href="#">Ongoing  Deliveries</a></li>
				<li><a style={menutab =="Completeddelivery" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("Completeddelivery");} }href="#">Completed  Deliveries</a></li>

				</ul>
				</li>
				<li><a style={menutab =="Moneytransfer" ? selectedstylesmenu:null  }  onClick={()=>{setMenutab("Moneytransfer");} }href="#">Money Transfer</a></li>
				
				


		</ul>

		
		</div>
		<div className="contentdiv"><MenuTab ongoingprop="yes" component={menutab}/></div>
		</div>
	
		
	</>
	
	);
}

export default MainMenu;
