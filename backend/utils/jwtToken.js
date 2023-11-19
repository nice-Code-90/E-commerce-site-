// Create & Send token + save in the cookie

const sendToken = (user, statusCode, res) => {

    //JWT token 
    const token = user.getJwtToken();

    // Opciók a cookie.nak

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000

        ),
        httpOnly: true
    }


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken;