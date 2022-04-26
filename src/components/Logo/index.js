import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import "./index.css";
import logo from "../../../public/assets/svg/NoLogo.svg";


const Logo = ({isLogin, className, href, ...props}) => {
	return (
		isLogin? 
		<Link to='/all_posts' className={className? className: "logo"} {...props}>
			<img src={logo} alt="logo" className="logo__pic"/>
		</Link>
		: 
		<Link to='/' className={className? className: "logo"} {...props}>
			<img src={logo} alt="logo" className="logo__pic"/>
		</Link>
	);
};

export default Logo;