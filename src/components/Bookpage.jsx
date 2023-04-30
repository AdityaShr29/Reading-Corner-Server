import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import("../../public/styles-blog.css");
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";

function Bookpage(){

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
                    loader ?
                    
                        <div className="loader">
                            <Loader />
                        </div>

                        :

                <div>


                    <div className="book-container">

                    <div className="book-text-image-flex-container">
                        {/* <div className="book-image-container"> */}
                            <img src={bookDetails.imgURL} className="book-image" alt="Your Book Here" />
                        {/* </div> */}

                            <div className="short-book-details">
                                <div className="book-name">{bookDetails.name}</div>
                                <p className="book-volume"><u>Volume:</u> {bookDetails.volume}</p>
                                <p className="book-author"><u>Author:</u> {bookDetails.author}</p>
                                <p className="book-date"><u>Date Added:</u> {bookDetails.dateAdded}</p>
                            </div>
                    </div>
                    <div className="summary-container">
                        <div className="summary-heading">What I Learned From This Book:</div>
                            <p className="book-details">Details... {bookDetails.summary}</p>
                    </div>

                        {/* <p>Congrats!!! You are now on the book page with id {window.location.pathname}.</p> */}
                    </div>

                    <Footer />
                </div>
            }

        </div>
    );
}

export default Bookpage;