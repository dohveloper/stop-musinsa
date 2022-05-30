import multer from 'multer';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname+'/../views/uploads');
  },
  filename: function(req, file, cb) {
    const imageName = new Date().valueOf() + '_' + req.body.name + file.originalname;
    req.body.image = `http://localhost:${process.env.SERVER_PORT || 5000}/uploads/${imageName}`;
    cb(null, imageName);
  },
});

const upload = multer({storage: storage});

export {upload};
