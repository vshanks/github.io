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
    initiallyVisible: false
    });