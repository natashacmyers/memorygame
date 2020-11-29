// sendMail() function will store the details from the form as variables, then send the variables in an email to 
// the developer's inbox, in the format designed using the emailJS website.

function sendMail(contactForm) {

    emailjs.send("gmail", "Beemail", {
            "fname": contactForm.fname.value,
            "lname": contactForm.lname.value,
            "email": contactForm.email.value,
            "topic": contactForm.topic.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                document.getElementById("contactForm").reset();
                alert("Thank you for your message, we will respond to you as soon as we can!")
                window.location.replace("/");
            },
            function (error) {
                alert("Oops, something went wrong. Please try again.")
            }
        )
    return false;

}