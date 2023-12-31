import React from "react";
import { useSelector } from "react-redux";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);

  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map(({id, title, author}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
