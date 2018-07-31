import request from 'request';
import Promise from 'bluebird';
import config from '../config';

const req = function (endpoint, method, data) {
    return new Promise(async function (resolve, reject) {
        const options = {
            'method': method || 'GET',
            'url': 'https://api.giphy.com/v1/' + endpoint + '&api_key=' + config.giphy.key,
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        // console.log(options. url);
        request(options, function (err, response, body) {
            if (err) return reject(err);
            return resolve(body);
        });
    });
};

export default {
    search: function (q, offset = '', rating = '') {
        return new Promise(async function (resolve, reject) {
            try {
                const data = req('gifs/search?q=' + q + '&offset=' + offset + '&rating=' + rating);
                return resolve(data);
            } catch (e) {
                return reject(e);
            }
        });
    }
}