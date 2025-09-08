// 1
// let sum = (a, b) => {

//     let result = a + b;
//     console.log("addition is " + result)

// }

// module.exports = sum;

// 2

let sum = (a, b) => {
    let result = a + b;
    console.log("addition is " + result)
}

let sub = (a, b) => {
    let result = a - b;
    console.log("subraction is " + result)
}

// module.exports = sum; // incorrect
// module.exports = sub; // incorrect

// module.exports.sum = sum;
// module.exports.sub = sub;

module.exports = {sum, sub};