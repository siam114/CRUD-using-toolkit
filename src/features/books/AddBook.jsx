import React, { useState } from 'react'

const AddBook = () => {
  const [title, setTitle] = useState('')
  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <div className='form-field'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name='title' value={title}/>
        </div>
      </form>
    </div>
  )
}

export default AddBook
