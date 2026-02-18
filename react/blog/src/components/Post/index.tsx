import type { IPost } from '../../types'
import {
  Article,
  Avatar,
  Bold,
  Button,
  ContainerImg,
  DivFlex,
  DivInfos,
  P,
  RoundedButton,
  StyledLink,
} from './styles'

export function Post(props: IPost) {
  console.log('Post renderizado:', props.title)

  const conteudoExtra = false

  function handleLike(title: string) {
    alert(`Você curtiu o post: ${title}`)
  }

  return (
    <Article>
      <ContainerImg>
        <img src={props.image} alt={props.title} />
      </ContainerImg>
      <p className="category">{props.category}</p>

      <h2>
        <StyledLink to={`/post/${props.id}`}>{props.title}</StyledLink>
      </h2>

      <DivFlex>
        <Avatar src={props.avatar} alt={props.author} />
        <DivInfos>
          <Bold>{props.author}</Bold>
          <div>
            <span>{props.createdAt}</span>
          </div>
        </DivInfos>
      </DivFlex>

      <P>{props.description}</P>

      {props.children}

      {conteudoExtra ? (
        <button>Leia Mais</button>
      ) : (
        <P>Nenhum conteúdo extra disponível</P>
      )}

      <Button onClick={() => handleLike(props.title)}>Curtir</Button>

      <RoundedButton $primary as="a">
        Compartilhar
      </RoundedButton>
    </Article>
  )
}
