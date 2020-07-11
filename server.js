const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();


//Body parser middleware
app.use(bodyParser.json());


//DB config
const db = require('./config/keys').mongoURI;

//Connect mongo
mongoose
  .connect(db, { useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

//Declare port to localhost

const port = process.env.PORT || 5000;

//Use routers
app.use('/api/items', items);

app.listen(port, () => console.log(`Server running on port ${port}`));