import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 30px 0;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerInitial = styled.div`
  display: flex;
  flex-direction: row;
`
const bouce = keyframes`
  0%, 100%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-10px);
  }
`

export const Logo = styled.img`
  width: 100px;
  margin-left: auto;
  animation: ${bouce} 1.2s ease-in-out;
`

export const Title = styled.h1`
  font-size: 46px;
  color: ${(props) => props.theme.colors.title};
`

export const Message = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  padding-top: 10px;
`
