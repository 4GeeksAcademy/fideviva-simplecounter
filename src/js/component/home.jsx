import React from "react";
import { FaClock } from "react-icons/fa";




//create your first component
const Home = (props) => {
	
	

	
	return (
		<div >
			
			
			<header><h1 className="text-center mt-5">The Seconds Counter</h1></header>
			<div className=" bg-dark text-white d-flex " style={{height: "200px"}}>
				<div className="container  col-1 bg-dark m-3 h-80">
					
				</div>
				<div className="container  text-center col-3 bg-secondary rounded m-1 h-80">
					<FaClock className="m-5" style={{fontSize:"100px"}}/>
				</div>
				<div className="container  col-1 bg-secondary rounded m-1 h-80">
					<p className= "text-center"style={{fontSize:"150px"}}>{Math.floor(props.time/100000)%10}</p>
				</div>
				<div className="container  col-1 bg-secondary rounded m-1 h-80">
					<p className= "text-center"style={{fontSize:"150px"}}>{Math.floor(props.time/10000)%10}</p>
				</div>
				<div className="container  col-1 bg-secondary rounded m-1 h-80">
					<p className= "text-center"style={{fontSize:"150px"}}>{Math.floor(props.time/1000)%10}</p>
				</div>
				<div className="container  col-1 bg-secondary rounded m-1 h-80">
					<p className= "text-center"style={{fontSize:"150px"}}>{Math.floor(props.time/100)%10}</p>
				</div>
				<div className="container  col-1 bg-secondary rounded m-1 h-80">
					<p className= "text-center"style={{fontSize:"150px"}}>{Math.floor(props.time/10)%10}</p>
				</div>
				<div className="container  col-1 bg-secondary rounded m-1 h-80">
					<p className= "text-center"style={{fontSize:"150px"}}>{Math.floor(props.time/1)%10}</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
