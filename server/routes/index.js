// server/routes/gif.js
import user from './user';
import gif from './gif';

export default (router, dbs) => {
    
    router.get('/', (req, res) => {
        return res.status(200).json({
            success: true,
            message: 'Hello world!'
        });
    });
    
    user(router, dbs)
    gif(router, dbs)

    router.use((req, res, next) => {
        return res.status(404).json({
            success: false,
            message: 'Not found.'
        });
    });

    return router;
}