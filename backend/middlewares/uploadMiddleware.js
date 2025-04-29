const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});


const fileFilter = (req, file, cb) => {
    const allowdTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if(allowdTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("only .jpeg, .jpg, and .png formats are allowed"), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;