const db = require('../models/index');
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find()

    .then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving data"
        })
    });
}

exports.insertOne = (req, res) => {
    const post = new Post({
        tittle      : req.body.tittle,
        body        : req.body.body,
        published   : req.body.published ? req.body.published : false
    })

    post.save(post)
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while create posts."
        })
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while show posts."
        })
    });
}

exports.updateOne = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)

    .then((result) => {
        if(!result){
            res.status(404).send({
                message: "post not found"
            })
        }

        res.send({
            message: "post was updated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update post posts."
        })
    });
}

exports.deleteOne = (req, res) => {
    const id = req.params.id

    Post.findOneAndDelete(id)
    .then((result) => {
        if(!result){
            res.status(404).send({
                message: "post not found"
            })
        }

        res.send({
            message: "post was deleted"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update post posts."
        })
    });
}
