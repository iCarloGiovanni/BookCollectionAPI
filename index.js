const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());

const books = [
  { id: 1, title: "Harry Potter and the Goblet of Fire" },
  { id: 2, title: "Dracula" },
  { id: 3, title: "The Great Gatsby" },
];

app.get("/", (req, res) => {
  res.send("Welcome to my book collection!");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("The book with the given ID was not found");
  }
  res.send(book);
});

app.post("/api/books", (req, res) => {
  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const book = {
    id: books.length + 1,
    title: req.body.title,
  };
  books.push(book);
  res.send(book);
});

app.put("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("The book with the given ID was not found");
  }
  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  book.title = req.body.title;
  res.send(book);
});

app.delete("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("The book with the given ID was not found");
  }
  const index = books.indexOf(book);
  books.splice(index, 1);
  res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

function validateBook(book) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
  });
  return schema.validate(book);
}
