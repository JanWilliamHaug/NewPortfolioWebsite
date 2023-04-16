const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  // Enter your email credentials here
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'haug002@cougars.csusm.edu',
      pass: 'kaka8ronaldo99999',
    },
  });

  const mailOptions = {
    from: email,
    to: 'haug002@cougars.csusm.edu',
    subject: `New portolio message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};
