const profilePopup = document.querySelector('.popup'),
      placePopup = document.querySelector('.popup-place'),
      imagePopup = document.querySelector('.popup-image'),
      profilePopupCloseButton = profilePopup.querySelector('.popup__button'),
      profileEditButton = document.querySelector('.profile__edit-btn'),
      profileFormElement = document.querySelector('.popup__form'),
      profileName = document.querySelector('.profile__name'),
      profileDescription = document.querySelector('.profile__description'),
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
      placeName = document.querySelector('#popup-place-name'),
      placeImage = document.querySelector('#popup-link'),
      editForm = document.fonts.popupForm;

const initialCards = [
        {
          name: 'Архыз',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
          likeStatus: ''
        },
        {
          name: 'Челябинская область',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
          likeStatus: ''
        },
        {
          name: 'Иваново',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
          likeStatus: ''
        },
        {
          name: 'Камчатка',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          likeStatus: ''
        },
        {
          name: 'Холмогорский район',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
          likeStatus: ''
        },
        {
          name: 'Байкал',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
          likeStatus: ''
        }
      ];

export {initialCards, profilePopup, placePopup, imagePopup, profilePopupCloseButton, profileEditButton, profileFormElement,profileName,
    profileDescription, nameInput, jobInput, cardsTemplate, cardsContainer, imagePopupTitle, imagePopupImage, imagePopupCloseButton,
    placePopupCloseButton, placeAddButton, placeFormElement, placeName, placeImage, editForm};