import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px;
  width: 400px;
  margin-right: 10px;
`

export const Button = styled.button`
  padding: 10px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
`

export const Subtitle = styled.h2`
  font-size: 36px;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 10px;
`

export const Description = styled.p`
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.textColor};
`
