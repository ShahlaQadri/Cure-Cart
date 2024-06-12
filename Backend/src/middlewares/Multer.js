import multer from 'multer'
import {v4 as uuid} from "uuid"
import path from 'path'
const storage = multer.diskStorage({
    destination:function(req, file, callback) {
    //    const uploadPath =  path.join(__dirname,'./public/uploads')
        callback(null,'uploads');
    },

    filename(req, file, callback) {
    const id = uuid();
    const extname = file.originalname.split(".").pop();
    console.log("in multer")
        callback(null, `${id}.${extname}`);
        // console.log(extname)
    },
})

export const  uploadImage = multer({storage}).single('photo')