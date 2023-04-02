import { React, ReactDOM } from "react";
import "./menu.css"
function Menu ({ links}) {
    return (
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} onClick={link.onClick}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

    )
}

export default Menu
