const path = require("path");

// Apenas nome do arquivo atual
console.log(path.basename(__filename))

// NOme do diretório atual
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar objeto path
console.log(path.parse(__filename))

// Juntar caminho de arquivos
console.log(path.join(__dirname, "test", "test.html"));