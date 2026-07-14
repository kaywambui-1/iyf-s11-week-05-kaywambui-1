// getElementById - returns single element
const mainHeader = document.getElementById("main-header");
console.log("getElementById:", mainHeader);

// getElementsByClassName - returns HTMLCollection (live)
const contentItems = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contentItems);

// getElementsByTagName - returns HTMLCollection (live)
const allParagraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", allParagraphs);

// querySelector - returns first match
const firstNavigationLink = document.querySelector(".nav-link");
console.log("querySelector:", firstNavigationLink);

// querySelectorAll - returns NodeList (static)
const navigationLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", navigationLinks);

// Practice: Select these elements
// 1. The h1 element
const header = document.getElementsByTagName("h1");
console.log("getElementsByTagName:", header);


// 2. All elements with class "content"
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);


// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("getElementById:", contactForm);


// 4. The email input
const emailInput = document.getElementById("email");
console.log("getElementById:", emailInput);


// 5. All list items in the nav
const navItems = document.querySelectorAll(".nav li");
console.log("querySelectorAll:", navItems);


// 6. The first .nav-link

const firstNavLink = document.querySelector(".nav a");
console.log("querySelector:", firstNavLink);


// 7. The last paragraph
const paragraphs = document.querySelectorAll("p");
const lastaParagraph = paragraphs[paragraphs.length - 1];

console.log(lastParagraph);
