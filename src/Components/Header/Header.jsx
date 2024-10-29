import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex gap-5 ">
                <Link className="hover:text-purple-500" to='/'>Home</Link>
                <Link className="hover:text-purple-500" to='/users'>Users</Link>
                <Link className="hover:text-purple-500" to="/about">About</Link>
                <Link className="hover:text-purple-500" to="/contact">Contact us</Link>               
            </nav>
        </div>
    );
};

export default Header;