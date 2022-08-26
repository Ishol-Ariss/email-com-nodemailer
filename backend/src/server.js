const express = require("express");
const nodemailer = require("nodemailer");
const database = require("./db.js");
const clientes = require("./cliente.js");
const cors = require("cors")
const { Op } = require("sequelize");
const app = express();

app.use(express.json());
app.use(cors());



  

app.get("/", async (request, response) => {
  try {
    await database.sync();
    const cliente = await clientes.findAll();
    return response.status(201).json(cliente);
  } catch (error) {
    console.log(error);
  }
});

app.post("/cliente", async (request, response) => {
  try {
    const { nome, email } = request.body;
    await database.sync();
    const cliente = await clientes.create({
      nome,
      email,
      createdAt: new Date("2022-05-04 16:37:25"),
      updatedAt: new Date(),
    });
    console.log(cliente.id_cliente);
    return response.status(201).send();
  } catch (error) {
    console.log(error);
  }
});

app.post("/sendmail", async (request, response) => {
  try {
    
    const { email, password, to, subject, text } = request.body;
    const transporter = nodemailer.createTransport({
      service: "Hotmail",
      auth: {
        user: email,
        pass: password
      },
    });
    
    const message = await transporter.sendMail({
      from: email,
      to,
      subject,
      text,
      //html: "<h1>oi?</h1> <p>Com email dinanmico</p>",
    });

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
        return response.status(201).send(success);
      }
    });
  } catch (error) {
    console.log(error);
    return response.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log("App rodando!");
});
