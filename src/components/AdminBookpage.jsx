import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar.jsx";
import("../../public/styles-blog.css");
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";
import { useNavigate, Link } from "react-router-dom";

import warning from "../../public/images/warning.png";

function AdminBookpage(){

    const navigate = useNavigate();

    const [bookDetails, setBookDetails] = useState({});

    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);

    const bookId = window.location.pathname;

    useEffect(() => {
        fetch("https://reading-corner-server-2.onrender.com"+bookId)
    }, []);

    const loadData = async () => {

        try {
            const res = await fetch('https://reading-corner-server-2.onrender.com'+bookId);
            const data = await res.json();
    
            setBookDetails(data);
            setLoader(false);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
        loadData();
        fetch('https://reading-corner-server-2.onrender.com'+bookId)
    }, []);

    function handleUpdate(){
            navigate(bookId+"/edit-book");
    }

    const [showAlert, setShowAlert] = useState(false);

    function handleShowDeleteClick(){
        setShowAlert(true);
        document.body.style.overflow = "hidden";
    }

    function handleConfirmDeleteClick(){
        
        navigate(bookId+"/delete");
        
        
        setTimeout(() => {
            navigate("/arpit93/books");
        }, 4000);

        document.body.style.overflowY = "scroll"
    }

    return (

        <div>

            <div className="book-page-container">

            {
                showAlert && 
                <div className="confirm-delete-box book-confirm-delete-box">
                    <img style={{
                        position: "relative",
                        width: "60%",
                        left: "20%",
                        textAlign: "center"
                    }} src={warning}
                    />

                        <p>Are you sure you want to delete this book?</p>
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
                        loader ?
                        
                            <div className="loader">
                                <Loader />
                            </div>

                            :

                    <div className="">


                        <div className="book-container">

                        <div className="book-text-image-flex-container">
                            {/* <div className="book-image-container"> */}
                                <img src={bookDetails.imgURL} className="book-image" alt="Your Book Here" />
                            {/* </div> */}

                                <div className="short-book-details">
                                    <div className="book-name">{bookDetails.name}</div>
                                    <p className="book-volume"><u>Volume:</u> {bookDetails.volume}</p>
                                    <p className="book-author"><u>Author:</u> {bookDetails.author}</p>
                                    <p className="book-date"><i><u>Date Added:</u> {bookDetails.dateAdded}</i></p>
                                </div>
                        </div>
                        <div className="summary-container">
                            <div className="summary-heading">What I Learned From This Book:</div>
                                <p className="book-details">{bookDetails.summary}</p>

                                <button className="update-bookPage-btn" onClick={handleUpdate}>Update</button>
                        </div>

                        <button className="delete-btn book-show-delete-btn" onClick={handleShowDeleteClick}>Delete Book</button>
                      
                        </div>

                        <Footer />
                    </div>
                }
            </div>

        </div>

    );
}

export default AdminBookpage;