const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const apicache = require('apicache');

const app = express();

let cache = apicache.middleware;

app.use(cache('5 minutes'));

const cloudinary = require("./utils/cloudinary");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect("mongodb+srv://Book-Shelf-username:Adi_book@cluster0.wudij0q.mongodb.net/?retryWrites=true&w=majority");

const bookSchema = {
    name: String,
    description: String,
    imgURL: String
};

const blogSchema = {
    title: String,
    body: String,
    imgURL: String
};
const Book = mongoose.model("Book", bookSchema);
const Blog = mongoose.model("Blog", blogSchema);


app.post('/arpit93/add', async (req, res) => {
            
            try {
                const fileStr = req.body.data;
                const uploadResponse = await cloudinary.uploader.upload(fileStr, {
                    upload_preset: 'book_img',
                    folder: 'book-imgs'
                })
                
                var imgUrl = uploadResponse.secure_url;

    } catch (error) {
        res.status(500).json({err: "Something went wrong"});
    }
    
    const bookObj = {
        name: req.body.book.name,
        volume: req.body.book.volume,
        author: req.body.book.author,
        dateAdded: req.body.book.dateAdded,
        summary: req.body.book.summary,
        imgURL: imgUrl
    };

        const client = new MongoClient("mongodb+srv://Book-Shelf-username:Adi_book@cluster0.wudij0q.mongodb.net/test?retryWrites=true&w=majority");
        await client.connect();

        const db = client.db('test');
        const collection = db.collection('books');
        const result = await collection.insertOne(bookObj);

        client.close();

        apicache.clear("/arpit93/add");
});

app.post("/arpit93/add-blog", async function(req, res){

    try {
        const imgStr = req.body.image;
        const uploadResponse = await cloudinary.uploader.upload(imgStr, {
            upload_preset: 'blog_img',
            folder: 'blog-imgs'
        });
        
        var imgUrl = uploadResponse.secure_url;

    } catch (error) {
        res.status(500).json({err: "Something went wrong"});
    }

    const blogObj = {
        name: req.body.blogDet.title,
        postingDate: req.body.blogDet.postingDate,
        imgURL: imgUrl,
        richText: req.body.editorValues
    };

    const client = new MongoClient("mongodb+srv://Book-Shelf-username:Adi_book@cluster0.wudij0q.mongodb.net/test?retryWrites=true&w=majority");
    await client.connect();

    const db = client.db('test');
    const collection = db.collection('blogs');
    const result = await collection.insertOne(blogObj);

    client.close();

});

app.get('/blog', async (req, res) => {

    const {resources} = await cloudinary.v2.search
    .expression('folder: blog-imgs')
    .sort_by('public_id')
    .execute();

    const publicIDs = resources.map((file) => file.public_id);

    const blogDet = await Blog.find();

    const info = {
    img: publicIDs,
    details: blogDet
};

    res.send(info);
    
});

app.get('/all-books', async (req, res) => {
    
    const {resources} = await cloudinary.v2.search
    .expression('folder: book-imgs')
    .sort_by('public_id')
    .execute();
    
    const publicIDs = resources.map((file) => file.public_id);
    
    
    const allData = await Book.find();

    const info = {
        img: publicIDs,
        details: allData
    };
    res.send(info);

});

app.get("/books/:bookId", function(req, res){

    Book.findOne({_id: req.params.bookId}, function(err, book){
        if(err){
            // HANDLE ERROR 
        }else{
            res.send(book);
        }
    })
});
app.get("/arpit93/books/:bookId", function(req, res){

    Book.findOne({_id: req.params.bookId}, function(err, book){
        if(err){
            // HANDLE ERROR 
        }else{
            res.send(book);
        }
    })
});
app.get("/arpit93/books/:bookId/edit-book", async function(req, res){

    Book.findOne({_id: req.params.bookId}, function(err, book){
        if(err){
            // HANDLE ERROR
        }else{
            res.send(book);
        }
    })
});

app.post("/arpit93/books/:bookId/edit-book", async function(req, res){
    
    const summary = {$set: {summary: req.body.updatedSummary.summary}};

    
        const client = new MongoClient("mongodb+srv://Book-Shelf-username:Adi_book@cluster0.wudij0q.mongodb.net/test?retryWrites=true&w=majority");
        await client.connect();
    
        const db = client.db('test');
        const collection = db.collection('books');
        const result = await collection.updateOne({_id: new ObjectId(req.params.bookId)}, summary);
    
})

app.get("/blog/:blogId", function(req, res){

    Blog.findOne({_id: req.params.blogId}, function(err, blog){
        if(err){
            // HANDLE ERROR
        }else{
            res.send(blog);
        }
    })
});

app.get("/arpit93/blog/:blogId", function(req, res){

    Blog.findOne({_id: req.params.blogId}, function(err, blog){
        if(err){
            // HANDLE ERROR
        }else{
            res.send(blog);
        }
    })
});

app.get("/arpit93/blog/:blogId/delete", async function(req, res){

    Blog.deleteOne({_id: req.params.blogId}, function(err){
        if(err){
            // HANDLE ERROR
        }else{
            // HANDLE SUCCESS
        }
    });

});

app.get("/arpit93/books/:bookId/delete", async function(req, res){

    Book.deleteOne({_id: req.params.bookId}, function(err){
        if(err){
            // HANDLE ERROR
        }else{
            // HANDLE SUCCESS
        }
    });

});

app.post('/' , function(req, res){
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port "+port);
});
