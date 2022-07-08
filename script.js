const profilePopup = document.querySelector('.popup-profile'),
      placePopup = document.querySelector('.popup-place'),
      imagePopup = document.querySelector('.popup-image'),
      profilePopupCloseButton = profilePopup.querySelector('.popup__button'),
      profileEditButton = document.querySelector('.profile__edit-btn'),
      profileFormElement = profilePopup.querySelector('.popup__form'),
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
      placeImage = document.querySelector('#popup-link');

// Массив карточек
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

//Функции открытия и закрытия popup:
const openClosePopup = (popup) => popup.classList.toggle('popup_opened');

// Функция отправки формы для редактирования профиля:
function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    openClosePopup(profilePopup);
}

//Функция создания новой карточки
const createCard = (cardData) => {
  const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
  const newPlaceImage = newPlace.querySelector('.place__image');
  newPlaceImage.src = cardData.link;
  newPlaceImage.alt = cardData.name;
  newPlace.querySelector('.place__title').textContent = cardData.name;
  const buttonLike = newPlace.querySelector('.place__like-btn');
  buttonLike.addEventListener("click", function (){ 
    buttonLike.classList.toggle("place__like-btn_active"); 
  });  
  // newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
  //   evt.target.classList.toggle("place__like-btn_active");
  // });

  newPlaceImage.addEventListener("click", function (){
    imagePopupTitle.textContent = cardData.name;
    imagePopupImage.alt = cardData.name;
    imagePopupImage.src = cardData.link;
    openClosePopup(imagePopup);
  });

  const cardDeleteButton = newPlace.querySelector('.place__delete-btn');
  cardDeleteButton.addEventListener("click", () => newPlace.remove());

  return newPlace;
}

const addCard = (container, cardElement) => {
  container.prepend(cardElement);
}

const renderingCards = () => { 
  initialCards.forEach(item => addCard(cardsContainer, createCard(item)));
};

renderingCards();

function submitFormAddPlace (evt) {
  evt.preventDefault();    
  const newPlaceAdd = {};
  newPlaceAdd.name = placeName.value;
  newPlaceAdd.link = placeImage.value;
  addCard(cardsContainer, createCard(newPlaceAdd));
  openClosePopup(placePopup);
};

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