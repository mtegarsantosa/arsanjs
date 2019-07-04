// It's use MYSQL by default. Just change easily if you want to use other database, including nosql

const mysql = require('mysql')
const db = mysql.createConnection({
  host:'YOUR_HOST',
  user:'YOUR_USER',
  password:'YOUR_PASS',
  database:'YOUR_DB_NAME',
  multipleStatements: true
})

db.connect((err)=>{
  if (err) console.log(err)
  else console.log('DB connected')
})

module.exports = db
