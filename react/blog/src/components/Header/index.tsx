import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import {
  Container,
  Wrapper,
  ContainerInitial,
  Logo,
  Title,
  Message,
} from './style'

export function Header() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) return null

  const { toggleTheme } = themeContext

  const isLogged = false

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Meu Blog</Title>
          <Message>
            {isLogged
              ? 'Seja bem-vindo de novo!'
              : 'Por favor, faça login para continuar.'}
          </Message>
        </div>

        <ContainerInitial>
          <Logo src="https://cdn-icons-png.flaticon.com/512/10045/10045917.png" />
        </ContainerInitial>

        <button onClick={toggleTheme}>Alterar Tema</button>
      </Container>
    </Wrapper>
  )
}
