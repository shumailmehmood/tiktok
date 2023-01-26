const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname,'views')))
app.get('/',(req,res)=>{
  res.sendFile('index.html')
})
app.get('/home',(req,res)=>{
    res.sendFile('./home.html',{ root: './views' })
  })
  app.get('/detail',(req,res)=>{
    res.sendFile('./detail.html',{ root: './views' })
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});