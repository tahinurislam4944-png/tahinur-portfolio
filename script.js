// EmailJS Setup

emailjs.init("eYcu2EHCESlEctEoqMSl");


document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();


    emailjs.sendForm(
        "service_ez3cw06",
        "template_53tj39o",
        this
    )

    .then(function(){

        alert("Message Sent Successfully!");

    })

    .catch(function(error){

        alert("Failed to send message!");

        console.log(error);

    });


});
