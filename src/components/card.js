import {imagePopup, cardsTemplate, imagePopupTitle, imagePopupImage, profileId} from './utils.js';

//Удалил импорты из api.js, в функцию createCard передаю только функции из index.js

const createCard = (cardData, handlerLikeCheck, handlerDeleteButton, handlerOpenImage) => {
    const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
    const newPlaceImage = newPlace.querySelector('.place__image');
    const cardDeleteButton = newPlace.querySelector('.place__delete-btn');
    const likesCounter = newPlace.querySelector('.place__like-counter');
    newPlaceImage.alt = cardData.name;
    newPlaceImage.src = cardData.link;
    newPlace.querySelector('.place__title').textContent = cardData.name;
    likesCounter.textContent = cardData.likes.length;    

    if (!(cardData.owner._id === profileId.textContent)) {
      cardDeleteButton.setAttribute('disabled', false);
      cardDeleteButton.classList.add('place__delete-btn_inactive')
    }

    if (cardData.likes.some((item) => item._id === profileId.textContent)) {
      newPlace.querySelector('.place__like-btn').classList.add('place__like-btn_active');
    }

    newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
      evt.target.classList.toggle("place__like-btn_active");
      if (evt.target.classList.contains('place__like-btn_active')) {        
        handlerLikeCheck(true, cardData, likesCounter);
      } else {        
        handlerLikeCheck(false, cardData, likesCounter)
      }
    });

    newPlaceImage.addEventListener("click", () => {
      handlerOpenImage(imagePopupTitle, imagePopupImage, cardData, imagePopup);      
    });
  
    cardDeleteButton.addEventListener("click", () => {
      newPlace.remove();
      handlerDeleteButton(cardData);
    });
  
    return newPlace;
};

export {createCard};