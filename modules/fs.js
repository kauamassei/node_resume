const fs = require("fs");
const path = require("path");

// criando uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

// criando um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log(data);
  }
);

// adicionando um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Texto adicionado com sucesso!");
  }
);

// lendo um arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log(data);
  }
);
