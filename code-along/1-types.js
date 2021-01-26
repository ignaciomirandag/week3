function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
    
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
let x
x = 5

let y = 14
console.log(y) // will apear in the console

y = y + 1 // now y is 15
console.log(y) // will apear in the console

let z = x + y

let output = z // will apear in the web

let quantity = 5
let food = 'tacos' // This is a String (not numeric, with '')
let withSalsa = true // Boolean value (no '' because its a variable)

// Boutput = 'I love ' + food
// output = 'I would like ' + quantity + ' ' + food
output = 'I would like ${quantity} ${food}' // Revisar






  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}