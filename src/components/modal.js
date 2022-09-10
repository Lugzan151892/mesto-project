import {profileName, nameInput, profileDescription, jobInput, profilePopup, placePopup, placeName, placeImage, cardsContainer, profileId,
  avatarImage, profileImage, avatarPopup, profilePopupSubmit, placePopupSubmit, renderLoading, avatarPopupSubmit} from './utils.js';
import {closePopup} from './index.js';
import {addCard, createCard} from './card.js';
import {sendProfileData, addNewCard, changeProfileAvatar} from './api.js';

function submitProfileForm (evt) {
    evt.preventDefault();
    renderLoading(true, profilePopupSubmit);
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    sendProfileData(nameInput.value, jobInput.value)
    .then ((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
      })
    .finally(() => {
      renderLoading(false, profilePopupSubmit)
    });
    closePopup(profilePopup);
};

function submitFormAddPlace (evt) {
    evt.preventDefault();
    renderLoading(true, placePopupSubmit);    
    const newPlaceAdd = {};
    newPlaceAdd.name = placeName.value;
    newPlaceAdd.link = placeImage.value;
    newPlaceAdd.likes = [];
    newPlaceAdd.owner = {};
    newPlaceAdd.owner._id = profileId.textContent;
    addCard(cardsContainer, createCard(newPlaceAdd));
    addNewCard(placeName.value, placeImage.value)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, placePopupSubmit)
    })
    closePopup(placePopup);
};

function submitProfileAvatar (evt) {
  evt.preventDefault();
  renderLoading(true, avatarPopupSubmit);
  profileImage.src = avatarImage.value;  
  changeProfileAvatar(avatarImage.value)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, avatarPopupSubmit)
  })
  closePopup(avatarPopup);
};

export {submitFormAddPlace, submitProfileForm, submitProfileAvatar};