import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Portfolio</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/About"> About Me</Link>
                <Link to="/contacts">My Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;