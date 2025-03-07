document.addEventListener('DOMContentLoaded', function() {
  initPasswordValidation();
  initPhoneFormatting();
  initPasswordConfirmation();
});

// Password validation with requirements indicator
function initPasswordValidation() {
  const passwordInput = document.querySelector('input[name="password"]');
  const elements = {
    lowercase: document.getElementById("pwd-lowercase"),
    uppercase: document.getElementById("pwd-uppercase"),
    number: document.getElementById("pwd-number"),
    length: document.getElementById("pwd-length")
  };
  const passwordMessage = document.getElementById("password-message");
  
  if (!passwordInput || !passwordMessage) return;
  
  // Show/hide message box on focus/blur
  passwordInput.addEventListener('focus', () => passwordMessage.style.display = "block");
  passwordInput.addEventListener('blur', () => passwordMessage.style.display = "none");
  
  // Live validation as user types
  passwordInput.addEventListener('input', () => {
    validateRequirement(elements.lowercase, /[a-z]/g.test(passwordInput.value));
    validateRequirement(elements.uppercase, /[A-Z]/g.test(passwordInput.value));
    validateRequirement(elements.number, /[0-9]/g.test(passwordInput.value));
    validateRequirement(elements.length, 
      passwordInput.value.length >= 8 && passwordInput.value.length <= 12);
  });
  
  function validateRequirement(element, isValid) {
    element.classList.toggle("pwd-valid", isValid);
    element.classList.toggle("pwd-invalid", !isValid);
  }
}

// Phone number formatting
function initPhoneFormatting() {
  const phoneInput = document.getElementById('tel');
  
  if (!phoneInput) return;
  
  phoneInput.addEventListener('input', function() {
    const digits = this.value.replace(/\D/g, '').substring(0, 10);
    
    let formattedNumber = '';
    if (digits.length > 0) formattedNumber += '(' + digits.substring(0, 3);
    if (digits.length > 3) formattedNumber += ') ' + digits.substring(3, 6);
    if (digits.length > 6) formattedNumber += '-' + digits.substring(6);
    
    this.value = formattedNumber;
  });
}

// Password confirmation validation
function initPasswordConfirmation() {
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('password-confirm');
  const form = document.getElementById('formId');
  
  if (!passwordInput || !confirmInput || !form) return;
  
  function validatePasswordMatch() {
    const doMatch = passwordInput.value === confirmInput.value;
    confirmInput.setCustomValidity(doMatch ? '' : "Passwords don't match");
  }
  
  // Check match on input in either field
  [passwordInput, confirmInput].forEach(input => {
    input.addEventListener('input', validatePasswordMatch);
  });
  
  // Final check on form submission
  form.addEventListener('submit', function(event) {
    validatePasswordMatch();
    if (!this.checkValidity()) event.preventDefault();
  });
}

document.querySelectorAll('.sign-up-form input').forEach(input => {
  input.addEventListener('blur', function () {
    this.classList.add('touched');
  });
});