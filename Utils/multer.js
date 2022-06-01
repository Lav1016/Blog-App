

const PATH = "../public/images";
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, PATH));
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + path.extname(file.originalname);
      req.body.imageUrl = fileName;
      cb(null, fileName);
    },
  });
 
  const upload = multer({
    storage: storage,
  });
 