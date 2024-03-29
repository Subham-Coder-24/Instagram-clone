// const nodeMailer = require("nodemailer");

// exports.sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "211d4679e3d79c",
//       pass: "9e2b7d43009e26",
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    // secure: true,
    ssl: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mainOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mainOptions);
};

