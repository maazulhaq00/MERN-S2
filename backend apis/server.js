import express from 'express'
import * as dotenv from 'dotenv'
import connectToDB from './config/connectToDb.js';
import Category from './models/categoryModel.js'

dotenv.config();

// create express app
const app = express();

// configure express app
app.use(express.json())

// connect to db
connectToDB();

app.get("/", (req, res)=>{
    res.json({"message": "Welcome to backend"})
})

// Category Create APIs
app.post("/categories", async (req, res) => {

    // Get the data sent from req
    const categoryName = req.body.categoryName;
    const categoryDescription = req.body.categoryDescription;

    // Create a category
    const category = await Category.create({
        categoryName: categoryName,
        categoryDescription: categoryDescription
    })

    // Send response with a new category data
    res.status(201).json({category: category})

})

app.get("/categories", async (req, res) => {
    
    // mongodb sa data lao
    const categories = await Category.find()

    // response mai data bhejo
    res.status(200).json({categories: categories})

})


// Runing server
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})
