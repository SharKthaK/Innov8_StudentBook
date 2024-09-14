import express from 'express';
import User from '../models/users';
import multer from 'multer';

// Image upload configuration
const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, './uploads');
    },
    filename: function(_req, file, cb) {
        cb(null, file.fieldname + '_' + file.originalname);
    },
});

const upload = multer({
    storage: storage,
}).single('image');

const router = express.Router();

// Insert user data into Database
router.post('/add', upload, (req, res) => {
    const newUser = new User({
        collegeID: req.body.collegeID,
        collegeName: req.body.collegeName,
        phone: req.body.phone,
        email: req.body.email,
        image: req.file.filename,
    });

    newUser.save()
        .then(() => {
            req.session.message = {
                type: 'success',
                message: 'User added successfully!',
            };
            res.redirect('/');
        })
        .catch((err) => {
            res.json({ message: err.message, type: 'danger' });
        });
});

// Get all users
router.get('/', async (_req, res) => {
    try {
        const users = await User.find().exec();
        res.render('index', {
            title: 'Home Page',
            users: users,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Render add user page
// Add your code here

export default router;
