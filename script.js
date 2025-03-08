document.addEventListener('DOMContentLoaded', () => {
  initPasswordValidation();
  initPhoneFormatting();
  initPasswordConfirmation();
  trackTouchedInputs();
});

/**
 * Validates password requirements with a dynamic message box
 * that appears on focus and hides on blur.
 */
function initPasswordValidation() {
  const passwordInput = document.querySelector('input[name="password"]');
  const elements = {
    lowercase: document.getElementById("pwd-lowercase"),
    uppercase: document.getElementById("pwd-uppercase"),
    number: document.getElementById("pwd-number"),
    length: document.getElementById("pwd-length"),
  };
  const passwordMessage = document.getElementById("password-message");

  if (!passwordInput || !passwordMessage) return;

  // Show/hide the password requirements box
  passwordInput.addEventListener('focus', () => passwordMessage.style.display = "block");
  passwordInput.addEventListener('blur', () => passwordMessage.style.display = "none");

  // Validate each requirement as the user types
  passwordInput.addEventListener('input', () => {
    validateRequirement(elements.lowercase, /[a-z]/.test(passwordInput.value));
    validateRequirement(elements.uppercase, /[A-Z]/.test(passwordInput.value));
    validateRequirement(elements.number, /[0-9]/.test(passwordInput.value));
    validateRequirement(elements.length, passwordInput.value.length >= 8 && passwordInput.value.length <= 12);
  });

  function validateRequirement(element, isValid) {
    element.classList.toggle("pwd-valid", isValid);
    element.classList.toggle("pwd-invalid", !isValid);
  }
}

/**
 * Formats a phone number input as the user types,
 * e.g. "(555) 123-4567".
 */
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

/**
 * Checks that the password and confirmation match,
 * displaying a custom validity error if they don't.
 */
function initPasswordConfirmation() {
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('password-confirm');
  const form = document.getElementById('formId');

  if (!passwordInput || !confirmInput || !form) return;

  function validatePasswordMatch() {
    const doMatch = passwordInput.value === confirmInput.value;
    confirmInput.setCustomValidity(doMatch ? '' : "Passwords don't match");
  }

  [passwordInput, confirmInput].forEach(input => {
    input.addEventListener('input', validatePasswordMatch);
  });

  form.addEventListener('submit', function(event) {
    validatePasswordMatch();
    if (!this.checkValidity()) event.preventDefault();
  });
}

/**
 * Marks inputs as 'touched' when blurred,
 * triggering relevant styles like invalid borders.
 */
function trackTouchedInputs() {
  const inputs = document.querySelectorAll('.sign-up-form input');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      this.classList.add('touched');
    });
  });
}