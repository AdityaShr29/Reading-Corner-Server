import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactHTMLParser from "react-html-parser";
import Loader from "./Loader.jsx";
import('../../public/styles-blog.css');

function AdminBlog(){

    useEffect(() => {
        fetch("https://reading-corner-server-2.onrender.com/blog")
    }, []);

    const [imgIds, setImgIds] = useState();
    const [blogDetails, setBookDetails] = useState([]);
    const [displayBook, setDisplayBook] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    
    const navigate = useNavigate();

    function handleClick(){
        navigate("/arpit93/add-blog");
    }

    const loadImages = async () => {
        try {
          const res = await fetch('https://reading-corner-server-2.onrender.com/blog');
          setImgIds(data.img);
        } catch (error) {
        }
      }

      const loadData = async () => {
        
        try {
          const res = await fetch('https://reading-corner-server-2.onrender.com/blog');
          const data = await res.json();
          
          setBookDetails(data.details);
        } catch (error) {
        }
      }

      useEffect(() => {
        loadImages();
        loadData();
        fetch('https://reading-corner-server-2.onrender.com/blog')
        axios.get('https://reading-corner-server-2.onrender.com/blog')
        .then(res => {
          setDisplayBook(res)
          setLoading(false)
        })
        .catch((err) =>{
          setError(true);
        })
      }, []);

      function handleBlogClick(id){
        navigate(id);
      }

      const [querry, setQuerry] = useState("");

      function handleSearchInputChange(e){
        setQuerry(e.target.value);
      }

      function handleSearchInputClick(e){
        e.currentTarget.classList.add("active");
      }

    return (

        <header>
            <AdminNavbar />

            <div className="functioning-elements">
              <div className="book-search-input-container blog-search-input-container">
                {/* <img src={searchIcon} className="search-icon blog-search-icon" alt="Testing image" /> */}
                <input className="book-search-input admin-blog-search-input" type="search" onChange={handleSearchInputChange} onFocusCapture={handleSearchInputClick} placeholder="Search blogs _" />
              </div>

              <button className="add-blogs-btn" onClick={handleClick} >Add Blog</button>
            </div>

            {
              error ? 
                <div className="error">
                  <h3>Something Went Wrong</h3>
                  <p>Try refreshing the page...</p>
                </div>
                :

              loading ? 

              <div className="loader">
                <Loader />
                <h5>Fetching Blogs...</h5>
              </div>

              :

            <div className="blog-container">

              <h1 className="arpit-blogs-heading">Arpit's Blogs</h1>
              


              <div className="blogs-grid-container">
              {
                blogDetails.filter(blog => {
                  if(querry === ""){
                    return blog;
                  }else if(blog.name.toLowerCase().includes(querry.toLowerCase())){
                    return blog;
                  }
                }).slice(0).reverse().map((det, index) => (
                  index ?

                    <div className="all-other-blogs-container">
                      <div className="blog-cards" key={index} onClick={() => handleBlogClick(det._id)}>
                          <img className="blog-img" src={det.imgURL}/>
                          <article className="blog-content">
                            <div>{det.name}</div>
                            <p className="blog-card-summary">{ReactHTMLParser(det.richText.substring(0, 220)+"...")}</p>
                            <p className="blog-date"><i>Posted On: {det.postingDate}</i></p>
                            {/* <button className="open-blog-button" onClick={() => handleBlogClick(det._id)}>Read More</button> */}
                            <Link className="open-blog-button" to={det._id}>Read More</Link>
                            {/* <p>{det.richText}</p> */}
                          </article>
                      </div>
                    </div>
                    :

                    <div className="first-blog-container" onClick={() => handleBlogClick(det._id)}>
                      <div className="first-blog-sub-container" key={index}>
                          <img className="first-blog-img" src={det.imgURL} width="170vw"/>
                          <article className="first-blog-content">
                              <div>{det.name}</div>
                              <p className="blog-card-summary">{ReactHTMLParser(det.richText.substring(0, 370)+"...")}</p>
                              <p className="blog-date"><i>Posted On: {det.postingDate}</i></p>
                              {/* <button className="open-first-blog-button" onClick={() => handleBlogClick(det._id)}>Read More</button> */}
                              <Link className="open-first-blog-button" to={det._id}>Read More</Link>
                              {/* <p>{det.richText}</p> */}
                          </article>
                      </div>
                    </div>
                    
                ))
              }
              </div>
        </div>
            }

        </header>

    );
}

export default AdminBlog;