const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.pljjzvu.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJs`
    );
    console.log("Conexão realizada com sucesso!");
    
  } catch (error) {
    return console.log("Houve uma falha na requisição");
  }
};

module.exports = connectToDatabase;
