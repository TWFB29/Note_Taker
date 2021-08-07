const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require("./routes/apiRoutes")
// PORT variable
const PORT = process.env.PORT || 8080;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());



 app.use(express.static('public'));

 app.use('/api', apiRoutes)
 app.use("/", htmlRoutes)

// server listen
app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}!`);
  });
