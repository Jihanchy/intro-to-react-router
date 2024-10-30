import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {

    return (
        <div>
            <nav className="flex gap-5 ">
                <NavLink className="hover:text-purple-500" to='/'>Home</NavLink>
                <NavLink className="hover:text-purple-500" to="/users">Users</NavLink>
                <NavLink className="hover:text-purple-500" to="/about">About</NavLink>
                <NavLink className="hover:text-purple-500" to="/posts">Posts</NavLink>
                <NavLink className="hover:text-purple-500" to="/contact">Contact us</NavLink>               
            </nav>
        </div>
    );
};

export default Header;