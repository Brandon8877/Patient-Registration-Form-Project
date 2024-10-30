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