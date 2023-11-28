function func() {
    console.log("Function called!");  // Add more log statements as needed
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (email === 'kirry@gmail.com' && pass === '123') {
        alert("Login successful!");
        document.getElementById("content").style.display = "block";
    } else {
        alert("Invalid password");
    }
}