import { CreatePost } from './api';
//====================================================
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//====================================================

const form = document.querySelector('.form-work-together');
//====================================================

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
  data.comments = value;
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
  } else if (!data.comments) {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      messageColor: 'black',
      message: 'Fill in the comments field, please',
    });
    return;
  }
  CreatePost(data);
  form.reset();
}
