import { LogoHome } from '../../assets/logo-home'
import { ContainerLogin, Container } from './styles'

export function Login() {
  return (
    <Container>
      <ContainerLogin>
        <header>
          <LogoHome />
        </header>

        <strong>E-mail</strong>
        <input type="text" placeholder="E-mail" />
        <strong>Senha</strong>
        <input type="text" placeholder="Senha" />
        <button>Entrar</button>
      </ContainerLogin>
    </Container>
  )
}
