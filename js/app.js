let Name = "Giuseppe";
let age = 44;

const header = document.querySelector(".topbar");
const navLinks = document.querySelectorAll("li");

console.log(navLinks);

function sayHello() {
    let message = "Hello " + Name;
    let text = "You are " + age;
    console.log(message, text);
}
sayHello()

function simpleMath(a, b) {
    let result = a + b;
    return result;
}
let sum = simpleMath(2000, 2000);
console.log(sum);


window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }   
})