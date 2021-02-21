import styled from 'styled-components'

const SearchButton = styled.button`
  padding: 0.5rem;
  border: 1px solid white;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;
  font-weight: bolder;
  &:focus {
    outline: 0;
  }
`

export default SearchButton;
