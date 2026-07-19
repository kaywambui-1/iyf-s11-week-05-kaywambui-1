const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);


//Exercise 2
// Mouse events

button.addEventListener("click", () => {
    console.log("clicked!");
});

button.addEventListener("dblclick", () => {
    console.log("Double clicked!");
});

button.addEventListener("mouseenter", () => {
    console.log("Mouse entered!");
});

button.addEventListener("mouseleave", () => {
    console.log("Mouse left!");
});

button.addEventListener("mousemove", () => {
    console.log("Mouse moving!");
});

// keyboard events

const input = document.getElementById("name");

input.addEventListener("keydown", () => {
    console.log("key pressed");
});


input.addEventListener("keyup", () => {
    console.log("key released");
});

input.addEventListener("keypress", () => {
    console.log("key pressed");
});


// form events

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
});


input.addEventListener("focus", (event) => {
    event.preventDefault();
    console.log("Input is focused");
});


input.addEventListener("blur", (event) => {
    event.preventDefault();
    console.log("Input lost focus");
});


input.addEventListener("input", () => {
    console.log("Input.value");
});


input.addEventListener("change", () => {
    console.log("Input change");
});


const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");

   let count = 0;
   increaseButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
   });

   const decreaseButton = document.getElementById("decrease");

   decreaseButton.addEventListener("click", () => {
    if(count >0) {
        count--;
    countDisplay.textContent = count;
    }
   });

   const resetButton = document.getElementById("reset");

   resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
   });






