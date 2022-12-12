import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px 4px ${({ theme }) => theme.colors.boxShadow};
  overflow: hidden;
`
