import { Link } from "react-router-dom";
function Header() {
    return (
        <nav>
            <Link to="/feed">
                <img src="https://i.imgur.com/QCHhrSB.png" alt="KonnectuZ logo"  className="logo"/>
            </Link>
            <Link to="/about" className="about">
                <div>About uZ</div>
            </Link>
             <span>
            <Link to="/settings" className="settings">
                <div>Settings</div>
            </Link>
            </span>
        </nav>
    )
}
    


export default Header;