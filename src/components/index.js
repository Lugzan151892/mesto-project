import '../pages/index.css';

import {profilePopup, placePopup, imagePopup, profilePopupCloseButton, profileEditButton, profileFormElement, profileName,
  profileDescription, nameInput, jobInput, cardsContainer, imagePopupCloseButton, placePopupCloseButton, placeAddButton, placeFormElement, placeName, placeImage,
  placePopupSubmit, profileImage, profileId, avatarPopup, avatarPopupCloseButton, avatarImage, avatarFormElement, profilePopupSubmit, renderLoading, avatarPopupSubmit,
  profileImageEditButton, errorsCollection, inputsCollection} from './utils.js';
import {openPopup, closePopup} from './modal.js';
import {enableValidation, refreshForm, disableSubmitButton} from './validate.js';
import {getUserData, getCards, addNewCard, likeCard, unlikeCard, deleteCard, sendProfileData, Api} from './api.js';
import {Card} from './card.js';


const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: '0536b3c2-5810-4220-9c51-ca725c65cff7',
    'Content-Type': 'application/json'
  }
});


const editProfileData = () => {
  api.getUserData ()
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
    profileImage.src = res.avatar;
    profileId.textContent = res._id;
    renderInitialCards();
  })
  .catch((err) => {
    console.log(err);
  });
}

editProfileData();

const checkLikeOnCard = (boolean, cardData, likeInput) => {
  if (boolean) {
    api.likeCard(cardData._id)
    .then((res) => {
      likeInput.textContent = res.likes.length;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    api.unlikeCard(cardData._id)
    .then((res) => {
      likeInput.textContent = res.likes.length;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

const deleteYourCard = (cardData) => {
  api.deleteCard(cardData._id)
  .then((res) => {
    console.log(res);
    })
  .catch((err) => {
    console.log(err);
  });
}

const prependCard = (container, cardElement) => {
  container.prepend(cardElement);
};

const appendCard = (container, cardElement) => {
  container.append(cardElement);
};

const renderInitialCards = () => { 
  api.getCards()  
  .then((res) => {
    res.forEach((item) => {
      const card = new Card(item, '.places__template', checkLikeOnCard, handlerOpenImage, deleteYourCard);
      const cardElement = card.generate();
      appendCard(cardsContainer, cardElement);
      // appendCard(cardsContainer, createCard(item, checkLikeOnCard, deleteYourCard, handlerOpenImage)));
    })
  })
  .catch((err) => {
    console.log(err);
  })
};

const handlerOpenImage = (title, image, card, popup) => {
  title.textContent = card.name;
  image.alt = card.name;
  image.src = card.link;
  openPopup(popup);
}

function submitProfileForm (evt) {
  evt.preventDefault();
  renderLoading(true, profilePopupSubmit);
  api.sendProfileData(nameInput.value, jobInput.value)
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
  api.addNewCard(placeName.value, placeImage.value)
  .then((res) => {
    return res;
  })
  .then((res) => {
    const newPlaceAdd = {};
    newPlaceAdd.name = placeName.value;
    newPlaceAdd.link = placeImage.value;
    prependCard(cardsContainer, createCard(res, checkLikeOnCard, deleteYourCard, handlerOpenImage));
    closePopup(placePopup);
  })
  .catch((err) => {
    console.log(err);
  });
};

function submitProfileAvatar (evt) {
  evt.preventDefault();
  renderLoading(true, avatarPopupSubmit);
  api.changeProfileAvatar(avatarImage.value)
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

export {editProfileData, enableValidation, renderInitialCards, checkLikeOnCard, deleteYourCard, handlerOpenImage};