const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
let arr = [];

app.get("/", (req, res) => {
  res.send(arr);
});

app.post("/api/add", (req, res) => {
  console.log(req.body);
  arr = [...arr, req.body];
});

app.delete('/delete/user/:id', (req,res) => {
 var id= req.params.id;
 arr.splice(id,1)
console.log(id, arr);
});


app.put('/update/user/:id', (req,res) => {
  var id= req.params.id;
  arr.splice(id,1,req.body)
 console.log(id, arr);
 });
 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
