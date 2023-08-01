import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 156px;
  padding-bottom: 156px;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 408px;
  border: 1px solid black;
  padding: 40px 32px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  strong {
    color: ${(props) => props.theme.black};
    line-height: 18px;
    font-size: 14px;
    margin-top: 40px;
  }
  input {
    border: 1px solid black;
    padding-left: 8px;
    height: 40px;
    margin-top: 4px;
  }
  button {
    margin-top: 32px;
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    border: none;
    height: 40px;
    font-size: 14px;
    cursor: pointer;
  }
`
