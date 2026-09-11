console.log ("hello world");
console.log ("first java script");  


const myName = "Nicolas";
let age = 20;
const number = 940312345713;
const address = "Brgy 1-A manapla ";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);



function greet(name) {
    return `Good morning, ${name}`;

}
console.log(greet(`Rene`)); 


 

function add (a,b) {
    return a + b;
}
function mdas (num1,num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;
    return (`values: ${num1} and ${num2},\n product: ${m}, \n quotient: ${d}, \n sum: ${a}, \n difference: ${s}`);
    
    }
   
   console.log (mdas(5,3));
