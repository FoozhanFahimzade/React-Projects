import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const Bookcontext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([]);

  const removeBook = (id) => {
    setBook(books.filter((book) => book.id !== id));
  };

  const addBook = (title, author, price) => {
    setBook([...books, { title, author, price, id: uuid() }]);
  };
  const editBook = (id,title, author, price) => {
    const index = books.findIndex((e) => e.id === id);
    setBook((prev) => {
      const edited = prev[index];
      edited.title = title;
      edited.author = author;
      edited.price = price;
      return [...prev];
    });
  };
  return (
    <Bookcontext.Provider
      value={{ books, removeBook, addBook, editBook }}
    >
      {props.children}
    </Bookcontext.Provider>
  );
};

export default BookContextProvider;
