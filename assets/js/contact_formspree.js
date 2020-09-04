window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {action: "https://formspree.io/mrgynzaj",
    title: "Get in Touch",
    fields: [
    { 
        type: "text", 
        label: "Name:", 
        name: "name",
        required: true,
        placeholder: "Foo Bar"
    },
    { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
    },
    {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
    },
    { type: "submit" }      
    ],
    styles: {
    fontFamily: "Montserrat",
    title: {
        background: "#5AA6ED",
    },
    button: {
        background: "#5AA6ED",
    }
    },
    initiallyVisible: false,
    onResponse: function(ok, setStatus) {
            if (ok) {
            setStatus("Thanks for reaching out! I'll get back to you soon.");
            } else {
                setStatus("<span style='color:#F06543'>Ooopsies! The internet broke <p style='font-size:50px'>&#129327;</p> <br/>Try the <a href='contact.html'>contact page</a></span>");
            }
        }
    });