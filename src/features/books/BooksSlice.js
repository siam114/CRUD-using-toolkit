import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
        {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee"},
    ],
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExists = state.books.filter((book) => book.id === id);
            if(isBookExists){
                isBookExists[0].title = title;
                isBookExists[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const bookId = action.payload;
            state.books = state.books.filter((book) => book.id !== bookId);
        },
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;