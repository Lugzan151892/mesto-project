import '../pages/index.css';

import {profilePopup, placePopup, imagePopup, profilePopupCloseButton, profileEditButton, profileFormElement, profileName,
  profileDescription, nameInput, jobInput, cardsContainer, imagePopupCloseButton, placePopupCloseButton, placeAddButton, placeFormElement, placeName, placeImage,
  placePopupSubmit, profileImage, profileId, avatarPopup, avatarPopupCloseButton, avatarImage, avatarFormElement, profilePopupSubmit, renderLoading, avatarPopupSubmit,
  profileImageEditButton, errorsCollection, inputsCollection} from './utils.js';
import {openPopup, closePopup} from './modal.js';
import {enableValidation, refreshForm, disableSubmitButton} from './validate.js';
import {getUserData, getCards, addNewCard, likeCard, unlikeCard, deleteCard} from './api.js';
import {createCard} from './card.js';

const editProfileData = () => {
  getUserData ()
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
    profileImage.src = res.avatar;
    profileId.textContent = res._id;
  })
  .catch((err) => {
    console.log(err);
  });
}

let id;

function isMyId (compare) {
  getUserData()
  .then((data) => {
    id = data._id;
  })

  if (compare === id) {
    return true;
  } else {
    return false;
  }
}

getUserData()
.then(res => console.log(res))

function checkLikeOnCard (boolean, cardData, likeInput) {
  if (boolean) {
    likeCard(cardData._id)
    .then((res) => {
      likeInput.textContent = res.likes.length;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    unlikeCard(cardData._id)
    .then((res) => {
      likeInput.textContent = res.likes.length;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

function deleteYourCard (cardData) {
  deleteCard(cardData._id)
  .then((res) => {
    console.log(res);
    })
  .catch((err) => {
    console.log(err);
  });
}

editProfileData();

const addCard = (container, cardElement) => {
  container.prepend(cardElement);
};

const addCardOnDom = (container, cardElement) => {
  container.append(cardElement);
};

const renderingCards = () => { 
  getCards()
  .then((res) => {
    res.forEach(item => addCardOnDom(cardsContainer, createCard(item)));
  })
  .catch((err) => {
    console.log(err);
  });
};

function submitProfileForm (evt) {
  evt.preventDefault();
  renderLoading(true, profilePopupSubmit);
  sendProfileData(nameInput.value, jobInput.value)
  .then ((res) => {
      profileName.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      console.log(res);
      closePopup(profilePopup);
  })
  .catch((err) => {
      console.log(err);
    })
  .finally(() => {
    renderLoading(false, profilePopupSubmit)
  });
};

function submitFormAddPlace (evt) {
  evt.preventDefault();
  renderLoading(true, placePopupSubmit);    
  addNewCard(placeName.value, placeImage.value)
  .then((res) => {
    return res;
  })
  .then((res) => {
    const newPlaceAdd = {};
    newPlaceAdd.name = placeName.value;
    newPlaceAdd.link = placeImage.value;
    addCard(cardsContainer, createCard(res));
    closePopup(placePopup);
  })
  .catch((err) => {
    console.log(err);
  });
};

function submitProfileAvatar (evt) {
  evt.preventDefault();
  renderLoading(true, avatarPopupSubmit);
  changeProfileAvatar(avatarImage.value)
  .then((res) => {
    profileImage.src = avatarImage.value; 
    console.log(res);
    closePopup(avatarPopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, avatarPopupSubmit)
  })
};

profileFormElement.addEventListener('submit', submitProfileForm);

placeFormElement.addEventListener('submit', submitFormAddPlace);

profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));
  
profileEditButton.addEventListener('click', () => {
  refreshForm(errorsCollection, inputsCollection);
  renderLoading(false, profilePopupSubmit);
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});
  
placePopupCloseButton.addEventListener('click', () => closePopup(placePopup));
  
placeAddButton.addEventListener('click', () => {
  refreshForm(errorsCollection, inputsCollection);
  renderLoading(false, placePopupSubmit);
  placeName.value = '';
  placeImage.value = '';
  openPopup(placePopup);
  disableSubmitButton(placePopupSubmit);
});

profileImageEditButton.addEventListener('click', () => {
  refreshForm(errorsCollection, inputsCollection);
  renderLoading(false, avatarPopupSubmit);
  openPopup(avatarPopup);
});
avatarPopupCloseButton.addEventListener('click', () => closePopup(avatarPopup));
  
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

avatarFormElement.addEventListener('submit', submitProfileAvatar);

enableValidation({
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

renderingCards();

export {addCard, addCardOnDom, editProfileData, enableValidation, renderingCards, checkLikeOnCard, deleteYourCard, isMyId};