var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}

function calRect(l,b) {
    console.log(`Solving to x = ${l} and y = ${b}`)

    if(l == 0 || b == 0 ) {
        console.log("give  a real number for x and y")
    } else {
    console.log(`The perimeter is equal to ${rect.perimeter(l,b)}`)
    console.log(`the area is equal ${rect.area(l,b)}`)    
    }
}

calRect(2,5)
calRect(1,3)
calRect(0,0)