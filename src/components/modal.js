function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEsc);
// }

// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEsc);
// }

document.addEventListener('mouseup', function(e){
  const click = e.composedPath();
  if (click[0].className.includes('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'));
  }
});


export {closePopupEsc};