import {config} from './utils.js';

function checkResult(res) {
  if (res.ok){
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`); 
}

// Получение данных профиля
const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => checkResult(res));
}   

//Получение карточек с сервера
const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'GET',
  headers: config.headers
})
    .then(res => checkResult(res));
}

//Отправка отредактированных данных профиля на сервер
const sendProfileData = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about
  })
})
    .then(res => checkResult(res));
}

//Добавление новой карточки
const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'POST',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    link: link
  })
})
    .then(res => checkResult(res));
}
//Удаление карточки с сервера
const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
  method: 'DELETE',
  headers: config.headers
})
    .then(res => checkResult(res));
}

// Поставить лайк на карточку
const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
  method: 'PUT',
  headers: config.headers
})
    .then(res => checkResult(res));
}

// Убрать лайк с карточки
const unlikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
  method: 'DELETE',
  headers: config.headers
})
    .then(res => checkResult(res));
}

// Смена аватара профиля
const changeProfileAvatar = (src) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    avatar: src,
  })
})
    .then(res => checkResult(res));
}

export {getUserData, getCards, sendProfileData, addNewCard, deleteCard, likeCard, unlikeCard, changeProfileAvatar};