function showMessage(){

alert("Welcome to Plant Protection System");

}

function submitForm(){

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

if(name=="" || email==""){

alert("Please fill all fields");

return false;

}

alert("Thank you for contacting us");

return true;

}
