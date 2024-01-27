import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required.'));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        password: hashedPassword,
        email
    });

    try {
        await newUser.save();
        res.json('signup successful');
    } catch (error) {
        next(error);
    }
};
export const signin = async(req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password || username === '' || password === '') {
        next(errorHandler(400, 'All fields are required.'));
    }
    try {
        const validUser = await User.findOne({ email });
        if (!validUser)

    } catch (error) {
        next(error);
    }
}
next(error);
}
}