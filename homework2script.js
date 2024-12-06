// First Name Validation
function validateFirstName() {
    const fname = document.getElementById("fname").value;
    const fnameError = document.getElementById("fnameError");
    const namePattern = /^[A-Za-z'-]{1,30}$/;

    if (!namePattern.test(fname)) {
        fnameError.textContent = "First name must be 1-30 characters and can only contain letters, apostrophes, and dashes.";
        fnameError.style.display = "block";
        return false;
    } else {
        fnameError.textContent = "";
        fnameError.style.display = "none";
        return true;
    }
}

// Middle Initial Validation
function validateMiddleInitial() {
    const mintial = document.getElementById("mintial").value;
    const mintialError = document.getElementById("mintialError");
    const initialPattern = /^[A-Za-z]?$/;  // Allows one letter or blank

    if (!initialPattern.test(mintial)) {
        mintialError.textContent = "Middle initial must be a single letter.";
        mintialError.style.display = "block";
        return false;
    } else {
        mintialError.textContent = "";
        mintialError.style.display = "none";
        return true;
    }
}

// Last Name Validation
function validateLastName() {
    const lname = document.getElementById("lname").value;
    const lnameError = document.getElementById("lnameError");
    const namePattern = /^[A-Za-z'-]{1,30}$/;

    if (!namePattern.test(lname)) {
        lnameError.textContent = "Last name must be 1-30 characters and can only contain letters, apostrophes, and dashes.";
        lnameError.style.display = "block";
        return false;
    } else {
        lnameError.textContent = "";
        lnameError.style.display = "none";
        return true;
    }
}


// Date of Birth Validation
function validateDOB() {
    const dob = document.getElementById("dob").value;
    const dobError = document.getElementById("dobError");

    if (!dob) {
        dobError.textContent = "Date of birth is required.";
        dobError.style.display = "block";
        return false;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (birthDate > today || age > 120) {
        dobError.textContent = "Date of birth cannot be in the future or more than 120 years ago.";
        dobError.style.display = "block";
        return false;
    } else {
        dobError.textContent = "";
        dobError.style.display = "none";
        return true;
    }
}

// Social Security Number (SSN) Validation
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
    const ssnError = document.getElementById("ssnError");

    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (!ssnPattern.test(ssn)) {
        ssnError.textContent = "SSN must be in the format XXX-XX-XXXX.";
        ssnError.style.display = "block";
        return false;
    } else {
        ssnError.textContent = "";
        ssnError.style.display = "none";
        return true;
    }
}

// Address Line 1 Validation
function validateAddressLine1() {
    const address = document.getElementById("address").value;
    const addressError = document.getElementById("addressError");

    if (address.length < 2 || address.length > 30) {
        addressError.textContent = "Address Line 1 must be between 2 and 30 characters.";
        addressError.style.display = "block";
        return false;
    } else {
        addressError.textContent = "";
        addressError.style.display = "none";
        return true;
    }
}

// City Validation
function validateCity() {
    const city = document.getElementById("city").value;
    const cityError = document.getElementById("cityError");

    if (city.length < 2 || city.length > 30) {
        cityError.textContent = "City must be between 2 and 30 characters.";
        cityError.style.display = "block";
        return false;
    } else {
        cityError.textContent = "";
        cityError.style.display = "none";
        return true;
    }
}

// State Validation
function validateState() {
    const state = document.getElementById("state").value;
    const stateError = document.getElementById("stateError");

    if (!state) {
        stateError.textContent = "Please select a state.";
        stateError.style.display = "block";
        return false;
    } else {
        stateError.textContent = "";
        stateError.style.display = "none";
        return true;
    }
}

// Zip Code Validation
function validateZipCode() {
    const zip = document.getElementById("zip").value;
    const zipError = document.getElementById("zipError");

    const zipPattern = /^\d{5}$/;

    if (!zipPattern.test(zip)) {
        zipError.textContent = "Zip Code must be exactly 5 digits.";
        zipError.style.display = "block";
        return false;
    } else {
        zipError.textContent = "";
        zipError.style.display = "none";
        return true;
    }
}

// Email Validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address (name@domain.tld).";
        emailError.style.display = "block";
        return false;
    } else {
        emailError.textContent = "";
        emailError.style.display = "none";
        return true;
    }
}
function validateUserID() {
    const userID = document.getElementById("userID").value;
    const userIDError = document.getElementById("userIDError");

    if (/^\d/.test(userID)) {
        userIDError.textContent = "User ID cannot start with a number.";
        userIDError.style.display = "block";
        return false;
    }

    if (userID.length < 5 || userID.length > 20) {
        userIDError.textContent = "User ID must be between 5 and 20 characters.";
        userIDError.style.display = "block";
        return false;
    }

    if (!/^[A-Za-z0-9_-]+$/.test(userID)) {
        userIDError.textContent = "User ID can only contain letters, numbers, dashes, and underscores.";
        userIDError.style.display = "block";
        return false;
    }

    userIDError.textContent = "";
    userIDError.style.display = "none";
    return true;
}
function validatePassword() {
    const password = document.getElementById("pwd1").value;
    const userID = document.getElementById("userID").value;
    const pwd1Error = document.getElementById("pwd1Error");

    if (password.length < 8 || password.length > 20) {
        pwd1Error.textContent = "Password must be between 8 and 20 characters.";
        pwd1Error.style.display = "block";
        return false;
    }

    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(password)) {
        pwd1Error.textContent = "Password must include at least 1 uppercase letter, 1 lowercase letter, and 1 number.";
        pwd1Error.style.display = "block";
        return false;
    }

    if (password === userID) {
        pwd1Error.textContent = "Password cannot be the same as your User ID.";
        pwd1Error.style.display = "block";
        return false;
    }

    pwd1Error.textContent = "";
    pwd1Error.style.display = "none";
    return true;
}
function validateConfirmPassword() {
    const password = document.getElementById("pwd1").value;
    const confirmPassword = document.getElementById("pwd2").value;
    const pwd2Error = document.getElementById("pwd2Error");

    if (password !== confirmPassword) {
        pwd2Error.textContent = "Passwords do not match.";
        pwd2Error.style.display = "block";
        return false;
    }

    pwd2Error.textContent = "";
    pwd2Error.style.display = "none";
    return true;
}


