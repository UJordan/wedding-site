const modalForm = document.querySelector('#modal-form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const msg = document.querySelector('.msg');

modalForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    // if(firstNameInput.value === '' || lastNameInput.value === '') {
    //     msg.classList.add('error')
    //     msg.innerHMTL = 'Please enter all fields';
    // } else {
    //     console.log('success');
    // }

    console.log(firstNameInput.value, lastNameInput.value);
}