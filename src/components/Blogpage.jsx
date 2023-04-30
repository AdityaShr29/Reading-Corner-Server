import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import("../../public/styles-blog.css");
import ReactHTMLParser from "react-html-parser";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";

function Blogpage(){

    const [blogDetails, setBlogDetails] = useState({});

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const blogId = window.location.pathname;

    useEffect(() => {
        fetch("https://reading-corner-server-2.onrender.com"+blogId)
    }, []);

    const loadData = async () => {

        try {
            const res = await fetch('https://reading-corner-server-2.onrender.com'+blogId);
            const data = await res.json();
    
            setBlogDetails(data);
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        loadData();
        fetch('https://reading-corner-server-2.onrender.com'+blogId)
    }, []);

    return (

        <div>

            <Navbar />
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
                    </div>

                    :

            <div>


                <div className="blogPage-container">

                    <h1 className="blogPage-name-heading">{blogDetails.name}</h1>
                    <p className="blogPage-date"><i><u>Posted On: {blogDetails.postingDate}</u></i></p>

                    <img src={blogDetails.imgURL} className="blogPage-image" alt="Blog visualas here" />

                    <hr />

                    <div className="rich-text-editor-container">
                            {ReactHTMLParser(blogDetails.richText)}
                    </div>
                </div>

                <Footer />
            </div>

            }

        </div>

    );
}

export default Blogpage;