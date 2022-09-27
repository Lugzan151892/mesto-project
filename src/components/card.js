import {imagePopup, cardsTemplate, imagePopupTitle, imagePopupImage, profileId} from './utils.js';

//Удалил импорты из api.js, в функцию createCard передаю только функции из index.js

class Card {
  constructor(cardData, selector, handlerLikeCheck, handlerOpenImage, handlerDeleteButton) {
    // super(props);
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._selector = selector;
    this._likes = cardData.likes;
    this._owner = cardData.owner._id;
    this._handlerLikeCheck = handlerLikeCheck;
    this._handlerOpenImage = handlerOpenImage;
    this._handlerDeleteButton = handlerDeleteButton;
  }

  _setEventListeners() {  
    this._element.querySelector('.place__like-btn').addEventListener("click", function (evt){
      evt.target.classList.toggle("place__like-btn_active");
      if (evt.target.classList.contains('place__like-btn_active')) {        
        this._handlerLikeCheck(true, this._cardData, this._likesCounter);
      } else {        
        this._handlerLikeCheck(false, this._cardData, this._likesCounter)
      }
    });

    this._element.querySelector('.place__image').addEventListener("click", () => {
      this._handlerOpenImage(imagePopupTitle, imagePopupImage, this._cardData, imagePopup);      
    });

    this._element.querySelector('.place__delete-btn').addEventListener("click", () => {
      this._element.remove();
      this._handlerDeleteButton(this._cardData);
    });
  }

  _getElement() {
    const newPlace = document
    .querySelector(this._selector)
    .content
    .querySelector('.place')
    .cloneNode(true);
    return newPlace;
  }

  generate() {
    this._element = this._getElement();
    this._likesCounter = this._element.querySelector('.place__like-counter');
    this._element.querySelector('.place__image').alt = this._name;
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__title').textContent = this._name;
    this._element.querySelector('.place__like-counter').textContent = this._likes.length;
    if (!(this._owner === profileId.textContent)) {
      this._element.querySelector('.place__delete-btn').setAttribute('disabled', false);
      this._element.querySelector('.place__delete-btn').classList.add('place__delete-btn_inactive');
    }
    if (this._likes.some((item) => item._id === profileId.textContent)) {
      this._element.querySelector('.place__like-btn').classList.add('place__like-btn_active');
    }
    this._setEventListeners();
    return this._element;
  }
  
}


// const createCard = (cardData, handlerLikeCheck, handlerDeleteButton, handlerOpenImage) => {
//     // const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
//     const newPlaceImage = newPlace.querySelector('.place__image');
//     const cardDeleteButton = newPlace.querySelector('.place__delete-btn');
//     // const likesCounter = newPlace.querySelector('.place__like-counter');
//     // newPlaceImage.alt = cardData.name;
//     // newPlaceImage.src = cardData.link;
//     // newPlace.querySelector('.place__title').textContent = cardData.name;
//     // likesCounter.textContent = cardData.likes.length;    

//     // if (!(cardData.owner._id === profileId.textContent)) {
//     //   cardDeleteButton.setAttribute('disabled', false);
//     //   cardDeleteButton.classList.add('place__delete-btn_inactive')
//     // }

//     // if (cardData.likes.some((item) => item._id === profileId.textContent)) {
//     //   newPlace.querySelector('.place__like-btn').classList.add('place__like-btn_active');
//     // }

//     // newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
//     //   evt.target.classList.toggle("place__like-btn_active");
//     //   if (evt.target.classList.contains('place__like-btn_active')) {        
//     //     handlerLikeCheck(true, cardData, likesCounter);
//     //   } else {        
//     //     handlerLikeCheck(false, cardData, likesCounter)
//     //   }
//     // });

//     // newPlaceImage.addEventListener("click", () => {
//     //   handlerOpenImage(imagePopupTitle, imagePopupImage, cardData, imagePopup);      
//     // });
  
//     // cardDeleteButton.addEventListener("click", () => {
//     //   newPlace.remove();
//     //   handlerDeleteButton(cardData);
//     // });
  
//     // return newPlace;
// };

export {Card};