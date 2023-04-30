import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Loader from "./Loader.jsx";

function Books(){

    const [imgIds, setImgIds] = useState();
    const [bookDetails, setBookDetails] = useState([]);

    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);

        const loadImages = async () => {
          try {
            const res = await fetch('https://reading-corner-server-2.onrender.com/all-books');
            const data = await res.json();
            setImgIds(data.img);
            setLoader(false);
          } catch (error) {
            setError(true);
          }
        }

        const loadData = async () => {

          try {
            const res = await fetch('https://reading-corner-server-2.onrender.com/all-books');
            const data = await res.json();

            setBookDetails(data.details);
          } catch (error) {
            setError(true);
          }
        }

        useEffect(() => {
          loadImages();
          loadData();
          fetch('https://reading-corner-server-2.onrender.com/all-books')
          .then(res => setDisplayBook(res))
          .catch()
        }, []);

        const [querry, setQuerry] = useState("");

        function handleSearchInputChange(e){
          setQuerry(e.target.value);
        }

        function handleSearchInputClick(e){
          e.currentTarget.classList.add("active-blog");
        }

    return (
        <div>


          <div>

        <Navbar />

        <div className="book-search-input-container">
          <input className="book-search-input" type="search" onChange={handleSearchInputChange} onClick={handleSearchInputClick} placeholder="Search a book" />
        </div>



        {
                    error ?
                      <div className="error">
                      <h3>Something Went Wrong</h3>
                      <p>Try refreshing the page...</p>
                      </div>
                    :
                    loader ?

                      <div>
                      
                          <div className="loader">
                              <Loader />
                              <h5>Fetching Books...</h5>
                          </div>
                      </div>
                        :
        <div>

            <div className="books-grid-container">

            {
              bookDetails.filter(book => {
                if(querry === ""){
                  
                  return book;
                  
                }else if(book.name.toLowerCase().includes(querry.toLowerCase())){
                  return book;
                }
              }).slice(0).reverse().map((det, index) => (
                index ?

                        <div className="book-cards" key={index} onClick={() => handleBookClick(det._id)}>
                            <img className="book-img" src={det.imgURL}/>
                                <article className="book-content">
                                    <div>{det.name}</div>
                                    <p className="book-summary">{det.summary.substring(0, 150)+"..."}</p>
                                    <p className="book-date"><u><i>Posted On: {det.dateAdded}</i></u></p>
                                    <Link to={det._id} className="open-first-book-button open-book-button" target="_blank">Read More</Link>
                                </article>
                        </div>
                        :
                        <div className="first-book-container" onClick={() => handleBookClick(det._id)}>
                            <div className="first-book-sub-container book-cards" key={index}>
                                <img className="first-book-img book-img" src={det.imgURL}/>
                                <article className="first-book-content book-content">
                                    <div>{det.name}</div>
                                    <p className="first-book-summary book-summary">{det.summary.substring(0, 150)+"..."}</p>
                                    <p className="book-date"><u><i>Posted On: {det.dateAdded}</i></u></p>
                                    <Link to={det._id} className="open-first-book-button open-book-button" target="_blank">Read More</Link>
                                </article>
                            </div>
                        </div>
              ))
            }

            </div>
        </div>
        }

        </div>
        
        </div>

    );
}

export default Books;