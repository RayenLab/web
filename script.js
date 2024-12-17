document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const id = document.getElementById("id").value;

    // Simple Validation
    if (name && email && id) {
        document.getElementById("responseMessage").innerText = "Your information has been submitted!";
        console.log("Name:", name, "Email:", email, "Passport Number:", id);
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields!";
    }
});
