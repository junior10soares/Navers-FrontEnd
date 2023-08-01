import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  padding-bottom: 139px;
`
export const ContainerInf = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  h1 {
    font-size: 40px;
  }
  button {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
    width: 176px;
  }
`

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.white};
  button {
    font-size: 14px;
    color: ${(props) => props.theme.black};
    font-weight: bold;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`
export const ContainerNavers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 32px;
  grid-gap: 32px;

  main {
    display: flex;
    flex-direction: column;
  }
  strong {
    margin-top: 16px;
  }
  button {
    border: none;
    cursor: pointer;
    background: transparent;
  }
  p {
    margin-top: 5px;
  }
  footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
`
