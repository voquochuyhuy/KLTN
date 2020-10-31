import express from 'express';
import { async } from 'regenerator-runtime';
import { authenticateJWT } from '../middleware/authencationJWT';
import bcrypt from 'bcrypt'
var router = express.Router();

/* GET users listing. */
router.get('/api',authenticateJWT,async function(req, res, next) {
  const data = await runQuery(`SELECT * FROM Users `);
  res.send({ data: data });
});

/* GET user detail. */
router.get('/api/:id',authenticateJWT,async function(req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`select from Users where id ='${id}'`);
  res.send({ data: data });
});

/* CREATE user . */
router.post('/api',authenticateJWT,async function(req, res, next) {
  const {displayName,websiteUrl,region,aboutMe,profileImageUrl,email,age,account,passwordHash} = req.body;
  const saltRounds = 10;
  const creationDate,lastAccessDate = new Date();
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(passwordHash, salt, function(err, hash) {
      const data = await runQuery(`insert into Users 
      (CreationDate, DisplayName, LastAccessDate, 
      WebsiteUrl, Region, AboutMe, 
      UpVotes, DownVotes, ProfileImageUrl, 
      Email, Age, Account, PasswordHash) 
      values(${creationDate},${displayName},${lastAccessDate},${websiteUrl},${region},${aboutMe},0,0,${profileImageUrl},${email},${age},${account},${hash}
      )`);
      res.send({ data: data });
    });
  });
  
});

/* UPDATE user. */
router.put('/api',authenticateJWT,async function(req, res, next) {
  const {displayName,websiteUrl,region,aboutMe,profileImageUrl,email,age,account,passwordHash} = req.body;
  const data = await runQuery(`UPDATE Users SET values(${creationDate},${displayName},${lastAccessDate},${websiteUrl},${region},${aboutMe},0,0,${profileImageUrl},${email},${age},${account},${hash})`);
  res.send({ data: data });
});

/* Delete user . */
router.delete('/api/:id',async function(req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`DELETE FROM Users WHERE id=${id}`);
  res.send({ data: data });
});




export default router;
