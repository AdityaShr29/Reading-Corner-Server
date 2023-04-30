import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Post from "./Post.jsx";
import Blog from "./Blog.jsx";
import Postblog from "./Postblog.jsx";
import Bookpage from "./Bookpage.jsx";
import AdminBookpage from "./AdminBookpage.jsx";
import Blogpage from "./Blogpage.jsx";
import AdminBlogpage from "./AdminBlogpage.jsx";
import Books from "./Books.jsx";
import AdminBooks from "./AdminBooks.jsx";
import Editbook from "./Editbook.jsx";
import AdminBlog from "./AdminBlog.jsx";
import Deleteblog from "./Deleteblog.jsx";
import Deletebook from "./Deletebook.jsx";

function App(){

    const id="";

    return <div>
    <h1>{id}</h1>
    
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/arpit93/add" element={<Post />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/arpit93/books" element={<AdminBooks />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/arpit93/blog" element={<AdminBlog />} />
                    <Route path="/arpit93/add-blog" element={<Postblog />} />
                    <Route path="/books/:bookId" element={<Bookpage />} />
                    <Route path="/arpit93/books/:bookId" element={<AdminBookpage />} />
                    <Route path="/arpit93/books/:bookId/edit-book" element={<Editbook />} />
                    <Route path="/blog/:blogId" element={<Blogpage />} />
                    <Route path="/arpit93/blog/:blogId" element={<AdminBlogpage />} />

                    <Route path="/arpit93/blog/:blogId/delete" element={<Deleteblog />} />
                    <Route path="/arpit93/books/:bookId/delete" element={<Deletebook />} />
                </Routes>
            </Router>
        </div>
}

export default App;