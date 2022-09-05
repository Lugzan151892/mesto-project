import {profileName, nameInput, profileDescription, jobInput, profilePopup, placePopup, placeName, placeImage, cardsContainer, placeFormElement} from './utils.js';
import {closePopup} from './index.js';
import {addCard, createCard} from './card.js';

function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(profilePopup);
};

function submitFormAddPlace (evt) {
    evt.preventDefault();    
    const newPlaceAdd = {};
    newPlaceAdd.name = placeName.value;
    newPlaceAdd.link = placeImage.value;
    addCard(cardsContainer, createCard(newPlaceAdd));
    placeFormElement.reset();
    closePopup(placePopup);
};

export {submitFormAddPlace, submitProfileForm};