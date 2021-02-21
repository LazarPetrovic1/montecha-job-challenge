import styled from 'styled-components'

const Page = styled.button`
  border: 0;
  margin: 0 0.2rem;
  height: 2rem;
  width: 2rem;
  &:focus {
    outline: 0;
  }
  cursor: pointer;
  ${props => props.num && props.page && props.num === props.page && `
    background: #111;
    color: #eee;
  `}
  ${props => props.step && `
    border-radius: 50%;
    font-size: 17px;
    font-weight: bold;
  `}
`

export default Page;
