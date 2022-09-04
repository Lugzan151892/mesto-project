import {cardsTemplate, cardsContainer, imagePopupTitle, imagePopupImage, imagePopup, initialCards} from './utils.js';
import {openPopup} from './index.js';

const createCard = (cardData) => {
    const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
    const newPlaceImage = newPlace.querySelector('.place__image');
    newPlaceImage.src = cardData.link;
    newPlaceImage.alt = cardData.name;
    newPlace.querySelector('.place__title').textContent = cardData.name;
    newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
      evt.target.classList.toggle("place__like-btn_active");
    });
  
    newPlaceImage.addEventListener("click", function (){
      imagePopupTitle.textContent = cardData.name;
      imagePopupImage.alt = cardData.name;
      imagePopupImage.src = cardData.link;
      openPopup(imagePopup);
    });
  
    const cardDeleteButton = newPlace.querySelector('.place__delete-btn');
    cardDeleteButton.addEventListener("click", () => newPlace.remove());
  
    return newPlace;
};

const addCard = (container, cardElement) => {
    container.prepend(cardElement);
};

const renderingCards = () => { 
    initialCards.forEach(item => addCard(cardsContainer, createCard(item)));
};

renderingCards();

export {addCard, createCard};