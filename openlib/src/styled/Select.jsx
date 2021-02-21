import styled from 'styled-components'

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid white;
  font-size: 17px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  font-weight: bolder;
  &:focus {
    outline: 0;
  }
`

export default Select;
