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

document.addEventListener('DOMContentLoaded', function() {
  // Existing code...
  
  // Phone number formatting
  const phoneInput = document.getElementById('tel');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      // Get only the digits from the input
      let digits = this.value.replace(/\D/g, '');
      
      // Limit to 10 digits
      digits = digits.substring(0, 10);
      
      // Format the phone number
      let formattedNumber = '';
      if (digits.length > 0) {
        formattedNumber += '(' + digits.substring(0, 3);
      }
      if (digits.length > 3) {
        formattedNumber += ') ' + digits.substring(3, 6);
      }
      if (digits.length > 6) {
        formattedNumber += '-' + digits.substring(6, 10);
      }
      
      // Update the input value
      this.value = formattedNumber;
    });
  }
});

// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  // Get all inputs with title attributes
  const inputs = document.querySelectorAll('input[title]');
  
  // For each input with a title
  inputs.forEach(input => {
    // Store the title message
    const validationMessage = input.getAttribute('title');
    
    // Add an event listener for invalid event
    input.addEventListener('invalid', function(e) {
      // Prevent the default browser popup
      e.preventDefault();
      
      // Set custom validation message
      this.setCustomValidity('');
      
      // Create or get error message element
      let errorElement = this.parentNode.querySelector('.error-message');
      if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.color = 'var(--invalidRed)';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.display = 'block';
        errorElement.style.marginTop = '4px';
        this.parentNode.appendChild(errorElement);
      }
      
      // Set the error message text
      errorElement.textContent = validationMessage;
      errorElement.style.display = 'block';
    });
    
    // Clear the error when the user starts typing again
    input.addEventListener('input', function() {
      this.setCustomValidity('');
      const errorElement = this.parentNode.querySelector('.error-message');
      if (errorElement) {
        errorElement.style.display = 'none';
      }
    });
  });
});