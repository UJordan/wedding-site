const modalForm = document.querySelector('#modal-form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');

modalForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
}