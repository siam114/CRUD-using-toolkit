import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditBook = () => {
  const location = useLocation();

  const [id,setId] = useState(location.state.id);
  const [title,setTitle] = useState(location.state.title);
  const [author,setAuthor] = useState(location.state.author);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const book = {id, title, author}
    // dispatch(updateBook(book));
    // navigate('/show-books', {replace: true});
  }

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={}>
        <div className='form-field'>
          <label htmlFor="title">Title: </label>
          <input type="text" id='title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor="author">Author: </label>
          <input type="text" id='author' name='author' value={author} onChange={(e)=> setAuthor(e.target.value)} required/>
        </div>
        <button type='submit'>Update Book</button>
      </form>
    </div>
  )
}

export default EditBook
