const { Router } = require("express");
module.exports = (app) => {
    const post = require("../controllers/post.comtroller");
    const router = Router();

    router.get('/', post.findAll);
    router.post('/', post.insertOne);
    router.get('/:id', post.findOne);
    router.put('/:id', post.updateOne);
    router.delete('/:id', post.deleteOne);
    
    app.use('/api/post', router);
};
