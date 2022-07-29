const express = require("express")
const app = express()
const db =  require("./config/db")

// db.grantRolesToUser('admin', [{ role: 'root', db: 'admin' }])

// use admin
// db.createUser(
//   {
//     user: 'admin',
//     pwd: 'password',
//     roles: [ { role: 'root', db: 'admin' } ]
//   }
// );
// exit;

db();

app.use(express.json({extended:false}))

app.use("/",require("./routes/user"))

port = process.env.PORT || 9000

app.listen(port,() => console.log(`server is started on port ${port}`))