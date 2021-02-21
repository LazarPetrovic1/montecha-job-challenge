import { Link } from 'react-router-dom';
import styled from 'styled-components'

const BookLink = styled(Link)`
  text-decoration: none;
  color: rgb(144, 200, 193);
  &:visited {
    color: rgb(156, 75, 140);
  }
`

export default BookLink;
