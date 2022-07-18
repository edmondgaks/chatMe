const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyparser = require('body-parser');

require('dotenv').config();

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioClient = require("twilio")(accountSID,authToken)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(bodyparser.json())

app.get('/', (req,res) => {
    res.send('Hello, World');
})

app.use('/auth',authRoutes);

app.listen(PORT, () => console.log(`Server is running on  PORT ${PORT}....`));

