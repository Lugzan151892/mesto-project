class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    }).then(res => checkResult(res));
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    }).then(res => checkResult(res));
  }

  sendProfileData(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then(res => checkResult(res));
  }

  addNewCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(res => checkResult(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => checkResult(res));
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers
    }).then(res => checkResult(res));
  }

  unlikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => checkResult(res));
  }

  changeProfileAvatar(src) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: src,
      })
    }).then(res => checkResult(res));
  }
}

function checkResult(res) {
  if (res.ok){
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`); 
}

export {Api};