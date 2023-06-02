import React from 'react'
import "./book.css"
const Book = () => {
  return (
    <form> 
         
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input style={{cursor:"pointer"}} type="submit" value="Pay"/>
</form>
  )
}

export default Book
