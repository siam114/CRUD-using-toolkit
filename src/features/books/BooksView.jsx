import React from 'react'
import { useSelector } from 'react-redux'

const BooksView = () => {
  const books = useSelector((state)=>state.booksReducer.books);

  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default BooksView
