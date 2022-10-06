import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className="navbar" style={{padding: 0}}>
            <div className="container-fluid" style={{ display: "flex" }}>
                <Link to="/feed" className="nav-link navbar-brand">
                    <img src="https://i.imgur.com/QCHhrSB.png" alt="KonnectuZ logo" className="logo" />
                </Link>
                <ul className="ms-auto text-link">
                    <li>
                        {/* needs to link to /user/:id */}
                        <Link to="/user/" className="nav-link navbar-brand">
                            <div>My Posts</div>
                        </Link>
                    </li>
                    <li>

                        <Link to="/about" className="about nav-link navbar-brand">
                            <div>About uZ</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="settings nav-link navbar-brand">
                            <div>Settings</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Header;