// Add Event Listeners for Validation
document.getElementById("fname").addEventListener("input", validateFirstName);
document.getElementById("dob").addEventListener("blur", validateDOB);
document.getElementById("ssn").addEventListener("input", validateSSN);
document.getElementById("address").addEventListener("input", validateAddressLine1);
document.getElementById("city").addEventListener("input", validateCity);
document.getElementById("state").addEventListener("change", validateState);
document.getElementById("zip").addEventListener("input", validateZipCode);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const isUserIDValid = validateUserID();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (!isUserIDValid || !isPasswordValid || !isConfirmPasswordValid) {
        event.preventDefault(); // Prevent form submission
        alert("Please fix the errors in the form before submitting.");
    }
});
// Function to validate the entire form
function validateForm() {
    let isValid = true;

    // Validate First Name
    if (!validateFirstName()) {
        isValid = false;
    }

    // Validate Middle Initial (optional, but should still follow rules if provided)
    const mInitial = document.getElementById("mintial").value;
    if (mInitial && !/^[A-Za-z]$/.test(mInitial)) {
        showError("mintial", "Middle Initial must be a single letter.");
        isValid = false;
    } else {
        clearError("mintial");
    }

    // Validate Last Name
    if (!validateLastName()) {
        isValid = false;
    }

    // Validate Date of Birth
    if (!validateDOB()) {
        isValid = false;
    }

    // Validate SSN
    if (!validateSSN()) {
        isValid = false;
    }

    // Validate Address Line 1
    if (!validateAddressLine1()) {
        isValid = false;
    }

    // Validate City
    if (!validateCity()) {
        isValid = false;
    }

    // Validate State
    if (!validateState()) {
        isValid = false;
    }

    // Validate Zip Code
    if (!validateZipCode()) {
        isValid = false;
    }

    // Validate Email
    if (!validateEmail()) {
        isValid = false;
    }

    // Validate User ID
    if (!validateUserID()) {
        isValid = false;
    }

    // Validate Password
    if (!validatePassword()) {
        isValid = false;
    }

    // Validate Confirm Password
    if (!validateConfirmPassword()) {
        isValid = false;
    }

    if (isValid) {
        alert("Form is valid. You may now submit.");
        document.getElementById("submitButton").disabled = false; // Enable the Submit button
    } else {
        alert("Please correct the highlighted errors before submitting.");
        document.getElementById("submitButton").disabled = true; // Keep the Submit button disabled
    }

    return isValid;
}


