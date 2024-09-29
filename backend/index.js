const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const url1 = process.env.MONGO_URL1;
const url2 = process.env.MONGO_URL2;
const userRoutes = require('./routes/userRoutes');

mongoose.connect(url1)
.then(console.log("Connected to Database!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", userRoutes);

app.listen(PORT, () => {    
  console.log(`Listening on PORT:${PORT}`);
});
