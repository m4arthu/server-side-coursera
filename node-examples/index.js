var rect = require("./rect.js");

function calRect(x,y) {
    rect(x,y, (err, rectangle) => {
        if (err) {
            console.log(`Solving to x = ${x} and y = ${y}`);
            console.log("ERROR:", err.message);
        } else {
            console.log(`Solving to x = ${x} and y = ${y}`);
            console.log(`The area of rectangle is ${rectangle.area()}`);
            console.log(`The perimeter of rectangle is ${rectangle.perimeter()}`)
        }
    });
    
}

calRect(2,5)
calRect(1,3)
calRect(0,0)