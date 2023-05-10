

const sendEmail = (event) => {
    event.preventDefault();
    const emailFrom = document.getElementById("emailFrom").value.trim(); // apalruf0505@g.educaand.es
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "vargassiemprevargas@hotmail.com",
	Password : "1B9CBD9327EE0F52E1ECAB91F2DA1DEA6AC0",
	To : emailFrom,
	From : emailFrom,
	Subject : subject,
	Body : `
        <div style="text-align: center; border-radius: 20px; border: 2px solid #112e51">
            <h1> <strong>Observaciones</strong> </h1>
            <p style="font-size: 20px; font-family: Arial, Helvetica, sans-serif;">${body}</p>
        </div>
    `,
	}).then(message => alert(message));
}

//port: 2525

const showDiv = () => {
    document.querySelector("body").classList.toggle("active");
}
