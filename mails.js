var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'belma.dedic2019@size.ba',
    pass: 'belma1307'
  }
});

var mailOptions = {
  from: 'belma.dedic2019@size.ba',
  to: 'deedic.b@gmail.com, m.kozlic2019@size.ba',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});