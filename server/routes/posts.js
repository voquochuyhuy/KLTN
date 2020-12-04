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
  const data = await runQuery(`select * from Posts JOIN Comments ON Posts.Id = Comments.PostId WHERE Users.Id = '${id}'`);
  if(data){
    res.send({ data: data.recordset[0] });
  }
  else {
    res.status(500);
  }

});

/* CREATE post */
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

/* UPDATE post */
router.put("/api/", authenticateJWT, async function (req, res, next) {
  const { id, title, tags, isAudioQuestion, content } = req.body;
  console.log(id, title, tags, isAudioQuestion, content)
  let queryString = `UPDATE Posts SET `;
  if (title) {
    queryString = queryString.concat(`Title = '${title}', `);
  }
  if (tags !== undefined) {
    queryString = queryString.concat(`Tags = '${tags}', `);
  }
  if (isAudioQuestion !== undefined) {
    queryString = queryString.concat(`isAudioQuestion = ${isAudioQuestion}, `);
  }
  if (content !== undefined) {
    queryString = queryString.concat(`Content = '${content}', `);
  }
  const lastActivityDate = moment(new Date()).format('YYYY-MM-DD');
  queryString = queryString.concat(
    `LastActivityDate = '${lastActivityDate}' WHERE id = ${id}`
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
