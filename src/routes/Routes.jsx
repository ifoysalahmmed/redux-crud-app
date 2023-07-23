import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/show-books",
        element: <BooksView></BooksView>,
      },
      {
        path: "/add-book",
        element: <AddBook></AddBook>,
      },
    ],
  },
]);
