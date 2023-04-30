import React, { useEffect, useState } from "react";
import('../../public/styles-blog.css');
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import AdminNavbar from "./AdminNavbar.jsx";
import { useNavigate } from "react-router-dom";

function Postblog(){
    
    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();

    useEffect(() => {
        fetch('https://reading-corner-server-2.onrender.com/add-blog')
    }, []);

    const [blogDet, setBlogDet] = useState({
        title: "",
        body: "",
        postingDate: "",
        image: null
    });

    const [imageBase64, setImageBase64] = useState(null);

    function handleTitleChange(e){
        setBlogDet(prevState => ({
            ...prevState,
            title: e.target.value
        }));
    }
    
    function handleBodyChange(e){
        setBlogDet(prevState => ({
            ...prevState,
            body: e.target.value
        }));
    }
    
    function handleDateChange(e){
        setBlogDet(prevState => ({
            ...prevState,
            postingDate: e.target.value
        }));
    }

    function handleImageChange(e){
        setBlogDet(prevState => ({
            ...prevState,
            image: e.target.files[0]
        }));
    }

    useEffect(() => {
        if(!blogDet.image) return;

        const reader = new FileReader();

        reader.readAsDataURL(blogDet.image);
        reader.onload = () => {
            setImageBase64(reader.result);
        };
    }, [blogDet.image]);

    const navigate = useNavigate();

    const uploadImg = async (imageBase64) => {
  
                fetch("https://reading-corner-server-2.onrender.com/add-blog", {
                    method: 'POST',
                    body: JSON.stringify({blogDet: blogDet, editorValues: value, image: imageBase64}), // editorValues: value, 
                    headers: {'Content-Type' : 'application/json'}
                })
                
      }

    function handleFormSubmit(e){
        e.preventDefault();

        if(!blogDet.image) return
        uploadImg(imageBase64);

        alert("Your blog has been added... You will now be redirected to all blogs");
        
        setTimeout(() => {
            navigate("/arpit93/blog");
        }, 3000);
    }

    
    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

    return (
        <div>

        <AdminNavbar />

            <div className="post-blog-container">

                <div className="blog-post-form-sub-container">

                    <div className="blog-image-container">
                        {imageBase64 && <img src={imageBase64} className="blog-preview-image" alt="Uploaded Here" width="300px" style={{objectFit: "cover"}} />}
                    </div>

                    <form className="blog-form" onSubmit={handleFormSubmit}>

                        <div className="form-inputs-container">

                        <label>
                            Blog Title:
                            <input className="blog-title" type="text" name="title" placeholder="Title" onChange={handleTitleChange} required></input>
                        </label>

                        <label>
                            Blog Image:
                            <input type="file" className="blog-image-input" placeholder="Blog Image" onChange={handleImageChange} required></input>
                        </label>

                        <label>
                            Date Added:
                            <input type="date" className="blog-date-input" placeholder="Date of adding the Blog" onChange={handleDateChange} required />
                        </label>

                        <label>
                            Blog Body:
                        </label>


                        </div>

                        <div>
                            <div className="quill-container">
                                <div className="quill" ref={quillRef} required />
                            </div>
                        </div>

                        <button type="submit" className="blog-submit-btn">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Postblog;