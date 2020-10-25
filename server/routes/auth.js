import express from 'express';
import { async } from 'regenerator-runtime';
import runQuery from '../databaseConnection';
import jwt from 'jsonwebtoken';
import { accessTokenSecret } from '../middleware/authencationJWT';

var router = express.Router();

/* LOGIN */
router.post('/api/login', async function(req, res, next) {
    const { username, password } = req.body;
    console.log(`select * from Users where Account = "${username}" and PasswordHash = "${password}"`)
    const data = await runQuery(`SELECT * FROM Users WHERE Account = '${username}' AND CONVERT(VARCHAR, PasswordHash) = '${password}'`);
    if (data) {
        const accessToken = jwt.sign({ username: data.recordset[0].DisplayName,  role: 1 }, accessTokenSecret);
        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

/* LOGOUT */
router.put('/api/logout', async function(req, res, next) {
    const data = await runQuery('select * from Posts');
    res.send({data:data})
});

export default router;