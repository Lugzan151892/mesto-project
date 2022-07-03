# Проект: Mesto

## Описание проекта:

Будущая соцсеть для фотографий и общения, полностью адаптивен под любые устройства.
Создан при помощи:
1. HTML
2. CSS
3. В дальнейшем будет добавлен функционал на Javascript

### Ссылка на проект:
https://lugzan151892.github.io/mesto-project/

#### Инструкция:

Проект оформлен на русском языке, соответствует современным стандартам верстки, доступен в любых устройствах и браузерах.

<section class="popup">
        <div class="popup__window">            
            <form name="popup-form" class="popup__form">
                <h2 class="popup__title">Редактировать профиль</h2>
                <fieldset class="popup__inputs">
                    <input class="popup__input" type="text" id="popup-name" name="name" placeholder="Имя">
                    <input class="popup__input" type="text" id="popup-about" name="about" placeholder="О себе">
                    <input type="submit" class="popup__submit" value="Сохранить">
                </fieldset>
                <button class="popup__button" aria-label="Кнопка закрыть" type="button">
                    <img src="./blocks/popup/images/popup__close-icon.svg" alt="Кнопка закрыть" class="popup__close-icon">
                </button>
            </form>
        </div>
    </section>
    <section class="popup-place">
        <div class="popup-place__window">            
            <form name="popup-place-form" class="popup-place__form">
                <h2 class="popup-place__title">Новое место</h2>
                <fieldset class="popup-place__inputs">
                    <input class="popup-place__input" type="text" id="popup-place-name" name="name" placeholder="Название">
                    <input class="popup-place__input" type="url" id="popup-link" name="link" placeholder="Ссылка на картинку">
                    <input type="submit" class="popup-place__submit" value="Создать">
                </fieldset>
                <button class="popup-place__button" aria-label="Кнопка закрыть" type="button">
                    <img src="./blocks/popup/images/popup__close-icon.svg" alt="Кнопка закрыть" class="popup-place__close-icon">
                </button>
            </form>
        </div>
    </section>
    <section class="popup-place-img">
        <div class="popup-place-img__window">            
            <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="" class="popup-place-img__image">
            <h2 class="popup-place-img__title"></h2>
            <button class="popup-place-img__button" aria-label="Кнопка закрыть" type="button">
                <img src="./blocks/popup/images/popup__close-icon.svg" alt="Кнопка закрыть" class="popup-place-img__close-icon">
            </button>
        </div>
    </section>