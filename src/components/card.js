import {cardsTemplate, cardsContainer, imagePopupTitle, imagePopupImage, imagePopup, profileId} from './utils.js';
import {openPopup} from './index.js';
import {getCards, deleteCard, likeCard, unlikeCard} from './api.js';

const createCard = (cardData) => {
    const newPlace = cardsTemplate.querySelector('.place').cloneNode(true);
    const newPlaceImage = newPlace.querySelector('.place__image');
    const cardDeleteButton = newPlace.querySelector('.place__delete-btn');
    const likesCounter = newPlace.querySelector('.place__like-counter');
    newPlaceImage.src = cardData.link;
    newPlaceImage.alt = cardData.name;
    newPlace.querySelector('.place__title').textContent = cardData.name;
    likesCounter.textContent = cardData.likes.length;
    
    if (cardData.owner._id != profileId.textContent) {
      cardDeleteButton.setAttribute('disabled', false);
      cardDeleteButton.classList.add('place__delete-btn_inactive')
    }

    const myID = profileId.textContent;

    if (cardData.likes.some((item) => item._id == myID)) {
      newPlace.querySelector('.place__like-btn').classList.add('place__like-btn_active');
    }

    newPlace.querySelector('.place__like-btn').addEventListener("click", function (evt){
      evt.target.classList.toggle("place__like-btn_active");
      if (evt.target.classList.contains('place__like-btn_active')) {
        likeCard(cardData._id)
        .then((res) => {
          likesCounter.textContent = res.likes.length;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        unlikeCard(cardData._id)
        .then((res) => {
          likesCounter.textContent = res.likes.length;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
      deleteCard(cardData._id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  
    return newPlace;
};

const addCard = (container, cardElement) => {
  container.prepend(cardElement);
};

const renderingCards = () => { 
    getCards()
    .then((res) => {
      res.forEach(item => addCard(cardsContainer, createCard(item)));
    })
    .catch((err) => {
      console.log(err);
    });
};

renderingCards();

export {addCard, createCard};