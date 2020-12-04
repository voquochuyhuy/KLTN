import express from "express";
import moment from "moment";
import { async } from "regenerator-runtime";
import runQuery from "../databaseConnection";
import { authenticateJWT } from "../middleware/authencationJWT";

var router = express.Router();

/* GET User Admin List */
router.get("/api/admin-list", async function (req, res, next) {
  const data = await runQuery(`SELECT TOP 10 * FROM Posts ORDER BY Id DESC`);
  res.send({ data: data });
});

/* GET User List */
router.get("/api/user-list", async function (req, res, next) {
  const data = await runQuery(`SELECT TOP 10 * FROM Posts ORDER BY Id DESC`);
  res.send({ data: data });
});

/*GET user admin detail*/
router.get("/api/:id", async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`select * from Posts where id =${id}`);
  if(data){
    res.send({ data: data.recordset[0] });
  }
  else {
    res.status(500);
  }

});

/* CREATE user admin */
router.post("/api/", authenticateJWT, async function (req, res, next) {
  const { userId, title, tags, isAudioQuestion, content } = req.body;
  const CreationDate = moment(new Date()).format('YYYY-MM-DD');
  const queryString = `insert into Posts 
  (PostTypeId, ParentId, CreationDate, 
  Score, ViewCount, OwnerUserId, 
  LastEditorUserId, LastEditorDisplayName, 
  LastActivityDate, Title, Tags, AnswerCount, 
  CommentCount, FavouriteCount, ClosedDate, 
  CommunityOwnedDate, isAudioQuestion, Content) 
  values(null,null,'${CreationDate}',0,0,'${userId}','${userId}',null,'${CreationDate}','${title}','${tags}',0,0,0,null,null,'${isAudioQuestion}','${content}')`;
  const data = await runQuery(queryString);
  if (data) res.send({ data: data });
  else {
    res.status(500);
  }
});

/* DELETE user admin*/
router.delete("/api/:id", authenticateJWT, async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`DELETE FROM Posts WHERE id='${id}'`);
  res.send({ data: data });
});
export default router;
