import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`
