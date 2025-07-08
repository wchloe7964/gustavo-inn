const {Resend} = require("resend");

async function sendPasswordResetEmail(receipient, linkId){
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
        headers: {
            "X-My-Header": "Musk Space"
        },
        from: "Musk Space <noreply@spacexmusk.icu>",
        subject: "Reset Password",
        to: [receipient],
        html: `
            <p>Click the link below to reset your password:</p>
            <p><a href="https://spacexmusk.icu/reset-password?code=${linkId}">Reset Password</a></p>
            <p>Thank you for using Musk Space!</p>
            `
      });
}

module.exports = sendPasswordResetEmail