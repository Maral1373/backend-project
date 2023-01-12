import Book from "../model/bookModel.js";

export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.send(book);
  } catch (error) {
    next(error);
  }
};

export const postBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.send(book);
  } catch (error) {
    next(error);
  }
};
