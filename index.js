
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const userEmail = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !phone || !userEmail || !message) {
        alert('Please fill in all fields!');
        return;
    }

    Email.send({
        SecureToken: "98ecaa91-122c-458f-81a6-df3bc820dc1e", 
        To: userEmail,
        From: "@gmail.com",
        Subject: "New Contact Form Message",
        Body: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `,
    }).then((response) => {
        if (response === "OK") {
            alert('✅ Email sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('❌ Failed to send email. Error: ' + response);
        }
    });
});



echo "# Email_Sender" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vardhan998997/Email_Sender.git
git push -u origin main