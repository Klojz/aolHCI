document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let valid = true;

        const name = document.querySelector('#name');
        if (name.value.trim() === '') {
            valid = false;
            alert('Name is required.');
        }

        const email = document.querySelector('#email');
        if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
            valid = false;
            alert('Enter a valid email.');
        }

        const password = document.querySelector('#password');
        if (password.value.length < 8) {
            valid = false;
            alert('Password must be at least 8 characters long.');
        }

        const age = document.querySelector('#age');
        if (isNaN(age.value) || age.value <= 0) {
            valid = false;
            alert('Enter a valid age.');
        }

        const gender = document.querySelectorAll('input[name="gender"]');
        let genderSelected = false;
        gender.forEach(g => {
            if (g.checked) {
                genderSelected = true;
            }
        });
        if (!genderSelected) {
            valid = false;
            alert('Please select a gender.');
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
