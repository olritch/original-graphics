module.exports = function(app) {
  app.post("/api/contact/send", sendEmail);

  async function sendEmail(req, res) {

    const API_KEY = process.env.MAILGUN_API_KEY;
    const DOMAIN = process.env.MAILGUN_DOMAIN;

    const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
    const adminEmail = 'original.graphics@yahoo.com';
    const adminEmail2 = 'originalgraphics2019@gmail.com'

    const data = req.body;
    console.log(data)

    const info = {
      from: `${data.firstName} ${data.lastName} <${data.email}>`,
      to: `Original Graphics Admin <${adminEmail}>, test <${adminEmail2}>`,
      subject: `${data.firstName} ${data.lastName}'s Feedback on ${data.commentTopic}`,
      text: data.feedback
    };

    mailgun.messages().send(info, (error, body) => {
      console.log(body);
    });
    
    res.send('200')
  }
};
