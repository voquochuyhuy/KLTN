import express from 'express';
import { async } from 'regenerator-runtime';
import runQuery from '../databaseConnection';
import jwt from 'jsonwebtoken';
import { accessTokenSecret, refreshTokens, refreshTokenSecret } from '../middleware/authencationJWT';

var router = express.Router();

/* LOGIN */
router.post('/api/login', async function(req, res, next) {
    const { username, password } = req.body;
    const data = await runQuery(`SELECT * FROM Users WHERE Email = '${username}' AND CONVERT(VARCHAR, PasswordHash) = '${password}'`);
    if (data) {
        const accessToken = jwt.sign({ username: data.recordset[0].username, role: 1 }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: data.recordset[0].username, role: 1 }, refreshTokenSecret);
        refreshTokens.push(refreshToken);
        const userData = data.recordset[0];
        userData.PasswordHash = '';
        userData.Account = '';
        res.json({
            accessToken,
            refreshToken,
            userData
        });
    } else {
        res.send('Username or password incorrect');
    }
});

router.post('/token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        const accessToken = jwt.sign({ username: user.username, role: 1 }, accessTokenSecret, { expiresIn: '20m' });
        res.json({
            accessToken
        });
    });
});
/* LOGOUT */
router.post('/api/logout', async function(req, res, next) {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(token => t !== token);
});

export default router;