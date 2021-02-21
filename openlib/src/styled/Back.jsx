import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Back = styled(Link)`
  font-size: 2.2rem;
  position: absolute;
  top: 2rem; ${'' /* top padding in parent element */}
  left: 0;
  border: 1px solid white;
  padding: 0.25rem 1rem;
  color: white !important;
  border-radius: 50%;
`

export default Back;
