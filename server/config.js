const env = process.env.NODE_ENV;

const dev = {
    "server": {
        "port": 5000
    },
    "giphy": {
        "key": "7zJ0dnWtfqSLH4Qj0Oz1jPwoUyjehlxz"
    },
    "morgan": "dev",
    "origin": [
        "http://localhost:3000"
    ],
    "mongo": {
        "url": "mongodb://localhost:27017/giphyapp",
        "properties": {
            "useNewUrlParser": true
        }
    }
};
const production = {
    "server": {
        "port": 5000
    },
    "giphy": {
        "key": "7zJ0dnWtfqSLH4Qj0Oz1jPwoUyjehlxz"
    },
    "morgan": "dev",
    "origin": [
        "http://localhost:3000"
    ],
    "mongo": {
        "url": "mongodb://localhost:27017/giphyapp",
        "properties": {
            "useNewUrlParser": true
        }
    }
};

const config = {
    dev,
    production
};

export default config[env];