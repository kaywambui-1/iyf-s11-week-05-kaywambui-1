
document.addEventListener("click", function(event) {
    
    console.log("Target:", event.target);
    
    console.log("Current Target:", event.currentTarget);
    
    console.log("Type:", event.type);
    
    console.log("Position:", event.clientX, event.clientY);
    
});


document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});

document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);      
    console.log("Code:", event.code);    
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);

if (event.key.ctrlKey && event.key === "s"){
    event.preventDefault();
    alert("Saved");
}

if (event.key=== "Escape"){
    document.querySelectorAll("input").forEach(function(inpuy){
        input.value = "";
    });
}

//Ctrl + Enter
if(event.ctrlKey && event.key === "Enter"){
    event.preventDefault();
    form.requestSubmit();
}
});