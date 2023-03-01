const nodemailer = require('nodemailer')
const emailTemplate = require('./emailTemplate')

// Function to send recovery code email
const sendEmailCode = async (code) => {

  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.EMAIL_PASS
    }
  }

  message = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Codigo de recuperación de cuenta',
    html: emailTemplate.replace('{{code}}', code)
  }

  const transport = nodemailer.createTransport(config)

  const info = await transport.sendMail(message)

  console.log(info)
}

module.exports = sendEmailCode