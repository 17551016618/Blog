const express = require("express");
const app = express();

app.get("/testApi", (req, res) => {
  console.log(req.query, 17);
  const { config_name } = req.query;
  console.log(config_name);
  const results = {
    status: 200,
    data: [
      {
        id: 1,
        name: "jack",
      },
      {
        id: 2,
        name: "rose",
      },
    ],
  };
  // 发送响应
  res.send(results);
});

app.use(express.static(__dirname + "/public"));

app.listen(8081, () => {
  console.log("http://localhost:8081");
});
