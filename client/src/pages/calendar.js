import React , { useState,useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './calendar.css';

const Calendar = (props) => {
    const[date,setDates]=useState(new Date());
    const[selectedday,setSelectedday]=useState("");

		let days = [];

	//const date = new Date();
	const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const minusmonth=()=>{

    setDates((date)=>( new Date( date.getFullYear(),date.getMonth()-1 ,date.getDate() ) ) );
  }
  const plusmonth=()=>{

    setDates((date)=>( new Date( date.getFullYear(),date.getMonth()+1 ,date.getDate() ) ) );

  }
  const plusyear=()=>{

    setDates((date)=>( new Date( date.getFullYear()+1,date.getMonth() ,date.getDate() ) ) );
  }
  const minusyear=()=>{
    setDates((date)=>( new Date( date.getFullYear()-1,date.getMonth() ,date.getDate() ) ) );
  }
  const onclickdate =(d)=>{
   // setSelectedday(d);
  // props.dateonoff && props.datesetter && props.datesetter(`${date.getFullYear()}-${date.getMonth()+1}-${d}` ) ;
  props.dateonoff && props.datesetter && props.datesetter(new Date() ) ;

   props.fromdate && props.fromdatesetter && props.fromdatesetter(`${date.getFullYear()}-${date.getMonth()+1}-${d}` ) ;
   props.todate && props.todatesetter && props.todatesetter(`${date.getFullYear()}-${date.getMonth()+1}-${d}` ) ;

  }
const renderCalendar = () => {
  date.setDate(1);
  days = [];
 // const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  



  

  for (let x = firstDayIndex; x > 0; x--) {
    let ff=prevLastDay - x + 1;
    days=[...days, <div className="prev-date" key={ff+100}  >{`${ff}`}</div>];
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()
    ) {
    days =[...days,  <div className="today" key={i+2000} onClick={()=>{onclickdate(i)}}>{`${i}`}</div>];
    } else {
    days =[...days, <div key={i+2000} onClick={()=>{onclickdate(i)}}>{`${i}`}</div>];
    }
  }

  for (let j = 1; j <= nextDays; j++) {
  days = [...days, <div className="next-date"  key={j+10000} >{`${j}`}</div>];
   // monthDays.innerHTML = days;
  }
};

renderCalendar();
 console.log(date.getMonth());
  console.log(date.getFullYear());
  console.log(selectedday);
useEffect(()=>{

  console.log(selectedday);
},[selectedday]);


 useEffect(() => {
	 //  document.querySelector(".days").innerHTML = days;

	 document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = date.getFullYear();
  
}, [date]);  

	


    return (
	<>
	
	<div className="calcontainer">
	 <div className="container">
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev" onClick={minusmonth}></i>
          <div className="date">
            <h1></h1>
			<div className="year">
			<i className="fas fa-angle-left yprev" onClick={minusyear}></i>

            <p></p>
			
			<i className="fas fa-angle-right ynext" onClick={plusyear}></i>
			</div>
          </div>
          <i className="fas fa-angle-right next" onClick={plusmonth}></i>
        </div>
		
		
		  
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">{days.map((d)=>{return d})}</div>
      </div>
    </div>
	</div>
	</>
	
	);
}

export default Calendar;


