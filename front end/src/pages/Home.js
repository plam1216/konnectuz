import React from "react";



function Home () {
    return (
        <div className="homePage">
         <img src="https://i.imgur.com/QCHhrSB.png" alt="login" className="logo home" />
         <button type="submit" value="Log In"><a href="./login">Log In</a>
         </button>
         <button type="submit" value="Sign Up"><a href="./signup">Sign Up</a>
         </button>
         </div>
    )
    }
    

export default Home;