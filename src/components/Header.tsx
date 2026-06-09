import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "react-feather";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header>
            <div id="header">
                <div className="logo">
                    <Link to="/">Sample Dev</Link>
                </div>
                <nav aria-label="Main navigation" className="Main Nav">
                    <ul>
                        <li>
                            <Link to="/publishing">Publishing</Link>
                        </li>
                        <li>
                            <Link to="/seo">SEO</Link>
                        </li>
                        <li>
                            <Link to="/php">PHP</Link>
                        </li>
                        <li>
                            <Link to="/react">React</Link>
                        </li>
                    </ul>
                </nav>
                <div className={`panel ${isOpen ? "active" : ""}`}>
                    <div className="navBtn" onClick={() => {setIsOpen(true)}}></div>
                    <div className="closeBtn" onClick={() => {setIsOpen(false)}}><X size={40}/></div>
                    <nav aria-label="Mobile navigation" className="Mobile Nav">
                        <ul>
                            <li>
                                <Link to="/publishing" onClick={() => {setIsOpen(false)}}>Publishing</Link>
                            </li>
                            <li>
                                <Link to="/seo" onClick={() => {setIsOpen(false)}}>SEO</Link>
                            </li>
                            <li>
                                <Link to="/php" onClick={() => {setIsOpen(false)}}>PHP</Link>
                            </li>
                            <li>
                                <Link to="/react" onClick={() => {setIsOpen(false)}}>React</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;