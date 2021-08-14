require('dotenv').config()
const sendMail = require('./sendMail')
const messageMail = require('./messageMail')

var name = 'Mayur'

const email = "cse.mkamble@gmail.com"
const subject = "test"
const message = messageMail(name)
sendMail( email, subject, message )
