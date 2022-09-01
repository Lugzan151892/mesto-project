import '../pages/index.css';
import {profileFormElement, placeFormElement, profilePopupCloseButton, placePopupCloseButton, placePopup, profilePopup, placeAddButton, placeName, placeImage, 
        imagePopupCloseButton, imagePopup, profileEditButton, nameInput, jobInput, profileName, profileDescription} from './utils.js';
import {submitProfileForm, submitFormAddPlace} from './modal.js';

const openClosePopup = (popup) => popup.classList.toggle('popup_opened');

profileFormElement.addEventListener('submit', submitProfileForm);

placeFormElement.addEventListener('submit', submitFormAddPlace);

profilePopupCloseButton.addEventListener('click', () => {
    openClosePopup(profilePopup);   
  });
  
  profileEditButton.addEventListener('click', () => {
    openClosePopup(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
  });
  
  placePopupCloseButton.addEventListener('click', () => {
    openClosePopup(placePopup);    
  });
  
  placeAddButton.addEventListener('click', () => {
    placeName.value = '';
    placeImage.value = '';
    openClosePopup(placePopup);
  });
  
  imagePopupCloseButton.addEventListener('click', () => {
    openClosePopup(imagePopup);    
  });

  export {openClosePopup};