// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const toEmail = process.env.TO_EMAIL;
const name = process.env.NAME;
const fromEmail = process.env.FROM_EMAIL;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: toEmail,
  from: {
    name: name,
    email: fromEmail,
  },
  subject: 'HEYY MANNNNN',
  text: 'I just relearned how to send emails with code!',
  html: '<strong>YUH UH [{xX..Node.js..Xx}]</strong>',
};
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch(error => {
    console.error(error);
  });
