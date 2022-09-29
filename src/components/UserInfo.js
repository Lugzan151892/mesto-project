class UserInfo {
    constructor ({id = '', nameSelector, descriptionSelector, avatarSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
        this._avatarElement = document.querySelector(avatarSelector)
        this._user = {
            _id: id,
            name: this._nameSelector.textContent,
            about: this._descriptionSelector.textContent,
            avatar: this._avatarElement.src
        }
    }

    getUserInfo() {
        return this._user;
    }

    setUserInfo(_id, name, about, avatar) {
        if (_id) {
            this._user._id = _id;
        }
        if (name) {
            this._user.name = name;
        }
        if (about) {
            this._user.about = about;
        }
        if (avatar) {
            this._user.avatar = avatar;
        }
    }
}