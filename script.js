// document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     document.getElementById('formResponse').innerHTML = `
//         <p>Thank you, <strong>${name}</strong>. I will get back to you at <strong>${email}</strong>.</p>
//     `;

//     // Clear the form fields after submission
//     document.getElementById('contactForm').reset();
// });

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formResponse').innerHTML = '<p style="color: red;">Please fill in all fields.</p>';
        return;
    }

    // Display response
    document.getElementById('formResponse').innerHTML = `
        <p>Thank you, <strong>${name}</strong>. I will get back to you at <strong>${email}</strong> soon.</p>
    `;

    // Clear form fields
    document.getElementById('contactForm').reset();
});
