const form = document.querySelector('form');
const errorField = document.getElementById('errorField');

form.addEventListener('submit', e => {
    const target = e.target;
    const email = target[0];
    const country = target[1];
    const zipcode = target[2];
    const password = target[3];
    const password2 = target[4];
    const inputs = [email, country, zipcode, password, password2];

    inputs.forEach(input => {
        isEmpty(input);
    });
    
    match(password, password2);
    lengthCheck(password);
    typeCheck(email);

    inputs.forEach(input => {
        if (!input.validity.valid) {
            e.preventDefault();
        }
    });
});

function isEmpty(input) {
    if (input.validity.valueMissing) {
        errorField.textContent += `${input.id} missing. `;
        input.validity.valid = false;
    } else {
        input.validity.valid = true;
    }
}

function match(val1, val2) {
    if (val1 != val2) {
        errorField.textContent += `${val1.is}s don't match. `;
        val1.validity.valid = false;
        val2.validity.valid = false;
    } else {
        val1.validity.valid = true;
        val2.validity.valid = true;
    }
}

function lengthCheck(input) {
    if (input.validity.tooShort) {
        errorField.textContent += `${input.id} is too short. `;
        input.validity.valid = false;
    } else {
        input.validity.valid = true;
    }
}

function typeCheck(input) {
    if (input.validity.typeMismatch) {
        errorField.textContent += `${input.id} is not in the right format. `;
        input.validity.valid = false;
    } else {
        input.validity.valid = true;
    }
}