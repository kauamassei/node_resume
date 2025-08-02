// const http = require("http");

// const port = 8080;

// const server = http.createServer((req, res) => {
//     if (req.url === "/home") {
//         res.writeHead(200,  {"content-type": "text/html" });
//         res.end("<h1>home page</h1>")
//     }

//     if (req.url === "/users") {
//         const users = [
//             {
//                 name: "John Doe",
//                 email: "johndoe@email.com"
//             },
//              {
//                 name: "Jane Doe",
//                 email: "janedoe@email.com"
//             },
//         ];

//         res.writeHead(200, {"content-type": "application/json" });
//         res.end(JSON.stringify(users));
//     }
// })

// // server.listen(port, () => console.log(`Rodando na porta ${port}!`))