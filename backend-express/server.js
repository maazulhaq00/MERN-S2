import express from "express"
import * as dotenv from "dotenv";

dotenv.config()

const app = express();

app.get("/", (req, res)=>{

    res.json({message: "Hello From express app"})

})
app.post("/", (req, res)=>{

    res.json({message: "Hello From express app post method"})

})

app.listen(process.env.PORT, () => { console.log(`Server running at http://localhost:${process.env.PORT}/`) })