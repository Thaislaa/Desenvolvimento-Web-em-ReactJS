import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%{
    transform: scale(1)
  }
  50%{
    transform: scale(1.2)
  }
  100%{
    transform: scale(1)
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px 10px 10px 0;
`
export const ContainerImg = styled.div`
  width: 100%;
  height: 350px;
`

interface Buttonprops {
  $primary?: boolean
}

export const Button = styled.button<Buttonprops>`
  background: ${(props) =>
    props.$primary
      ? props.theme.colors.primary
      : props.theme.colors.backgroundColor};
  color: ${(props) =>
    props.$primary
      ? props.theme.colors.backgroundColor
      : props.theme.colors.primary};

  font-size: 1em;
  margin-right: 10px;
  margin-top: 10px;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: white;
    color: ${(props) => props.theme.colors.primary};
    animation: ${pulse} 1s ease-in-out;
  }

  // &::before {
  //   content: '⭐';
  //   display: inline-block;
  //   margin-right: 0.5rem;
  // }
`

export const RoundedButton = styled(Button)`
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.title};
  text-decoration: none;
`
export const Article = styled.article`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 20px;

  .category {
    font-size: 13px;
    margin: 10px 0;
    line-height: 20px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
`

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`

export const DivInfos = styled.div`
  font-size: 13px;
`

export const Bold = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.colors.title};
`
export const P = styled.p`
  padding-bottom: 10px;
  font-size: 13px;
`
