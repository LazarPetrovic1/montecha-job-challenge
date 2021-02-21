import { useState, useEffect } from 'react';
import axios from '../utils/search'
import SearchForm from '../styled/SearchForm';
import SearchButton from '../styled/SearchButton';
import Search from '../styled/Search';
import Select from '../styled/Select';
import BookContainer from '../styled/BookContainer';
import Page from '../styled/Page';
import PageContainer from '../styled/PageContainer';
import BookItem from './BookItem';
import range from '../utils/range';

function Home() {
  const [settings, setSettings] = useState({
    searchBy: 'q',
    search: "",
    books: [],
    page: 1,
    maxPages: 0
  })

  const { searchBy, search, books, page, maxPages } = settings
  const onChange = e => setSettings({ ...settings, [e.target.name]: e.target.value })

  const getBooks = async () => {
    const res = await axios.get(`/search.json?${searchBy}=${search.replaceAll(" ", "+")}&page=${page}`)
    await setSettings({
      ...settings,
      books: res.data.docs,
      maxPages: Math.ceil(res.data.numFound / 100) // max 100, must hardcode instead of res.data.docs.length because of last page
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    getBooks()
  }

  useEffect(() => {
    getBooks()
  }, [page])

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <Search
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={onChange}
        />
        <Select
          name="searchBy"
          value={searchBy}
          onChange={onChange}
        >
          <option disabled>--- Choose ---</option>
          <option value="q">Everything</option>
          <option value="author">Author name</option>
          <option value="title">Book title</option>
        </Select>
        <SearchButton type="submit">
          <i className="fas fa-search" />
        </SearchButton>
      </SearchForm>
      <BookContainer booklen={books.length}>
        {books.length > 0 && books.map(book => (
          <BookItem book={book} key={book.key} />
        ))}
      </BookContainer>
      <PageContainer>
        {maxPages > 0 && (
          <Page step={1} onClick={e => setSettings({ ...settings, page: page - 1 })}>
            <i className="fas fa-chevron-left" />
          </Page>
        )}
        {range(maxPages).map(x => (
          <Page step={0} onClick={e => setSettings({ ...settings, page: x })} page={page} num={x} key={x}>
            {x}
          </Page>
        ))}
        {maxPages > 0 && (
          <Page step={1} onClick={e => setSettings({ ...settings, page: page + 1 })}>
            <i className="fas fa-chevron-right" />
          </Page>
        )}
      </PageContainer>
    </div>
  )
}

export default Home;
