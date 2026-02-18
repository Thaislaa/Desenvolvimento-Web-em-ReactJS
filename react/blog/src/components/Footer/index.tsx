import { Hr, PFooter } from './styles'

export function Footer() {
  const message = false
  return (
    <footer>
      <Hr />
      <PFooter>₢ 2025 Meu Blog</PFooter>
      {message && <p>Obrigada por visitar nosso blog!</p>}
    </footer>
  )
}
