const path = require('path')
const multer = require('multer') // Biblioteca para upload

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp')
const UPLOAD_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename: (req, file, callback) => {
            return callback(null, `${Date.now()}-${file.originalname}`)
        }
    })
}

module.exports = {
    TMP_FOLDER,
    UPLOAD_FOLDER,
    MULTER
}