import express from "express";
import moment from "moment";
import { async } from "regenerator-runtime";
import runQuery from "../databaseConnection";
import { authenticateJWT } from "../middleware/authencationJWT";

var router = express.Router();

/* GET LOG */
router.post("/api", async function (req, res, next) {
  const {limit} = req.body;
  if(!limit) res.status(400);
  const data = await runQuery(`SELECT TOP ${limit} * FROM Logs ORDER BY Score DESC`);
  res.send({ data: data });
});

/* CREATE LOG */
router.post("/api/", authenticateJWT, async function (req, res, next) {
  const { typeId, userId } = req.body;
  if(!typeId || !userId) res.status(400);
  const CreationDate = moment(new Date()).format('YYYY-MM-DD hh-mm-ss');
  const queryString = `insert into Logs values(${typeId},${userId},'${CreationDate})`;
  const data = await runQuery(queryString);
  if (data) res.send({ data: data });
  else {
    res.status(500);
  }
});

export default router;