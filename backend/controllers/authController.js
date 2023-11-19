const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');



//User regisztrálása -> /api/v1/register

exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/kccvibpsuiusmwfepb3m.png',
            url: 'https://res.cloudinary.com/shopit/image/upload/v1606305757/avatars/kccvibpsuiusmwfepb3m.png'
        }
    })

    sendToken(user, 200, res)
})

//Login User -> /a/i/v1/login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //Megnézi, hogy email & pass user által van beütve

    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    //User megtalálása DB-ben

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    //Jelszó ellenőrzése

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)

})