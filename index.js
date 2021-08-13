require('dotenv').config()
const sendMail = require('./sendMail')
const messageMail = require('./messageMail')

const email = "shiv.ramteke@gmail.com"
const subject = "test"
const message = messageMail
sendMail( email, subject, message )
