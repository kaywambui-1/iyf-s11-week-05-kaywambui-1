// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph); // add at the end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  //  Add before first p

// modern insertation methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling


// Exercise 2
// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
while (article.firstChild){
    article.removeChild(article.firstChild);

}


// Exercise 3
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true); // true = deep clone
clone.querySelector("a"). textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// create a function that adds a new nav dynamically:
function addNavItem(text, href){
    // create a <li>
    const  li = document.createElement("li");
    // create an <a>
    const link = document.createElement("a")
    // give <a> its text
    link.textContent = text;
    // give <a> its class
    link.className = "nav-link";
    // set the h-ref attribute
    link.href;
    // put the <a> inside the <li>
    li.appendChild(link);
    // find the navigation list 
    const navList = document.querySelector(".nav-list");
    // Add the new <li> to the navigation
    navList.appendChild(li);

}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");