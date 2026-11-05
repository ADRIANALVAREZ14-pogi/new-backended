import * as bookModel from '../models/bookModel.js';
import ValidationError from '../utils/ValidationError.js';    

export const fetchAllBooks = async() => {
    const books = await bookModel.getAllBooks();
    return books;
};

const doesbookExist = async (book) => {
    let existing;
    if(Object.hasOwn(book, 'id')){
        existing = await bookModel.findBookById(book.id);
    }else{
        existing = await bookModel.findBookByNameAndAuthor(book);
    }   

    if(existing.length > 0) {
        return true;
    }

    return false;
}

export const createBook = async(book) => {
    if(!book.name || !book.author){
        throw new ValidationError(404, "Name and author is required!");
    }

    const existing = await doesbookExist(book);

    if(existing){
        throw new ValidationError(409, 'Book already exist!');
    }

    const bookId = await bookModel.insert(book);
    return bookId;
}    

export const updateBook = async(book) => {
    if(!book.name || !book.author){
        throw new ValidationError(404, "Name and author is required!");
    }

    const existing = await doesbookExist(book);

    if(!existing){
        throw new ValidationError(409, 'Book does not exist!');
    }

    const bookId = await bookModel.insert(book);
    return bookId;
}   

export const deleteBook = async(id) =>{
    const book = {id};
    const existing = await doesbookExist(book);

    if(!existing){
        throw new ValidationError(404, 'Book does not exist!');
    }
    
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}   