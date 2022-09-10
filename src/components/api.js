import {config} from './utils.js';

// Получение данных профиля
const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => {
        if (res.ok){
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}   

//Получение карточек с сервера
const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'GET',
  headers: config.headers
})
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
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
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
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
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
}
//Удаление карточки с сервера
const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
  method: 'DELETE',
  headers: config.headers
})
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Поставить лайк на карточку
const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
  method: 'PUT',
  headers: config.headers
})
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Убрать лайк с карточки
const unlikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
  method: 'DELETE',
  headers: config.headers
})
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
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
  .then(res => {
      if (res.ok){
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export {getUserData, getCards, sendProfileData, addNewCard, deleteCard, likeCard, unlikeCard, changeProfileAvatar};