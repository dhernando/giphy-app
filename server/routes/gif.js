// server/routes/gif.js
import gifcontroller from '../controllers/gif.ctrl';

export default (router, dbs) => {
    const { list, create } = gifcontroller(dbs);

    /**
     * get all gifs
     */

    router.route('/gifs')
        .get(list)
    /**
     * create a gif
     */

    router.route('/gifs/new')
        .post(create)
}