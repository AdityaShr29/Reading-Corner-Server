import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import("../../public/styles.css");

import logo from "../../public/images/navbar-logo.png";

function Home(){
  
  const [welcome, setWelcome] = useState();  
  
      const navigate = useNavigate();

      function handleClick(){
        navigate("/arpit93/add");
      }

      const [redirect, setRedirect] = useState("");

      function handleBookLinkClick(){
        setWelcome(true);
        setRedirect("/books")
      }
      
      function handleBlogLinkClick(){
        setWelcome(true);
        setRedirect("/blog");
      }

    return <div>

    {
      welcome ? 
          <div className="welcome-page-container">
            <div className="welcome-text">WELCOME TO ARPIT'S COLLECTION OF &nbsp; <span className="text-animation-span"> </span></div>
            <br />
            <button className="welcome-button" onClick={() => {
              navigate(redirect);
            }}>EXPLORE &nbsp;&rarr;
            </button>
          </div>
          :
          <header className="header">

                <div className="landing-page-container">
                    <div className="logo-container">
                      <div className="logo-content">
                        <img className="logo-img" src={logo} />
                        <h1 className="logo-title">Reading Corner</h1>
                        <p className="logo-sub-title">ALL YOUR LEARNINGS AT ONE PLACE</p>
                          <div className="landingpage-btn-container">
                            <button className="landingpage-btn" onClick={handleBookLinkClick}>Books</button>
                            <button className="landingpage-btn" onClick={handleBlogLinkClick}>Blogs</button>
                          </div>
                      </div>
                    </div>

                    <div className="quote-container">
                      <div className="big-quote-text-container">
                        <div className="big-quote-text"><q>The most important investment you can make is in yourself</q></div>
                        <p><i>-Warren Buffet</i></p>
                      </div>
                    </div>
                </div>

          </header>
    }

       
        </div>

}

export default Home;