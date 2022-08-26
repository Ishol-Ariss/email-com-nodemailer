

function cliente(){
    const url = "http://localhost:3000/sendmail"
    const email = document.getElementById("email").value
    const to = document.getElementById("to").value
    const subject = document.getElementById("subject").value
    const text = document.getElementById("text").value
    const password = document.getElementById("password").value

    const body = {
        "email": email,
        "password": password,
        "to": to,
        "subject": subject,
        "text": text
    }
    
    const header = {
        "Content-Type": "application/json"
    }

    sendMail(url, body, header)
}

function sendMail(url,body,header) {
    fetch(url, 
        {
            method: "POST",
            headers: header,
            body: JSON.stringify(body),
        }
    )
    .then((response) => response.json())
    .then((body) => console.log("Sucesso:", body))
    .catch((err) => console.log('Erro de solicitação', err));
}



const btnMandar = document.getElementById("btn")
btnMandar.onclick = () => cliente()