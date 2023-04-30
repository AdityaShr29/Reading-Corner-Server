import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import ReactHTMLParser from "react-html-parser";
import Loader from "./Loader.jsx";
import('../../public/styles-blog.css');

function Blog(){

    useEffect(() => {
        fetch("https://reading-corner-server-2.onrender.com/blog")
    }, []);

    const [imgIds, setImgIds] = useState();
    const [blogDetails, setBookDetails] = useState([]);
    const [displayBook, setDisplayBook] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    
    const navigate = useNavigate();

    const loadImages = async () => {
        try {
          const res = await fetch('https://reading-corner-server-2.onrender.com/blog');
          const data = await res.json();
          setImgIds(data.img);
        } catch (error) {
          setError(true);
        }
      }

      const loadData = async () => {
        
        try {
          const res = await fetch('https://reading-corner-server-2.onrender.com/blog');
          const data = await res.json();
          
          setBookDetails(data.details);
        } catch (error) {
          setError(true);
        }
      }

      useEffect(() => {
        loadImages();
        loadData();
        fetch('https://reading-corner-server-2.onrender.com/blog')
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
        e.currentTarget.classList.add("active-blog");
      }

    return (

        <header>
            <Navbar />

            <div className="book-search-input-container">
              <input className="book-search-input blog-search-input" type="search" onChange={handleSearchInputChange} onClick={handleSearchInputClick} placeholder="Search blogs_" />
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
                            <Link className="open-blog-button" to={det._id}>Read More</Link>
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
                              <Link className="open-first-blog-button" to={det._id}>Read More</Link>
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

export default Blog;