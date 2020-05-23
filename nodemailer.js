const nodemailer = require('nodemailer');

const mailFunctions = {
    sendEmail : (email, message, name) => {
        const output = `
            <h3>${name} has sent you a message using the email address below.</h3>
            <h4><${email}></h4>
            <h3>================================</h3>
            <p>${message}</p>
            <footer class="footer">
                <p>&copy; 2018 ENDEE SYSTEMS, Inc.</p>
            </footer>
            `;
        let transporter = nodemailer.createTransport({
            host: 'mail.twc.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'ndytest@twc.com', // generated ethereal user
                pass: 'sweetboy' // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: `${name} <${email}>`, // sender address
            to: 'ndyarborough1997@gmail.com', // list of receivers
            subject: 'Message from Portfolio', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }
}

module.exports = mailFunctions;