const { Books } = require("../models");

const getBooks = app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books);
  });

const deleteBooks = app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndRemove(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.status(204).send();
  });

const addBooks = app.post('/books', async (req, res) => {
    let book = new Book({ title: req.body.title, author: req.body.author });
    book = await book.save();
    res.send(book);
  });

module.exports = {getBooks, deleteBooks, addBooks};