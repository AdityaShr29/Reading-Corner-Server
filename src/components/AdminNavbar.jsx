import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../public/images/navbar-logo.png";

function Navbar(){

  const navigate = useNavigate();

  function handleBooksLinkClick(){
    navigate("/arpit93/books");
  }

  function handleBlogLinkClick(){
    navigate("/arpit93/blog");
  }
  
  function handleLogoClick(){
    navigate("/");
  }

    return (
        <header className="header">
            <div className="navbar" onClick={handleLogoClick} style={{cursor: "pointer"}}>
            
              {/* <div className="navbar-logo"> */}
              <img className="navbar-logo" src={logo} alt="Book logo" />
              {/* </div> */}
              <div className="navbar-content">
                <h1>Reading Corner</h1>
                <p>ALL YOUR LEARNINGS AT ONE PLACE</p>
              </div>

            </div>

              <div className="links">
                <div className="all-books-link" onClick={handleBooksLinkClick}> 
                  <NavLink className="all-books-link">Books</NavLink>
                </div>
                <div className="blog-link" onClick={handleBlogLinkClick}>
                <NavLink className="blog-link">Blogs</NavLink>
                </div>
              </div>
        </header>
    );
}

export default Navbar;