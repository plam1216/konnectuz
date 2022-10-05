import { Link } from "react-router-dom";
function Header() {
    return (
        <nav>
            <Link to="/feed" className="nav-link">
                <img src="https://i.imgur.com/QCHhrSB.png" alt="KonnectuZ logo"  className="logo"/>
            </Link>
            <Link to="/user/" className="nav-link">
                <div>Your Page</div>
            </Link>
            <Link to="/about" className="about nav-link">
                <div>About uZ</div>
            </Link>
             <span>
            <Link to="/settings" className="settings nav-link">
                <div>Settings</div>
            </Link>
            </span>
        </nav>
    )
}
    


export default Header;