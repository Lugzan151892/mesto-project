class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
    }

    open() {        
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close = () => {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {        
        if (evt.key === 'Escape') {
            this.close(this.popup);
        }
    }

    setEventListeners() {
        const closeButton = this.popup.querySelector('.popup__button');
        closeButton.addEventListener('click', ()=> {
            this.close();
        });
        document.addEventListener('mouseup', function(e){
            const click = e.composedPath();
            if (click[0].className.includes('popup_opened')) {
              this.close();
            }
          });
    }
}

class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._link = link;
        this._name = name;
        this._popupImage = this.popup.querySelector('.popup-image__image');
        this._popupDescription = this.popup.querySelector('.popup-image__title');
    }

    open() {
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupDescription.textContent = this._name;
        console.log('Hello');
        super.open();
    }
}

class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallBack) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
    }

    _getInputValues = () => {
        const inputList = this.popup.querySelectorAll('.popup__input');
        return inputList;
    }

    setEventListeners() {
        const closeButton = this.popup.querySelector('.popup__button');
        closeButton.addEventListener('click', this.close);
        document.addEventListener('mouseup', function(e){
            const click = e.composedPath();
            if (click[0].className.includes('popup_opened')) {
              this.close();
            }
          });
        const currentForm = this.popup.querySelector('.popup__form');
        currentForm.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            this._submitCallBack();
        });
        super.setEventListeners();
    }
}

export {Popup, PopupWithForm, PopupWithImage};
