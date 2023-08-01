import { PencilSimple, TrashSimple } from '@phosphor-icons/react'
import { LogoNavers } from '../../assets/logo-navers'
import {
  ContainerHeader,
  Container,
  ContainerNavers,
  ContainerInf,
} from './styles'
import joseimg from '../../assets/joseimg.png'

export function Navers() {
  const timeStamp = '1565045589'
  const apiPublic = '46502e31af29d6f9268225533bfadb8d'
  const md5 = 'dac4146118190d813f8cd5ca4b795be2'

  function teste() {
    console.log(
      `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiPublic}&hash=${md5}.data`,
    )
  }
  return (
    <Container>
      <ContainerHeader>
        <button>
          <LogoNavers />
        </button>
        <button>Sair</button>
      </ContainerHeader>

      <ContainerInf>
        <h1>Navers</h1>
        <button onClick={teste}>Adicionar Naver</button>
      </ContainerInf>

      <ContainerNavers>
        <main>
          <img src={joseimg} alt="" />
          <strong>Fred Lopes</strong>
          <p>Front-end Developer</p>
          <footer>
            <button>
              <TrashSimple />
            </button>
            <button>
              <PencilSimple />
            </button>
          </footer>
        </main>
        <main>
          <img src={joseimg} alt="" />
          <strong>José Reis</strong>
          <p>Front-end Developer</p>
          <footer>
            <button>
              <TrashSimple />
            </button>
            <button>
              <PencilSimple />
            </button>
          </footer>
        </main>
        <main>
          <img src={joseimg} alt="" />
          <strong>Mariano Couto</strong>
          <p>Front-end Developer</p>
          <footer>
            <button>
              <TrashSimple />
            </button>
            <button>
              <PencilSimple />
            </button>
          </footer>
        </main>
        <main>
          <img src={joseimg} alt="" />
          <strong>Roberto de Assis</strong>
          <p>Front-end Developer</p>
          <footer>
            <button>
              <TrashSimple />
            </button>
            <button>
              <PencilSimple />
            </button>
          </footer>
        </main>
      </ContainerNavers>
    </Container>
  )
}
