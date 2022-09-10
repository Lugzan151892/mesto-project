import {imagePopup, cardsTemplate, imagePopupTitle, imagePopupImage} from './utils.js';
import {openPopup} from './modal.js';
import {checkLikeOnCard, deleteYourCard, isMyId} from './index.js';

//Удалил импорты из api.js, в функцию createCard передаю только функции из index.js

const createCard = (cardData) => {
    const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
    const newPlaceImage = newPlace.querySelector('.place__image');
    const cardDeleteButton = newPlace.querySelector('.place__delete-btn');
    const likesCounter = newPlace.querySelector('.place__like-counter');
    newPlaceImage.alt = cardData.name;
    newPlaceImage.src = cardData.link;
    newPlace.querySelector('.place__title').textContent = cardData.name;
    likesCounter.textContent = cardData.likes.length;
    
    // const myID = profileId.textContent;
    if (!isMyId(cardData.owner._id)) {
      cardDeleteButton.setAttribute('disabled', false);
      cardDeleteButton.classList.add('place__delete-btn_inactive')
    }

    if (cardData.likes.some((item) => isMyId(item._id))) {
      newPlace.querySelector('.place__like-btn').classList.add('place__like-btn_active');
    }

    newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
      evt.target.classList.toggle("place__like-btn_active");
      if (evt.target.classList.contains('place__like-btn_active')) {
        checkLikeOnCard(true, cardData, likesCounter);
      } else {
        checkLikeOnCard(false, cardData, likesCounter)
      }
    });
  
    newPlaceImage.addEventListener("click", function (){
      imagePopupTitle.textContent = cardData.name;
      imagePopupImage.alt = cardData.name;
      imagePopupImage.src = cardData.link;
      openPopup(imagePopup);
    });
  
    cardDeleteButton.addEventListener("click", () => {
      newPlace.remove();
      deleteYourCard(cardData);
    });
  
    return newPlace;
};

export {createCard};