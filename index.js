// const { Person } = require("./person");
const connectToDatabase = require("./src/database/connect");
const dotenv = require("dotenv");

dotenv.config();
connectToDatabase();
// const person = new Person("Kauã");
require("./modules/express");

// console.log(person.sayMyName());
