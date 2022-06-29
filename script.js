// 1. Popup Редактирования профиля.
// Переменные для popup с редактированием профиля.
const popup = document.querySelector('.popup'),
    popupCloseButton = popup.querySelector('.popup__button'),
    profileEditButton = document.querySelector('.profile__edit-btn'),
    formElement = document.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name'),
    profileDescription = document.querySelector('.profile__description'),
    nameInput = document.querySelector('#popup-name'),
    jobInput = document.querySelector('#popup-about');

// Функция отправки формы для редактирования профиля.

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

popupCloseButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');    
});

profileEditButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
});

// 2. Popup добавления новой карточки

const popupPlace = document.querySelector('.popup-place'),
    popupPlaceCloseButton = popupPlace.querySelector('.popup-place__button'),
    placeAddButton = document.querySelector('.profile__button'),
    placeFormElement = document.querySelector('.popup-place__form'),
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

popupPlaceCloseButton.addEventListener('click', () => {
    popupPlace.classList.remove('popup-place_opened');    
});

placeAddButton.addEventListener('click', () => {
    popupPlace.classList.add('popup-place_opened');
});

const cardsTemplate = document.querySelector('#place').content;
const places = document.querySelector('.places');
const popupImg = document.querySelector('.popup-place-img'),
      popupImgTitle = popupImg.querySelector('.popup-place-img__title'),
      popupImgImage = popupImg.querySelector('.popup-place-img__image'),
      popupImgCloseButton = popupImg.querySelector('.popup-place-img__button');

//Функция создания новой карточки

const createCard = (name, link) => {
  const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
  newPlace.querySelector('.place__image').src = link;
  newPlace.querySelector('.place__image').alt = name;
  newPlace.querySelector('.place__title').textContent = name;
  newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
    evt.target.classList.toggle("place__like-btn_active");
  });

  newPlace.querySelector('.place__image').addEventListener("click", function (){
    popupImgTitle.textContent = name;
    popupImgImage.alt = name;
    popupImgImage.src = link;
    popupImg.classList.add('popup-place-img_opened');
  });

  const deleteButton = newPlace.querySelector('.place__delete-btn');
  deleteButton.addEventListener("click", function (){
    const currentCard = deleteButton.closest('.place');
    currentCard.remove();
  });

  return newPlace;
}

const addCard = (container, cardElement) => {
  container.prepend(cardElement);
}

const cardsRendering = () => {
  for (i = 0; i < initialCards.length; i++) {
    addCard(places, createCard(initialCards[i].name, initialCards[i].link));
  };
};

cardsRendering();

function formSubmitAddPlace (evt) {
  evt.preventDefault();    
  const newPlaceAdd = {};
  newPlaceAdd.name = placeName.value;
  newPlaceAdd.link = placeImage.value;
  initialCards.unshift(newPlaceAdd);
  addCard(places, createCard(initialCards[0].name, initialCards[0].link));
  popupPlace.classList.remove('popup-place_opened');
};

placeFormElement.addEventListener('submit', formSubmitAddPlace);

// Закрытие попапа с картинкой:

popupImgCloseButton.addEventListener('click', () => {
  popupImg.classList.remove('popup-place-img_opened');    
});
