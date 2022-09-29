class Section {
    constructor ({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem = (element) => {
        this._container.prepend(element);
    }

    renderCards = () => {
        // const renderElements = (isGrid) => {
        //     cardList.innerHTML = '';
        //     items.forEach((item) => {
        //       const card = isGrid
        //         ? new DefaultCard(item, '.default-card')
        //         : new HorizontalCard(item, '.horizontal-card');
          
        //       const cardElement = card.generate();
        //       cardList.append(cardElement);
        //     });
        //   };
    }
}