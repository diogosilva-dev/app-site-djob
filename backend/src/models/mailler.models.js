const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "mail.djob.com.br",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "no-reply@djob.com.br",
        pass: process.env.pass
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'no-reply@djob.com.br',
    to: 'comercial@djob.com.br',
    subject: 'E-mail enviado usando Node!',
    text: 'Bem fácil, não? ;)'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });