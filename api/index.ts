var express = require('express');
var app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/sportsgeek-url', (req, res) => {
  // res.send('Hello World!');
  // res.json({
  //   name: 'SportsGeek',
  //   url: 'http://google-djcnd.com:8080'
  // });

  res.json({
    name: 'SportsGeek',
    url: 'http://65.1.72.237:8080'
  });
  
});

app.listen(3000, function () {
  console.log('Server ready on port 3000.');
});