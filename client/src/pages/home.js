
import Navigation from '../ui/navigation';
import Footer from '../ui/footer';
import {  useSelector } from "react-redux";
import MainMenu from './menu';
import './newhome.css';

const Home=(props)=>{
	
	const auth = useSelector((state) => state.auth);

	return (
		<>
		<Navigation>
		
		{auth.loggedin? <MainMenu/>  : <h1 style={{color:"#009DDC",margin:"50px"}}>Please Log in..</h1>}
		</Navigation>
		
		<Footer></Footer>
		</>
	);
}

export default Home;
