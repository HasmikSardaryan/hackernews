import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to='' > <img style={{border: 'solid white'}} src="https://news.ycombinator.com/y18.svg" alt="" /></Link>
             <Link to="/" className="router">Hacker News</Link>
             <Link to="/welcome" className="router">welcome</Link>|
             <Link to="/newest" className="router">new</Link>|
             <Link to="/thread" className="router">thread</Link>
             <Link to="/past" className="router">past</Link>|
             <Link to="/comments" className="router">comments</Link>|
             <Link to="/ask" className="router">ask</Link>|
             <Link to="/show" className="router">show</Link>|
             <Link to="/jobs" className="router">jobs</Link>|
             <Link to="/submit" className="router">submit</Link>
             <span className="login">
                <Link to="/login" className="router">login</Link>
             </span>
        </div>
    )
}

export default Header;