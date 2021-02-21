import styled from 'styled-components'

const Search = styled.input.attrs(() => ({
  type: "search"
}))`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border: 1px solid white;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: 18px;
  font-weight: bolder;
  min-width: 350px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  &:focus {
    outline: 0;
  }
`

export default Search;
