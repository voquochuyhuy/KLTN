import jwt from 'jsonwebtoken';

const accessTokenSecret = 'KLTN';
const refreshTokenSecret = 'KLTN';
const refreshTokens = [];

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

export {authenticateJWT,accessTokenSecret,refreshTokenSecret,refreshTokens};