// Helper Functions to Display/Remove Errors
function showError(fieldId, message) {
    const errorSpan = document.getElementById(`${fieldId}Error`);
    errorSpan.textContent = message;
    errorSpan.style.display = "block";
}

function clearError(fieldId) {
    const errorSpan = document.getElementById(`${fieldId}Error`);
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
}


function reviewForm() {
    const form = document.querySelector("form");
    if (!form) {
        console.error("Form not found");
        return;
    }

    let reviewMessage = "PLEASE REVIEW THIS INFORMATION\n\n";

    
    const fname = form.querySelector("#fname")?.value || "(not provided)";
    const mInitial = form.querySelector("#mintial")?.value || "(not provided)";
    const lname = form.querySelector("#lname")?.value || "(not provided)";
    const nameStatus = fname && lname ? "valid" : "ERROR: Missing Name";
    reviewMessage += `First, MI, Last Name: ${fname} ${mInitial} ${lname} - ${nameStatus}\n`;

    
    const dob = form.querySelector("#dob")?.value;
    const dobStatus = validateDOB(dob);
    reviewMessage += `Date of Birth: ${dob || "(not provided)"} - ${dobStatus}\n`;

    
    const email = form.querySelector("#email")?.value;
    const emailStatus = validateEmail(email);
    reviewMessage += `Email address: ${email || "(not provided)"} - ${emailStatus}\n`;

    
    const phone = form.querySelector("#phone")?.value;
    const phoneStatus = validatePhone(phone);
    reviewMessage += `Phone number: ${phone || "(not provided)"} - ${phoneStatus}\n`;

    
    const address = form.querySelector("#address")?.value || "(not provided)";
    const address2 = form.querySelector("#address2")?.value || "(not provided)";
    const city = form.querySelector("#city")?.value || "(not provided)";
    const state = form.querySelector("#state")?.value || "(not provided)";
    const zip = form.querySelector("#zip")?.value;
    const zipStatus = zip ? "valid" : "ERROR: Missing Zip Code";
    reviewMessage += `Address: ${address}\n          ${address2}\nCity: ${city}, State: ${state}, Zip: ${zip || "(not provided)"} - ${zipStatus}\n`;

    
    reviewMessage += "\nREQUESTED INFO\n";
    const diseases = ["disease1", "disease2", "disease3", "disease4", "disease5"];
    diseases.forEach(disease => {
        const checked = form.querySelector(`#${disease}`)?.checked ? "Y" : "N";
        reviewMessage += `${form.querySelector(`label[for=${disease}]`)?.textContent || disease}: ${checked}\n`;
    });

    
    const userID = form.querySelector("#userID")?.value || "(not provided)";
    reviewMessage += `User ID: ${userID}\n`;

    
    document.querySelector("#reviewContent").textContent = reviewMessage;
    document.querySelector("#reviewPopup").style.display = "block";
}

function validateDOB(dob) {
    
    return dob ? "valid" : "ERROR: Invalid DOB";
}

function validateEmail(email) {
    
    return email ? "valid" : "ERROR: Invalid Email";
}

function validatePhone(phone) {
    
    return phone ? "valid" : "ERROR: Invalid Phone";
}

function closePopup() {
    document.querySelector("#reviewPopup").style.display = "none";
}