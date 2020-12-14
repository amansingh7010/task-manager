const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'amandevtest@gmail.com',
    subject: 'Welcome to the App!',
    text: `Welcome ${name}! Let me know if you like the app or not.`,
  })
}

const sendCancelAccountEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'amandevtest@gmail.com',
    subject: `Goodbye! ${name}`,
    text: `Its sad to see you go ${name}. We were really enjoying your company`,
  })
}

module.exports = { sendWelcomeEmail, sendCancelAccountEmail }
