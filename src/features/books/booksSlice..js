import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = booksSlice.actions;

export default booksSlice.reducer;
