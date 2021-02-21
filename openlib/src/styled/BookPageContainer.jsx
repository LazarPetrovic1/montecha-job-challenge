import styled from 'styled-components'

const BookPageContainer = styled.article`
  max-width: 1000px;
  position: relative;
  margin: auto;
  padding: 2rem 0;
  & > h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  & > h4 {
    text-align: right;
  }
  & > section {
    margin: 1rem 0;
  }
  & > div {
    margin-top: 1rem;
    & > p {
      margin: 0.45rem 0;
    }
  }
  & .center {
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      margin: 0 1.5rem;
    }
  }
  & a {
    text-decoration: none;
    display: block;
    color: rgb(144, 200, 193);
    &:visited {
      color: rgb(156, 75, 140);
    }
  }
`

export default BookPageContainer;
