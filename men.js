

  function func() {
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    
    if (email === 'kirry@gmail.com' && pass === '123') {
      alert("Login successful!");
      
      document.getElementById("content").classList.remove("hidden");
     
    } else {
      alert("Invalid password");
    }
  }
