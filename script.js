function validateForm() {
    // Validate phone number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    // Validate age
    const age = document.getElementById('age').value;
    if (age < 0 || age > 120) {
        alert('Please enter a valid age between 0 and 120.');
        return false;
    }

    // Validate date
    const preferredDate = document.getElementById('preferredDate').value;
    const today = new Date().toISOString().split('T')[0];
    if (preferredDate < today) {
        alert('Preferred consultation date cannot be in the past.');
        return false;
    }

    // If all validations pass, show success message
    alert('Medical consultation booked successfully!');

    // Optionally, you can clear the form or redirect to another page
    // document.getElementById('consultationForm').reset(); // Uncomment to reset the form
    // window.location.href = 'thank-you.html'; // Uncomment to redirect to a thank you page

    return false; // Prevents the default form submission; remove if backend integration is used
}



