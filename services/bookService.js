import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() => {
    const books = await bookModel.getAllBooks();
    return books;
};

export const createBook = async(book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}