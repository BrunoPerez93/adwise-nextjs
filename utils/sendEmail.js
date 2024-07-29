var nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, otpText, ccEmail) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    cc: ccEmail,
    subject: subject,
    text: otpText,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error); 
        return reject(error);
      } else {
        console.log("Email Sent: " + info.response);
        return resolve({ success: true }); 
      }
    });
  });
}
