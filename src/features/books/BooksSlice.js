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
    }
})

export const { showBooks } = bookSlice.actions;

export default bookSlice.reducer;