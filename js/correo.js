const form = document.getElementById('form');
const btnSubmit = document.getElementById('submit');

const firstLastName = form.querySelector('.First-Last-Name');
const firstName = firstLastName.querySelector('label:nth-child(1) input[type="text"]');
const lastName = firstLastName.querySelector('label:nth-child(2) input[type="text"]');

const email = form.querySelector('.Email');
const valueEmail = email.querySelector('label input[type="email"]');

const queryType = form.querySelector('.Query-Type');
const queryTypeGeneral = form.querySelector('label label:nth-child(1) input[type="checkbox"]');
const queryTypeSupport = form.querySelector('label label:nth-child(2) input[type="checkbox"]');
const queryTypeSpan = queryType.querySelector('.Query-Type-span');

const message = form.querySelector('.Message');
const messageSpan = form.querySelector('.Message label > span');
const messageTextarea = form.querySelector('.Message label textarea');

const team = form.querySelector('.Team');
const teamSpan = team.querySelector('label > span');
const teamCheckend = team.querySelector('label div input[type="checkbox"]');

const modalMessage = document.getElementById('modal');

firstName.addEventListener('input', function(e) {
    let value = e.target.value;
    let regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
        e.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    }
});

lastName.addEventListener('input', function(e) {
    let value = e.target.value;
    let regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
        e.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    }
});

const verificarDatos = (e) => {
    e.preventDefault();
    const firstNameSpan = firstName.nextElementSibling;
    const lastNameSpan = lastName.nextElementSibling;
    const valueEmailSpan = valueEmail.nextElementSibling;

    let valid = true;

    if (!firstName.value.trim() || firstName.value.length < 5) {
        firstNameSpan.style.opacity = "1";
        valid = false;
    } else {
        firstNameSpan.style.opacity = "0";
    }

    if (!lastName.value.trim() || lastName.value.length < 5) {
        lastNameSpan.style.opacity = "1";
        valid = false;
    } else {
        lastNameSpan.style.opacity = "0";
    }

    const validarEmail = (email) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    if (!validarEmail(valueEmail.value)) {
        valueEmailSpan.style.opacity = "1";
        valid = false;
    } else {
        valueEmailSpan.style.opacity = "0";
    }

    if (queryTypeGeneral.checked || queryTypeSupport.checked) {
        queryTypeSpan.style.opacity = "0";
    } else {
        queryTypeSpan.style.opacity = "1";
        valid = false;
    }

    if (!messageTextarea.value.trim() || messageTextarea.value.length < 10) {
        messageSpan.style.opacity = "1";
        valid = false;
    } else {
        messageSpan.style.opacity = "0";
    }

    if (teamCheckend.checked) {
        teamSpan.style.opacity = "0";
    } else {
        teamSpan.style.opacity = "1";
        valid = false;
    }

    if (valid) {
        setTimeout(() => {
            modalMessage.style.opacity = "1";
            modalMessage.style.transform = "translate(-50%, -50%)";
        }, 10);
        setTimeout(() => {
            modalMessage.style.opacity = "0";
            setTimeout(() => {
                modalMessage.style.transform = "translate(-50%, -200%)"; 
            }, 300); 
        }, 3000); 
    }
};

btnSubmit.addEventListener('click', verificarDatos);
