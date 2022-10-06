import { Link } from "react-router-dom";
function Header() {
    let current = JSON.parse(localStorage.getItem("currentUser"));

    if (current) {
        let URL = `http://localhost:4000/sessions/${current._id}`;
        async function handleLogout () {
            await fetch(URL, {
                method: "DELETE"
            });
            localStorage.clear();
        }
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
            <Link to="/settings" className="settings nav-link">
                <div>Settings</div>
            </Link>
            <Link to="/" onClick={handleLogout}>
                <div>Log Out</div>
            </Link>
        </nav>
        )
    } else {
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
}
    


export default Header;