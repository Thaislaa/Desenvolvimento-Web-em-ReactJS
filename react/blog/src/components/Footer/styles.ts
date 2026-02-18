import styled from 'styled-components'

export const Hr = styled.hr`
  width: 100%;
  margin-top: 50px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
`
export const PFooter = styled.p`
  margin: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
`
