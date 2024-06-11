const express = require("express");

class Server {
  #expressApp;
  #routers;
  constructor(routers = []) {
    this.#expressApp = express();
    this.#routers = routers;
    this.#middleware();
    this.#setupRouters();
  }

  #middleware() {
    this.#expressApp.use(cors());
    this.#expressApp.use(express.json());
  }

  #setupRouters() {
    this.#routers.forEach((expressRouter) => {
      this.#expressApp.use(expressRouter.router);
    });
  }

  start() {
    const db = new Db();
    db.test()
      .then(() => {
        this.#expressApp.listen(5000, () => {
          console.log("db is connected");
          console.log("listen to port 5000");
        });
      })
      .catch((err) => console.log("something went wrong with the db"));
  }
}

module.exports = Server;