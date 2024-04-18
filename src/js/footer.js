import { CreatePost } from './api';
//====================================================
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//====================================================

const form = document.querySelector('.form-work-together');
const textBoxModal = document.querySelector('.modal-text-box');
const modal = document.querySelector('[data-modal]');
const btnClose = document.querySelector('[data-modal-close]');
const bodyModal = document.querySelector('.modal');

//==================================================================
let data = {};
//====================================================

form.elements.email.addEventListener('input', handlerEmail);

function handlerEmail(evt) {
  const value = evt.currentTarget.value.trim();
  data.email = value;
}
//====================================================
form.elements.comments.addEventListener('input', handlerComments);

function handlerComments(evt) {
  const value = evt.currentTarget.value.trim();
  data.comment = value;
}
//====================================================
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  if (!data.email) {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      messageColor: 'black',
      message: 'Fill in the email field, please',
    });
    return;
  } else if (!data.comment) {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      messageColor: 'black',
      message: 'Fill in the comments field, please',
    });
    return;
  }
  CreatePost(data)
    .then(obj => {
      modal.classList.remove('is-hidden');
      const markup = modalTemplate(obj);
      textBoxModal.innerHTML = markup;
    })
    .catch(obj => {
      iziToast.show({
        position: 'topRight',
        color: 'red',
        messageColor: 'black',
        message: 'Not found',
      });
    });
  data = {};
  form.reset();
}
//==================================================================

function modalTemplate({ message, title }) {
  return `
        <h3 class="modal-title">
          ${title}
        </h3>
        <p class="modal-text">
          ${message}
        </p>
    `;
}
//==================================================================
btnClose.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
document.addEventListener('keydown', closeByEsc);

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    modal.classList.add('is-hidden');
    textBoxModal.innerHTML = '';
  }
}
function closeModal(evt) {
  if (evt.target === bodyModal) return;
  modal.classList.add('is-hidden');
  textBoxModal.innerHTML = '';
}
