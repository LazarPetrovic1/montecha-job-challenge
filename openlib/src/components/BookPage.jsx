import BookPageContainer from '../styled/BookPageContainer';
import Chip from '../styled/Chip';
import axios from '../utils/search';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Page from '../styled/Page';
import Back from '../styled/Back';

function BookPage(props) {
  const [book, setBook] = useState({})
  const [authors, setAuthors] = useState([])
  const [coverIndex, setCoverIndex] = useState(0)

  useEffect(() => {
    (async function() {
      try {
        let arr = []
        const res = await axios.get(`/works/${props.match.params.id}.json`)
        setBook(res.data)
        if (res.data.authors) {
          for await (const auth of res.data.authors) {
            const newres = await axios.get(`${auth.author.key}.json`)
            await arr.push(newres.data.name)
          }
          await setAuthors(Array.from(arr))
        }
      } catch(e) {
        console.warn(e.message);
      }
    }());
  }, [])

  const setCoverIndexVal = (val) => {
    if (coverIndex + val < 0) {
      setCoverIndex(book.covers.length - 1)
    } else if (coverIndex + val > book.covers.length - 1) {
      setCoverIndex(0)
    } else {
      setCoverIndex(coverIndex + val)
    }
  }

  return (
    <BookPageContainer>
      <Back to="#" onClick={() => props.history.goBack()}>
        <i className="fas fa-chevron-left" />
      </Back>
      <h1>{book.title}</h1>
      {book.first_publish_date && <h4>Published: {book.first_publish_date}</h4>}
      {authors && authors.length > 0 && (
        <div>
          <p>-by</p>
          {authors.map(name => <Chip key={name}><h1>{name}</h1></Chip>)}
        </div>
      )}
      {book.covers && (
        <div>
          <p>Cover Art</p>
          <div className="center">
            <Page step={1} onClick={() => setCoverIndexVal(-1)}>
              <i className="fas fa-chevron-left" />
            </Page>
            <img
              src={`http://covers.openlibrary.org/b/id/${book.covers[coverIndex]}-L.jpg`}
              alt={`Cover art for ${book.title}`}
            />
            <Page step={1} onClick={() => setCoverIndexVal(1)}>
              <i className="fas fa-chevron-right" />
            </Page>
          </div>
        </div>
      )}
      {book.subjects && (
        <div>
          <p>This book can be found using these particular keywords:</p>
          {book.subjects.map(sub => <Chip key={sub}>{sub}</Chip>)}
        </div>
      )}
      {book.description && (
        <section>
          <h3>About</h3>
          <p>{book.description.value ? book.description.value : book.description}</p>
        </section>
      )}
      {book.subject_people && (
        <section>
          <h3>Characters</h3>
          {book.subject_people.map(sp => (
            <Chip key={sp}>{sp}</Chip>
          ))}
        </section>
      )}
      {book.subject_places && (
        <section>
          <h3>Sites/Places</h3>
          {book.subject_places.map(sp => (
            <Chip key={sp}>{sp}</Chip>
          ))}
        </section>
      )}
      {book.subject_times && (
        <section>
          <h3>The book is based during</h3>
          {book.subject_times.map(sp => (
            <Chip key={sp}>{sp}</Chip>
          ))}
        </section>
      )}
      {book.links && (
        <section>
          <h3>Relevant links:</h3>
          {book.links && book.links.map(link => <a target="_blank" key={link.url} href={link.url}>{link.title}</a>)}
        </section>
      )}
    </BookPageContainer>
  )
}

export default BookPage;
