/** server/controllers/gif.ctrl.js*/
import Giphy from '../utils/Giphy';
import { Gif } from '../models/Gif';
import { gifParser } from '../utils/parsers';

export default (dbs) => {
    return {
        list: async (req, res) => {
            console.log('dbs:', dbs);
            try {
                const data = await Gif.find();

                let parsed;
                if (data.length < 25) { // Not enough gifs in db
                    const gifs = await Giphy.search('cheeseburger'); //TO-DO, dynamic query
                    const jsonGifs = JSON.parse(gifs).data;
                    parsed = gifParser(jsonGifs);
                }
                return res.status(200).json({
                    success: true,
                    data: parsed
                });
            } catch (e) {
                console.log(e);
                return res.status(500).json({
                    success: false,
                    message: 'Internal Server Error'
                });
            }
        },
        create: async (req, res) => {
            console.log('dbs:', dbs);
            try {
                const data = await Gif.create({ prop_1: '', prop_2: '' }); //TO-DO, create gifs in db
                return res.status(200).json({
                    success: true,
                    message: 'OK'
                });
            } catch (e) {
                return res.status(500).json({
                    success: false,
                    message: 'Internal Server Error'
                });
            }
        }
    };
};