import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div className="header">
             <Link to="/" className="routs">Hacker News</Link>
             <Link to="/login" className="routs">welcome</Link>
             <Link to="/login" className="routs">new</Link>
             <Link to="/login" className="routs">threads</Link>
             <Link to="/login" className="routs">past</Link>
             <Link to="/login" className="routs">comments</Link>
             <Link to="/login" className="routs">ask</Link>
             <Link to="/login" className="routs">show</Link>
             <Link to="/login" className="routs">jobs</Link>
             <Link to="/submit" className="routs">submit</Link>
             <Link to="/login" className="routs">login</Link>
        </div>
    )
}

export default Header;