import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar.jsx";
import("../../public/styles-blog.css");
import ReactHTMLParser from "react-html-parser";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";

import warning from "../../public/images/warning.png";

function AdminBlogpage(){

    const navigate = useNavigate();

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

    const [showAlert, setShowAlert] = useState(false);

    function handleShowDeleteClick(){
        setShowAlert(true);
        document.body.style.overflow = "hidden";
    }

    function handleConfirmDeleteClick(){
        
        navigate(blogId+"/delete");
        
        
        setTimeout(() => {
            navigate("/arpit93/blog");
        }, 4000);

        document.body.style.overflowY = "scroll"
    }

    useEffect(() => {
        loadData();
        fetch('https://reading-corner-server-2.onrender.com'+blogId)
    }, []);

    return (

        <div>

        {
            showAlert && 
            <div className="confirm-delete-box blog-confirm-delete-box">
                <img style={{
                    position: "relative",
                    width: "60%",
                    left: "20%",
                    textAlign: "center"
                }} src={warning}
                />

                    <p>Are you sure you want to delete this blog?</p>
                    <p>This cannot be undone!</p>
                    <div className="confirm-btns">
                        <button className="no-btn" onClick={() => {
                            setShowAlert(false)
                            document.body.style.overflowY = "scroll"
                            }}>No</button>
                        <button className="delete-btn book-delete-btn" onClick={handleConfirmDeleteClick}>Yes</button>
                    </div>
            </div>
        }

                <AdminNavbar />
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
                    <button className="delete-btn blog-delete-btn" onClick={handleShowDeleteClick}>Delete Blog</button>
                </div>

            <Footer />
            </div>

            }

        </div>



    );
}

export default AdminBlogpage;