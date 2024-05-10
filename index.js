const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // Your SMTP host
    port: 587,                 // Your SMTP port
    secure: false,             // Whether your SMTP server uses SSL
    auth: {
        user: 'sib.zaroon@gmail.com', // SMTP username
        pass: 'nmkexdfqvbewdvai'          // SMTP password
    }
});
app.get('/', (req,res)=>{
res.status(200).send("SDFSDFSDFSD");
})
app.post('/send-email', (req, res) => {
    const { name,company,website,email,phone } = req.body;
    console.log("DSSDFSDFSDFSDF", name, company, website, email);
    const mailOptions = {
        from: 'contact@sibinfotech.com',
        to:"sibinfotech101@gmail.com",
        subject: "New Inquiry from Digital Marketing Services Mumbai Landing Page",
        html: `
        <p>Dear Admin,</p>
        <p>You have received an enquiry from:</p>
        <table width='500' border='1' cellspacing='0'>
            <tr>
                <td style='padding:10px;' width='250'>Full Name</td>
                <td style='padding:10px;'>${name}</td>
            </tr>
            <tr>
                <td style='padding:10px;' width='250'>Company Name</td>
                <td style='padding:10px;'>${company}</td>
            </tr>
            <tr>
                <td style='padding:10px;' width='250'>Website url</td>
                <td style='padding:10px;'>${website}</td>
            </tr>
            <tr>
                <td style='padding:10px;' width='250'>Email</td>
                <td style='padding:10px;'>${email}</td>
            </tr>
            <tr>
                <td style='padding:10px;' width='250'>Phone Number</td>
                <td style='padding:10px;'>${phone}</td>
            </tr>
        </table>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(4002, () => {
    console.log('Server is running on port 4002');
})