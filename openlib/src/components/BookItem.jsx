import { Fragment } from 'react';
import BookLink from '../styled/BookLink';

function BookItem({ book }) {
  return (
    <div>
      <h2><BookLink to={book.key.split("/")[2]}>{book.title}</BookLink></h2>
      {
        book.author_name && (
          <h3>
            -by {
              book.author_name &&
              book.author_name.length === 1 ?
              book.author_name[0] :
              book.author_name.join(", ")
            }
          </h3>
        )
      }
    </div>
  )
}

export default BookItem;
