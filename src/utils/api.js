import { config } from './config';

class Api {
    constructor({ url, token }) {
        this._url = url;
        // this._token = token;
    }

    getPosts() {
        return fetch(`${this._url}/posts`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }

    getMeInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }

    updateUserInfo() {
        return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Сергей Сапелко',
            about: ''
        })
        });
    }
}

export default new Api(config);
