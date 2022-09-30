   import { Link } from "react-router-dom";
   function Nav() {
    return (
        <nav>
        <Link to ="/">
         <div>Home</div>
        </Link>
        <Link to="/settings">
        <div>Settings</div>
        </Link>
        <Link to="/about">
        <div>About uZ</div>
        </Link>
        </nav>
    )
 }
    


export default Nav;