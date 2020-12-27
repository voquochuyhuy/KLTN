import express from "express";
import moment from "moment";
import { async } from "regenerator-runtime";
import runQuery from "../databaseConnection";
import { authenticateJWT } from "../middleware/authencationJWT";

var router = express.Router();

/* GET LOG */
router.get("/api", async function (req, res, next) {
  const data = await runQuery(`SELECT * FROM Log Inner join User on Log.userID = User.id`);
  res.send({ data: data });
});

/* CREATE LOG */
router.post("/api/", authenticateJWT, async function (req, res, next) {
  const { typeId, userId,action } = req.body;
  if(!typeId || !userId) res.status(400);
  const CreationDate = moment(new Date()).format('YYYY-MM-DD hh-mm-ss');
  const queryString = `insert into Log values (${userId},${action},'${CreationDate})`;
  const data = await runQuery(queryString);
  if (data) res.send({ data: data });
  else {
    res.status(500);
  }
});

export default router;