const expressRouter = require("express").Router();
const { BooksController } = require("../controllers");

class BooksRouter{
    router;
    constructor() {
        this.router = expressRouter;
        this.setupRouters();
      }
    
      setupRouters() {
        this.router.get("/books", BooksController.getBooks);
        this.router.post("/books", BooksController.addBooks);
        this.router.delete("/books", BooksController.deleteBooks);
      }
    }
    
    module.exports = BooksRouter;