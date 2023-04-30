import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

import logo from "../../public/images/navbar-logo.png";

function AdminNavbar(){

  const navigate = useNavigate();

  function handleBooksLinkClick(){
    navigate("/books");
  }

  function handleBlogLinkClick(){
    navigate("/blog");
  }

  function handleLogoClick(){
    navigate("/");
  }

    return (
        <header className="header">
          <div className="navbar-container" onClick={handleLogoClick} style={{cursor: "pointer"}}>

              <div className="navbar">
                {/* <div className="navbar-logo-container"> */}
                  <img className="navbar-logo" src={logo} alt="Book logo" />
                {/* </div> */}
                <div className="navbar-content">
                  <h1 className="navbar-logo-title">Reading Corner</h1>
                  <p className="navbar-logo-sub-title">ALL YOUR LEARNINGS AT ONE PLACE</p>
                </div>
              </div>

          </div>
              <div className="links">
                <div className="all-books-link" onClick={handleBooksLinkClick}> 
                  <NavLink className="all-books-link">Books</NavLink>
                </div>
                <div className="blog-link" onClick={handleBlogLinkClick}>
                <NavLink className="blog-link">Blog</NavLink>
                </div>
              </div>
        </header>
    );
}

export default AdminNavbar;