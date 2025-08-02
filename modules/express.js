const express = require("express");

const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
    const users = [
            {
                name: "John Doe",
                email: "johndoe@email.com"
            },
             {
                name: "Jane Doe",
                email: "janedoe@email.com"
            },
        ];

    res.status(200).json(users)
});

app.listen(port, () =>
  console.log(`Rodando o server Express na porta ${port}!`)
);
