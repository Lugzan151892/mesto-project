// enableValidation({
//   formSelector: '.popup__inputs',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_inactive',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active'
// });

export default class FormValidator {
  constructor (data, formElement) {
    this.formSelector = data.formSelector;
    this.inputSelector = data.inputSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.inactiveButtonClass = data.inactiveButtonClass;
    this.inputErrorClass = data.inputErrorClass;
    this.errorClass = data.errorClass;
    this.formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage) => {
    const formError = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this.errorClass);
  }
  
  _hideInputError = (inputElement) => {
    const formError = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    formError.textContent = "";
    formError.classList.remove(this.errorClass);
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
  _toggleButtonState = (inputList, buttonElement) => {
    if (_hasInvalidInput(inputList)) {
      buttonElement.classList.add(this.inactiveButtonClass);
      buttonElement.setAttribute('disabled', false);
    } else {
      buttonElement.classList.remove(this.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  } 

  _isValid = (inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
  
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners = () => {
    const inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    const buttonElement = this.formElement.querySelector(this.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation = () => {
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

// const showInputError = (formElement, inputElement, errorMessage, obj) => {
//   const formError = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(obj.inputErrorClass);
//   formError.textContent = errorMessage;
//   formError.classList.add(obj.errorClass);
// };

// const hideInputError = (formElement, inputElement, obj) => {
//   const formError = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(obj.inputErrorClass);
//   formError.textContent = "";
//   formError.classList.remove(obj.errorClass);
// };

// const isValid = (formElement, inputElement, obj) => {
//   if (inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage);
//   } else {
//     inputElement.setCustomValidity("");
//   }

//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, obj);
//   } else {
//     hideInputError(formElement, inputElement, obj);
//   }
// }; 

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };

// const toggleButtonState = (inputList, buttonElement, obj) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(obj.inactiveButtonClass);
//     buttonElement.setAttribute('disabled', false);
//   } else {
//     buttonElement.classList.remove(obj.inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// }; 

// const setEventListeners = (formElement, obj) => {
//   const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
//   const buttonElement = formElement.querySelector(obj.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, obj);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement, obj);
//       toggleButtonState(inputList, buttonElement, obj);
//     });
//   });
// };

// const enableValidation = (obj) => {
//   const formList = Array.from(document.querySelectorAll(obj.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, obj);
//   });
// };

function refreshForm (errorsArray, inputsArray) {
  errorsArray.forEach((errorSpan) => {
    errorSpan.textContent = '';
  })
  inputsArray.forEach((errorClass) => {
    errorClass.classList.remove('popup__input_type_error');
  })
}

function disableSubmitButton (submitButton) {
  submitButton.setAttribute('disabled', false);
  submitButton.classList.add('popup__submit_inactive');
}

export {FormValidator, refreshForm, disableSubmitButton};