const express = require("express");
const cors = require("cors"); //lets  backend share  w/front
const app = express();
const port = 8000;
require('dotenv').config();
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());

//connect db  using  config file here
require("./config/mongoose.config")

require("./routes/product.route")(app);

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );