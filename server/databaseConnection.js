const sql = require("mssql");
import  { async } from "regenerator-runtime";
const config = {
  user: "sa",
  password: "sa",
  server: "DESKTOP-H6BPC8N\\SQLEXPRESS",
  database: "KLTN",
  port :1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustedConnection: true
},
};

function runQuery(query) {
  // sql.connect() will return the existing global pool if it exists or create a new one if it doesn't
  return sql.connect(config).then((pool) => {
    return pool.query(query)
  })
}
export default runQuery;
