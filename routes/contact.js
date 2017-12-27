const nodemailer = require('nodemailer');

exports.sendMessage =  function (req, res) {
    var mailOpts, smtpTrans;
    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "mauliktrapasiya@gmail.com",
            pass: "*****"
        }
    });

    //Mail options
    mailOpts = {
        from: req.body.email, //grab form data from the request body object
        to: 'mauliktrapasiya@gmail.com',
        subject: req.body.email,
        text: req.body.message
    };

    smtpTrans.sendMail(mailOpts, function (error, info) {
        //Email not sent
        if (error) {
            return console.log(error);
        }
        else{
            console.log('Message sent: %s', info.messageId);
            res.redirect('/');
        }
    });
};
