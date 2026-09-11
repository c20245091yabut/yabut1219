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




// Query Selector


const heading = document.querySelector("h1");
const contactHeading = document.querySelector("#contact h2");
const projectHeading = document.querySelector("#projects h2");   
const servicesHeading = document.querySelector("#services h2"); 


heading.textContent = "My Portfolio";
contactHeading.textContent = "Let's Connect";
projectHeading.textContent = "Projects";
servicesHeading.textContent = "Services";


heading.style.color = "purple";
heading.style.backgroundColor = "yellow";

contactHeading.style.color = "purple";
projectHeading.style.color = "purple";
servicesHeading.style.color = "purple"; 


// Event Listeners
heading.addEventListener("click", function() {
    heading.style.color = "red";
    });

    const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color  = "black";
        
    } else { 
         body.style.backgroundColor = "white";
        body.style.color  = "white";
        
        
    }
});
