import express from "express";
import moment from "moment";
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
  const data = await runQuery(`select from Posts where id ='${id}'`);
  res.send({ data: data });
});

/* CREATE post */
router.post("/api/", authenticateJWT, async function (req, res, next) {
  const { userId, title, tags, isAudioQuestion, content } = req.body;
  console.log(req.user)
  const CreationDate = moment(new Date()).format('YYYY-MM-DD');
  const queryString = `insert into Posts 
  (PostTypeId, ParentId, CreationDate, 
  Score, ViewCount, OwnerUserId, 
  LastEditorUserId, LastEditorDisplayName, 
  LastActivityDate, Title, Tags, AnswerCount, 
  CommentCount, FavouriteCount, ClosedDate, 
  CommunityOwnedDate, isAudioQuestion, Content) 
  values(null,null,'${CreationDate}',0,0,'${userId}','${userId}',null,'${CreationDate}','${title}','${tags}',0,0,0,null,null,'${isAudioQuestion}','${content}')`;
  console.log(queryString);
  const data = await runQuery(queryString);
  if (data) res.send({ data: data });
  else {
    res.status(500);
  }
});

/* UPDATE post */
router.put("/api/:id", authenticateJWT, async function (req, res, next) {
  const { userId, title, tags, isAudioQuestion, content } = req.body;
  let queryString = `UPDATE Posts SET `;
  if (title) {
    queryString.concat(`Title = '${title}', `);
  }
  if (tags) {
    queryString.concat(`Tags = '${tags}', `);
  }
  if (isAudioQuestion) {
    queryString.concat(`isAudioQuestion = ${isAudioQuestion}, `);
  }
  if (content) {
    queryString.concat(`Content = '${content}', `);
  }
  const lastActivityDate = new Date();
  queryString.concat(
    `LastActivityDate = '${lastActivityDate} WHERE Id = ${userId}`
  );
  const data = await runQuery(queryString);
  res.send({ data: data });
});

/* DELETE post*/
router.delete("/api/:id", authenticateJWT, async function (req, res, next) {
  const id = req.params.id;
  const data = await runQuery(`DELETE FROM Posts WHERE id='${id}'`);
  res.send({ data: data });
});
export default router;
