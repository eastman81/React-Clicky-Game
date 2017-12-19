import React from "react";
import "./Nav.css";

const Nav = props => (
	<div className="title navbar">
		<ul className="nav">
            <li id="tl">
              Clicky Game
            </li>
            <li>
              Click an Image to Start!
            </li>
            <li id="tr">
              Score: 0
            </li>
        </ul>
    </div>
)

export default Nav;
