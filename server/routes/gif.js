// server/routes/gif.js
import gifcontroller from '../controllers/gif.ctrl';

export default (router, dbs) => {
    const { trending, list, create } = gifcontroller(dbs);

    /**
     * get trending gifs
     */

    router.route('/trending')
        .get(trending)

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