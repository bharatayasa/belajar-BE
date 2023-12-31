module.exports = mongoose => {
    const schema = mongoose.schema(
        {
            nama_lengkap    : String, 
            jenis_kelamin   : String, 
            tanggal_lahir   : Date,
            tempat_lahir    : String,
            alamat          : String, 
        }, 
        {
            timestamp       : true
        }
    )
    return mongoose.model("user", schema)
}