 const sorce = document.getElementById("source");
 const targent = document.getElementById("terget");
const button = document.getElementById("copyBtn");

button.addEventListener("click", function (){
    targent.innerHTML = sorce.innerHTML;
});