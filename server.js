const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

const db = require('./keys').mongoURI;

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

if(process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
const mongoose = require("mongoose");

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('connection works'))
  .catch(err => console.log(err));

 app.use('/products', require('./routes/products'))
 app.use('/addremoveproducts', require('./routes/addremoveproducts'))
 app.use('/addnewproduct', require('./routes/addnewproduct'))
 app.use('/deleteproduct', require('./routes/removeproducts'))
 