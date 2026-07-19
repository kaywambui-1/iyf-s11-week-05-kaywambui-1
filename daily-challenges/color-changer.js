console.log("javaScript is working!");


const button = document.getElementById("changeColor");

const headings = document.querySelectorAll("h1, h2, h3");

button.addEventListener("click", () => {

    const randomColor = "#" + 
    Math.floor(Math.random() *
     16777215).toString(16);

    headings.forEach((heading) => {
        heading.style.color = randomColor;
    });

});