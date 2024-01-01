module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            tittle    : String, 
            body      : String, 
            publish   : Boolean
        },{
            timestamp : true
        }
    )

    schema.method("toJson", () => {
        const {__v, _id, ...Object} = this.toObject(); 
        Object._id = _id
        return Object
    })

    const Post = mongoose.model("posts", schema);
    return Post;
}
