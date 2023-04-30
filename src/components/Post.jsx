import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar.jsx";

function Post(){

    const navigate = useNavigate();

    const[book, setBook] = useState({
        name: "",
        volume: "",
        author: "",
        dateAdded: "",
        summary: "",
        image: null
    });

    useEffect(() => {
        fetch('https://reading-corner-server-2.onrender.com/add')
    }, []);

    const [bookSpec, setBookSpec] = useState({
        name: "",
        volume: "",
        author: "",
        dateAdded: "",
        summary: "",
    });
    
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
        
            function handleImageChange(e){
                setImage(e.target.files[0]);
                setBook(book => ({
                    ...book,
                    image: e.target.files[0]
                }))
            }
        
    async function handleNameChange(e){
        setBookSpec(bookSpec => ({
            ...bookSpec,
            name: e.target.value
        }));
    }
    async function handleVolumeChange(e){
        setBookSpec(bookSpec => ({
            ...bookSpec,
            volume: e.target.value
        }));

    }
    async function handleAuthorChange(e){
        setBookSpec(bookSpec => ({
            ...bookSpec,
            author: e.target.value
        }));

    }
    async function handleDateChange(e){
        setBookSpec(bookSpec => ({
            ...bookSpec,
            dateAdded: e.target.value
        }));

    }
    async function handleSummaryChange(e){
        setBookSpec(bookSpec => ({
            ...bookSpec,
            summary: e.target.value
        }));

    }

    const uploadData = async (imageBase64) => {
      const sendBook = {
            name: bookSpec.name,
            volume: bookSpec.volume,
            author: bookSpec.author,
            dateAdded: bookSpec.dateAdded,
            summary: bookSpec.summary,
        }

              fetch("https://reading-corner-server-2.onrender.com/add", {
                  method: 'POST',
                  body: JSON.stringify({data: imageBase64, book: sendBook}),
                  headers: {'Content-Type' : 'application/json'}
              })
              
    }
    function handleSubmit(e){
        e.preventDefault();

        if(!image) return
        uploadData(imageBase64);

        alert("Book added successfully");
        
        setTimeout(() => {
                navigate("/arpit93/books");
        }, 3000);
            
  }
    

    useEffect(() => {
        if(!image) return;

        const reader = new FileReader();

        reader.readAsDataURL(image);
        reader.onload = () => {
            setImageBase64(reader.result);
        };
    }, [image]);

    return <div className="post-body">

    <AdminNavbar />
    
        <div className="book-post-form-container">

            <div className="book-post-form-sub-container">

                <form method="post" className="book-post-form" onSubmit={handleSubmit}>

                    <div className="preview-img">
                        Your Book
                        {imageBase64 && <img src={imageBase64} alt="Uploaded Here" width="300px" style={{objectFit: "cover"}} />}
                    </div>

                    <div className="form-inputs">

                        <div className="book-det-inputs">

                            <div className="first-row-grid-container">

                                <label>
                                    Title:
                                    <input className="title-input" type="text" name="name" onChange={handleNameChange} required />
                                </label>
                                <label>
                                    Volume:
                                    <input className="volume-input" type="text" name="volume" onChange={handleVolumeChange} />
                                </label>
                            </div>


                            <div className="second-row-grid-container">

                                <label>
                                    Author:
                                    <input className="author-input" type="text" name="author" onChange={handleAuthorChange} required />
                                </label>
                                <label>
                                    Date Added:
                                    <input className="date-input" type="date" name="date" onChange={handleDateChange} required />
                                </label>
                                <label>
                                    Upload Book Image:
                                    <input className="image-input" type="file" onChange={handleImageChange} required />
                                </label>
                            </div>
                        </div>

                        <div className="book-det-textarea">
                            <label className="summary-label">
                                <p className="summary-label-p">Summary:</p> 
                                <textarea rows="20" cols="90" name="summary" className="summary-area" onChange={handleSummaryChange} required />
                            </label>
                        </div>

                    </div>
                    <button className="add-book-btn" type="submit">Add</button>
                </form>
            </div>
        </div>

    </div>
}

export default Post;