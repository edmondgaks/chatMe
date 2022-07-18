const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyparser = require('body-parser');

require('dotenv').config();

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const messagingServiceSid = process.env.MESSAGING_SERVICE_SID;
const twilioClient = require("twilio")(accountSID,authToken)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(bodyparser.json())

app.get('/', (req,res) => {
    res.send('Hello, World');
})

app.get('/', (req,res) => {
    const { message, user: sender,type,members } = req.body;

    if(type === message.new) {
        members
        .filter((member) => member.user_id !== sender.id)
        .forEach(({user}) => {
            if(!user.online) {
                twilioClient.messages.create({
                    body: `You have a new notification from ${message.user.fullName} - ${message.text}`,
                    messagingServiceSid: messagingServiceSid,
                    to: user.phoneNumber
                }).then(() => console.log('Message Sent'))
                .catch((err) => {console.log(err)});
            }
        });
        return res.status(200).send('Message Sent');
    }
    return res.status(200).send('Not a new message request')
})

app.use('/auth',authRoutes);

app.listen(PORT, () => console.log(`Server is running on  PORT ${PORT}....`));

