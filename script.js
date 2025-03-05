// Password Validation Tutorial
// https://www.w3schools.com/howto/howto_js_password_validation.asp

document.addEventListener('DOMContentLoaded', function() {
  // Get correct elements from HTML using their actual IDs
  var passwordInput = document.querySelector('input[name="password"]');
  var lowercase = document.getElementById("pwd-lowercase");
  var uppercase = document.getElementById("pwd-uppercase");
  var number = document.getElementById("pwd-number");
  var length = document.getElementById("pwd-length");
  var passwordMessage = document.getElementById("password-message");

  // When the user clicks on the password field, show the message box
  passwordInput.onfocus = function() {
    passwordMessage.style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  passwordInput.onblur = function() {
    passwordMessage.style.display = "none";
  }

  // When the user starts to type something inside the password field
  passwordInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters)) {
      lowercase.classList.remove("pwd-invalid");
      lowercase.classList.add("pwd-valid");
    } else {
      lowercase.classList.remove("pwd-valid");
      lowercase.classList.add("pwd-invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)) {
      uppercase.classList.remove("pwd-invalid");
      uppercase.classList.add("pwd-valid");
    } else {
      uppercase.classList.remove("pwd-valid");
      uppercase.classList.add("pwd-invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)) {
      number.classList.remove("pwd-invalid");
      number.classList.add("pwd-valid");
    } else {
      number.classList.remove("pwd-valid");
      number.classList.add("pwd-invalid");
    }

    // Validate length
    if(passwordInput.value.length >= 8 && passwordInput.value.length <= 12) {
      length.classList.remove("pwd-invalid");
      length.classList.add("pwd-valid");
    } else {
      length.classList.remove("pwd-valid");
      length.classList.add("pwd-invalid");
    }
  }
});