const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav


// Header
const header = document.querySelector("header");
const nav = header.querySelector(nav);
console.log(nav);

//Parent li
const firstNavlink = document.querySelector(".nav-link");
console.log(firstNavLink.parentElement);


// Next sibling
const article = document.querySelector("article");
console.log(articlle.nextElementSibling);


//Ul child elements
const ul = document.querySelector("ul");
console.log(ul.children);


// Navigate upto body
const footer = document.querySelector("footer");
console.log(footer.parentElement);


