const express = require("express");
const mysql = require("mysql");
const app = express();
// 设置MySQL连接配置
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "deli",
});
// 连接到MySQL数据库
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
app.get("/testApi", (req, res) => {
  console.log(req.query, 17);
  const { config_name } = req.query;
  console.log(config_name);
  connection.query(
    `SELECT * FROM config  where config_name="${config_name}"`,
    (error, results, fields) => {
      if (error) throw error;
      // 发送响应
      res.send(results);
    }
  );
});

app.listen(8081, () => {
  console.log("http://localhost:8081");
});
