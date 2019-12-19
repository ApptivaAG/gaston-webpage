import styled from 'styled-components'

const Right = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-end;
  a,
  button {
    width: 100%;
  }
  @media (min-width: 600px) {
    a,
    button {
      flex: 0 1 50%;
    }
  }
`

export default Right
