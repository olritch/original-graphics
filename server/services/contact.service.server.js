module.exports = function(app) {

  app.post("/api/contact/send", sendEmail);

  async function sendEmail(req, res) {
    const API_KEY = "4b3c1d197d0f8d1f296e74a9e74ebc76-2d27312c-1bdce66f";
    const DOMAIN = "sandboxffdbf4332e3448028e27ac8bbafe7522.mailgun.org";
    const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
    const adminEmail = 'originalgraphics.contact@gmail.com'

    const data = req.body;
    console.log(data)

    const info = {
      from: `${data.firstName} ${data.lastName} <${data.email}>`,
      to: `Original Graphics Admin <${adminEmail}>`,
      subject: `${data.firstName} ${data.lastName}'s Feedback on ${data.commentTopic}`,
      text: data.feedback
    };

    mailgun.messages().send(info, (error, body) => {
      console.log(body);
    });
    
    res.send('200')
  }
};
