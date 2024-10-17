const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  sendMail: true,
  service: "gmail",
  auth: {
    user: "ben10realfan@gmail.com",
    pass: "ytsvkjlogcnnvahf",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendVerificationMail(
  email,
  productName,
  productOldPrice,
  productNewPrice,
  productLink
) {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Company" <company@gmail.com>', // sender address
      to: email, // list of receivers
      subject: " Price Drop Alert for Your Favorite Product!", // Subject line
      text: "", // plain text body
      html: `<html><body><p>
      We hope this message finds you well. We're excited to inform you that the price of the product you've been keeping an eye on has dropped!<br>
      We value your trust in our service, and we're here to help you make the most of your online shopping experience.<br><br>
      Here are the details of the price drop:<br><br>

      Product Name: ${productName}
      <br>
      Old Price: ₹${productOldPrice}
      <br>
      New Price: ₹${productNewPrice}
      <br>
      Price Difference: ₹${productOldPrice - productNewPrice}
      <br>
      Product Link: <a>${productLink}</a>
      <br><br>
      To take advantage of this fantastic deal, simply click on the link provided above, and it will take you directly to the product page. 
      Don't wait too long, as prices can fluctuate quickly in the world of online shopping.
      <br><br>
      Thank you for choosing our price drop notification service. 
      We look forward to helping you save money on your favorite products in the future.
      <br><br>
      Happy shopping!
      </p></body></html>`, // html body
    });

    console.log(info);
  } catch (e) {
    console.log(e);
  }
}

function logh() {
  console.log("Hello");
}

module.exports = { sendVerificationMail, logh };
