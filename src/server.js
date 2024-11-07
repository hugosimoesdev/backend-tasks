import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/tasks") {
    return res.end(users);
  }
});

server.listen(3333);
