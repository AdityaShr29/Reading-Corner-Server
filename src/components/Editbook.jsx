import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar.jsx";
import { useNavigate } from "react-router-dom";

function Editbook(){

    const loadData = async () => {

        try {
            const res = await fetch('https://reading-corner-server-2.onrender.com'+bookId);
            const data = await res.json();
        
            setResponse(data);
        } catch (error) {
        }
    }
    
    useEffect(() => {
        loadData();
    }, []);
    
    useEffect(() => {
        fetch('https://reading-corner-server-2.onrender.com/add')
    }, []);

    const [bookSpec, setBookSpec] = useState({
        summary: "",
    });
    const [response, setResponse] = useState({});
    
    function handleClick(){
    }
     
    async function handleSummaryChange(e){
        setBookSpec(bookSpec => ({
            ...bookSpec,
            summary: e.target.value
        }));
    }

    
    const uploadData = async (bookSpec) => {

        fetch('https://reading-corner-server-2.onrender.com'+bookId, {
            method: 'POST',
            body: JSON.stringify({updatedSummary: bookSpec}),
            headers: {'Content-Type': 'application/json'}
        })
    }
    
        const bookId = window.location.pathname;

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        uploadData(bookSpec);
        
        alert("Hurray! Your book has been updated...You will now be redirected to your book page")
        setTimeout(() => {
            navigate("/arpit93/books");
        }, 4000);
            
    }
    

    function handleInputClick(){
        alert("You cannot edit this field! Try contacting your amazing developer if this is a mistake.");
    }

    function handleCancelCLick(){
        navigate("/arpit93/books");
    }

    return <div className="post-body">
    
    <AdminNavbar />
    
        <div className="book-post-form-container">

            <div className="book-post-form-sub-container">

                <form method="post" className="book-post-form" onSubmit={handleSubmit}>

                    <div className="preview-img">
                        Your Book
                        {<img src={response.imgURL} alt="Uploaded Here" width="300px" style={{objectFit: "cover"}} />}
                    </div>

                    <div className="form-inputs">

                        <div className="book-det-inputs">

                            <div className="first-row-grid-container">

                                <label>
                                    Title:
                                    <input className="title-input" type="text" name="name" placeholder={response.name} onClick={handleInputClick} />
                                </label>
                                <label>
                                    Volume:
                                    <input className="volume-input" type="text" name="volume" placeholder={response.volume} onClick={handleInputClick} />
                                </label>
                            </div>


                            <div className="second-row-grid-container">

                                <label>
                                    Author:
                                    <input className="author-input" type="text" name="author" placeholder={response.author} onClick={handleInputClick} />
                                </label>
                                <label>
                                    Date Added:
                                    <input className="date-input" type="date" name="date" placeholder={response.dateAdded} onClick={handleInputClick} />
                                </label>
                            </div>
                        </div>

                        <div className="book-det-textarea">
                            <label className="summary-label">
                                <p className="summary-label-p">Summary:</p> 
                                <textarea rows="20" style={{width: "100%"}} name="summary" defaultValue={response.summary} className="summary-area" onChange={handleSummaryChange} required />
                            </label>
                        </div>

                    </div>
                    <div className="update-btns-container">
                        <button className="cancel-button" type="button" onClick={handleCancelCLick}>Cancel</button>
                        <button className="update-book-btn" type="submit" onClick={handleClick}>Update</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
}

export default Editbook;