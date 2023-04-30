import React from "react";

function Navbar(){

    return (
        <header className="header">
            <div className="navbar">
            
              <div className="navbar-logo">
                <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png" alt="Book logo" width="120px"/>
              </div>
              <div className="navbar-content">
                <h1>Reading Corner</h1>
                <p>“The books that the world calls immoral are books that show the world its own shame”</p>
              </div>

            </div>

            <div className="allnav-links">
                <div className=""> 
                {/* <Link to="http://localhost:3000/all-books" className="all-books-link" target="_blank">All Books</Link> */}
                All Books
                </div>
                <div className="">Categories</div>
                <div className="">Currently Reading</div>
                <div className="">Blog</div>
            </div>
        </header>
    );
}

export default Navbar;