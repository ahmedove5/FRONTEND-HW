
// Calculate area of a rectangle

let length_rectangle=6
let width_rectangle=6
area_rectangle=(length_rectangle*width_rectangle)
console.log(`The area of the rectangle is: ${area_rectangle}`)


// The Temperature Converte
let celsius =45
let fahrenheit =(celsius*1.8)+32
console.log(`${celsius}°C ${fahrenheit} °F`)




//Numbers' summations
let Numbers = [23,54,32,87,47]
let total=0
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum += Numbers[i]
}

console.log(`the sum of all numbers ${sum}`)


//Maximum number
array=[16,4,2,0,19,6]
console.log(Math.max(...array))



//Reverse Array
reverse_array=[1,2,3,4,5,6,7,8,9,10]
console.log(reverse_array.reverse())


//stars pattern
let n = 5;
let stars = "";
for (let x = 1; x <= n; x++) {
  for (let y = 0; y < x; y++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);