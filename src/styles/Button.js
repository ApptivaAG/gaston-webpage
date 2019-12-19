import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  padding: 0.6em 2em;
  margin-bottom: 2em;
  border: 0.16em solid ${p => p.theme.primary};
  border-radius: 0.4em;
  font-weight: bold;
  color: ${p => p.theme.primary};
  background: transparent;
  transition: transform 30ms ease-out;
  transform: translate3d(0, 0, 0);
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translate3d(0, -1px, 0);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 380px) {
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`
export default Button
