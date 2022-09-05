import '../pages/index.css';
import './card.js';
import './modal.js';
import './utils.js';
import './validate.js';
import {profileFormElement, placeFormElement, profilePopupCloseButton, placePopupCloseButton, placePopup, profilePopup, placeAddButton, placeName, placeImage, 
        imagePopupCloseButton, imagePopup, profileEditButton, nameInput, jobInput, profileName, profileDescription, placePopupSubmit} from './utils.js';
import {submitProfileForm, submitFormAddPlace} from './modal.js';
import {enableValidation} from './validate.js';

function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

document.addEventListener('mouseup', function(e){
  const click = e.composedPath();
  if (click[0].className.includes('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'));
  }
});

profileFormElement.addEventListener('submit', submitProfileForm);

placeFormElement.addEventListener('submit', submitFormAddPlace);

profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));
  
profileEditButton.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});
  
placePopupCloseButton.addEventListener('click', () => closePopup(placePopup));
  
placeAddButton.addEventListener('click', () => {
  placeName.value = '';
  placeImage.value = '';
  openPopup(placePopup);
  placePopupSubmit.setAttribute('disabled', false);
  placePopupSubmit.classList.add('popup__submit_inactive');
});
  
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

enableValidation({
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 

export {openPopup, closePopup};