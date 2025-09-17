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

app.get("/", (req, res) => {
    res.json({ "message": "Welcome to backend" })
})

// Category Create APIs
app.post("/categories", async (req, res) => {
    try {
        if(!('categoryName' in req.body) || !('categoryDescription' in req.body)){
            res.status(400).json({success: false, message: "categoryName or categoryDescription missing"})
        }
        // Get the data sent from req
        const {categoryName, categoryDescription} = req.body

        const categoryExist = await Category.findOne({categoryName})

        if(categoryExist){
            res.status(409).json({success: false, message: `${categoryName} already exist`})
        }

        // Create a category
        const category = await Category.create({categoryName,categoryDescription})

        // Send response with a new category data
        res.status(201).json({success:true, category })
    }
    catch(err){
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
})

app.get("/categories", async (req, res) => {
    try{

    // mongodb sa data lao
    const categories = await Category.find()

    // response mai data bhejo
    res.status(200).json({ success: true, categories })
    }
    catch(err){
        res.status(500).json({success: false, message: "Internal Server Error"})
    }

})

app.get("/categories/:id", async (req, res) => {
    try{

    const categoryId = req.params.id 

    // mongodb sa data lao
    const category = await Category.findById(categoryId)

    // response mai data bhejo
    res.status(200).json({ success: true, category })
    }
    catch(err){
        res.status(500).json({success: false, message: "Internal Server Error"})
    }

})


// Runing server
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})
