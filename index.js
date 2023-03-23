const nodemailer = require('nodemailer');
require("dotenv").config();

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});
let details = {
    from: "tashisreesailam@gmail.com",
    to: "murukashiva@gmail.com",
    subject: "Node mailer assignment testing",
    text: "Testing node mailer",
};
mailTransporter.sendMail(details,(err)=>{
    if (err) {
        console.log("error detected",err);
    } else {
        console.log("email send");
    }
})   