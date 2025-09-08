const fs = require("fs");
const path = require("path");


// fs.mkdirSync("docs");

// console.log(__dirname)

let filepath =  path.join(__dirname, "docs", "mydata.txt")

// let writeFile = fs.writeFileSync(filepath, "Hello World", "utf-8")


// let readFile = fs.readFileSync(filepath, "utf-8");
// let readFile = fs.readFileSync(filepath);

// console.log(readFile.toString())

// fs.appendFileSync(filepath, " this will be written in same line", "utf-8")
fs.appendFileSync(filepath, "\nthis will be written in next line", "utf-8")
