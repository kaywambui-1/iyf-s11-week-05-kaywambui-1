const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();  
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (isValid(data)) {
        console.log("Form data:", data);
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});


function showError(input, message) {
    input.classList.add("error");
   
}

function clearError(input) {
    input.classList.remove("error");
   
}

function isValid(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        data.name.length >= 2 &&
        emailRegex.test(data.email)
    );
}

// Success message
function showSuccess(message) {
    alert(message);
}