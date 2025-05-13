import React, { useState } from 'react'

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <div className='form-field'>
          <label htmlFor="title">Title: </label>
          <input type="text" id='title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor="author">Author: </label>
          <input type="text" id='author' name='author' value={author} onChange={(e)=> setAuthor(e.target.value)} required/>
        </div>
      </form>
    </div>
  )
}

export default AddBook
