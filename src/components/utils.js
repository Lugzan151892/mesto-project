const profilePopup = document.querySelector('.popup'),
      placePopup = document.querySelector('.popup-place'),
      imagePopup = document.querySelector('.popup-image'),
      avatarPopup = document.querySelector('.popup-edit-avatar'),
      avatarPopupCloseButton = avatarPopup.querySelector('.popup__button'),
      profilePopupCloseButton = profilePopup.querySelector('.popup__button'),
      profileEditButton = document.querySelector('.profile__edit-btn'),
      profileFormElement = document.querySelector('.popup__form'),
      profileName = document.querySelector('.profile__name'),
      profileDescription = document.querySelector('.profile__description'),
      profileId = document.querySelector('.profile__id'),
      profileImage = document.querySelector('.profile__image'),
      profileImageEditButton = document.querySelector('.profile__image-edit'),
      nameInput = document.querySelector('#popup-name'),
      jobInput = document.querySelector('#popup-about'),
      cardsTemplate = document.querySelector('#place').content,
      cardsContainer = document.querySelector('.places'),
      imagePopupTitle = imagePopup.querySelector('.popup-image__title'),
      imagePopupImage = imagePopup.querySelector('.popup-image__image'),
      imagePopupCloseButton = imagePopup.querySelector('.popup__button'),
      placePopupCloseButton = placePopup.querySelector('.popup__button'),
      placeAddButton = document.querySelector('.profile__button'),
      placeFormElement = placePopup.querySelector('.popup__form'),
      avatarFormElement = document.querySelector('#popupAvatarForm'),
      placeName = document.querySelector('#popup-place-name'),
      placeImage = document.querySelector('#popup-link'),
      avatarImage = document.querySelector('#popup-avatar-link'),
      placePopupSubmit = document.querySelector('#popup-place-submit'),
      profilePopupSubmit = document.querySelector('#popup-profile-submit'),
      avatarPopupSubmit = document.querySelector('#popup-avatar-submit'),
      errorsCollection = document.querySelectorAll('.popup__input-error'),
      inputsCollection = document.querySelectorAll('.popup__input'),
      editForm = document.fonts.popupForm;

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: '0536b3c2-5810-4220-9c51-ca725c65cff7',
    'Content-Type': 'application/json'
  }
}

function renderLoading (isLoading, submitButton) {
  const defaultText = 'Сохранить';
  const loadingText = 'Сохранение ...';
  if (isLoading) {
    submitButton.value = loadingText;
  } else {
    submitButton.value = defaultText;
  }
}

export {profilePopup, placePopup, imagePopup, profilePopupCloseButton, profileEditButton, profileFormElement, profileName,
    profileDescription, nameInput, jobInput, cardsTemplate, cardsContainer, imagePopupTitle, imagePopupImage, imagePopupCloseButton,
    placePopupCloseButton, placeAddButton, placeFormElement, placeName, placeImage, editForm, placePopupSubmit, profileImage, config,
    profileId, avatarPopup, avatarPopupCloseButton, avatarImage, avatarFormElement, profilePopupSubmit, renderLoading, avatarPopupSubmit, profileImageEditButton,
    errorsCollection, inputsCollection};