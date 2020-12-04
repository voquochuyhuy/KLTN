import express from "express";
import moment from "moment";
import { async } from "regenerator-runtime";
import runQuery from "../databaseConnection";
import { authenticateJWT } from "../middleware/authencationJWT";

var router = express.Router();

/* GET Bad Post */
router.post("/api/bad-posts",authenticateJWT, async function (req, res, next) {
  const {limit,fromRow} = req.body;
  const data = await runQuery(`SELECT TOP ${limit} * FROM Posts where Id > ${fromRow} and `);
  res.send({ data: data });
});

/* GET User Admin List */
router.get("/api/admin-list",authenticateJWT, async function (req, res, next) {
  const data = await runQuery(`SELECT * FROM UserAdmin `);
  res.send({ data: data });
});

/* GET User List */
router.get("/api/user-list",authenticateJWT, async function (req, res, next) {
  const data = await runQuery(`SELECT * FROM Users`);
  res.send({ data: data });
});

/*GET user admin detail*/
router.get("/api/:id",authenticateJWT, async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`select * from UserAdmin where id =${id}`);
  if(data){
    res.send({ data: data.recordset[0] });
  }
  else {
    res.status(500);
  }

});

/* CREATE user admin */
router.post("/api/", authenticateJWT, async function (req, res, next) {
  const { Username, Password } = req.body;
  if(!Username || !Password) res.status(400);
  const queryString = `insert into UserAdmin values ('${Username}','${Password}')`;
  const data = await runQuery(queryString);
  if (data) res.send({ data: data });
  else {
    res.status(500);
  }
});

/* DELETE user admin*/
router.delete("/api/:id", authenticateJWT, async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`DELETE FROM UserAdmin WHERE id='${id}'`);
  res.send({ data: data });
});
export default router;
