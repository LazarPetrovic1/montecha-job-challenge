import styled from 'styled-components'

const BookContainer = styled.article`
  margin: 0 1rem;
  padding: 2rem 0.5rem;
  height: 80vh;
  overflow: auto;
  ${props => props.booklen > 0 && "border: 1px solid white;"};
`

export default BookContainer;
