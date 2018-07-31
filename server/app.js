import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import Mongoose from 'mongoose';
import config from './config';
import routes from './routes/';

Mongoose.connect(config.mongo.url, config.mongo.properties);

const mongo = Mongoose.connection;
mongo.on('error', console.error.bind(console, 'Connection error.'));
mongo.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

process.chdir(path.join(__dirname, './'));

const app = express();
const router = express.Router();
const dbs = { 'mysql': 'futureconnection', 'redis': 'futureconnection' };

// Security -->
app.enable('trust proxy');
app.use(helmet());
app.use(cors({
    origin: config.origin,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// -->

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(config.morgan));

app.use('/api/v1/', routes(router, dbs));

app.listen(config.server.port);