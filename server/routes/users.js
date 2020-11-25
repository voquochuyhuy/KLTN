import express from "express";
import { async } from "regenerator-runtime";
import { authenticateJWT } from "../middleware/authencationJWT";
import aesjs from 'aes-js';
import bcrypt from "bcrypt";
var router = express.Router();

/* GET users listing. */
router.get("/api", authenticateJWT, async function (req, res, next) {
  const data = await runQuery(`SELECT * FROM Users `);
  res.send({ data: data });
});

/* GET user detail. */
router.get("/api/:id", authenticateJWT, async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`SELECT * FROM Users INNER JOIN Badges ON Users.Id = Badges.Id WHERE Users.Id = '${id}';`);
  res.send({ data: data });
});

/* CREATE user . */
router.post("/api", authenticateJWT, async function (req, res, next) {
  const {
    displayName,
    websiteUrl,
    region,
    aboutMe,
    profileImageUrl,
    email,
    age,
    account,
    passwordHash,
  } = req.body;
  const saltRounds = 10;
  const creationDate = new Date();
  const lastAccessDate = new Date();
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(passwordHash, salt, async function (err, hash) {
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
router.put("/api", authenticateJWT, async function (req, res, next) {
  const {
    id,
    displayName,
    websiteUrl,
    region,
    aboutMe,
    profileImageUrl,
    email,
    age,
    account,
  } = req.body;
  let queryString = `UPDATE Users SET `;
  if (displayName) {
    queryString.concat(`DisplayName = '${displayName}', `);
  }
  if (websiteUrl) {
    queryString.concat(`WebsiteUrl = '${websiteUrl}', `);
  }
  if (region) {
    queryString.concat(`Region = '${region}', `);
  }
  if (aboutMe) {
    queryString.concat(`AboutMe = '${aboutMe}', `);
  }
  if (profileImageUrl) {
    queryString.concat(`ProfileImageUrl = '${profileImageUrl}', `);
  }
  if (email) {
    queryString.concat(`Email = '${email}', `);
  }
  if (age) {
    queryString.concat(`Age = '${age}', `);
  }
  if (account) {
    queryString.concat(`Account = '${account}', `);
  }
  queryString.concat(`WHERE Id = ${id}`);
  try {
    const data = await runQuery(queryString);
    res.send({ data: data });
  } catch (error) {
    res.status(500);
  }
});

/* UPDATE password. */
router.put("/api", authenticateJWT, async function (req, res, next) {
  const { id, passwordHash } = req.body;
  let queryString = `UPDATE Users SET`;
  if (displayName) {
  }
  if (displayName) {
  }
  const data = await runQuery(queryString);
  res.send({ data: data });
});

/* Delete user . */
router.delete("/api/:id", async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`DELETE FROM Users WHERE id=${id}`);
  res.send({ data: data });
});

export default router;
