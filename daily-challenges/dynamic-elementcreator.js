const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

addBtn.addEventListener("click", () => {
const paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph";
container.appendChild(paragraph);

})
