import { async } from 'regenerator-runtime';

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'huydeptrai123',
  database: 'kltn'
})

const runQuery = async (query)=>{
  return  new Promise(function(resolve,reject){
    connection.query(query,function(err,rows,fields){
      resolve(rows);
    })
  });
};
export default runQuery;

