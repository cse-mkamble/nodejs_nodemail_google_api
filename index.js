require('dotenv').config()
const sendMail = require('./sendMail')

const email = ""
const subject = "test"
const message = "Hello"
sendMail( email, subject, message )
