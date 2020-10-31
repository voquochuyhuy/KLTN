import express from "express";
import { async } from "regenerator-runtime";
import runQuery from "../databaseConnection";
import { authenticateJWT } from "../middleware/authencationJWT";

var router = express.Router();

/* GET lastest-post */
router.get("/api/lastest-posts", async function (req, res, next) {
  const data = await runQuery(`SELECT TOP 10 * FROM Posts ORDER BY Id DESC`);
  res.send({ data: data });
});

/*GET post detail*/
router.get("/api/:id", async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`select from Posts where id =${id}`);
  res.send({ data: data });
});

/* CREATE post */
router.post("/api/",authenticateJWT, async function (req, res, next) {
  const postData = req.body;
  const data = await runQuery(`insert into Posts values()`);
  res.send({ data: data });
});

/* UPDATE post */
router.put("/api/:id",authenticateJWT, async function (req, res, next) {
  const data = await runQuery(`UPDATE Posts SET values()`);
  res.send({ data: data });
});

/* DELETE post*/
router.delete("/api/:id",authenticateJWT, async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`DELETE FROM Posts WHERE id=${id}`);
  res.send({ data: data });
});
export default router;
