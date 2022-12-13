import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 1.2rem;
  line-height: 28px;
  font-weight: 400;
  padding: 6px 8px;
  margin: 0 5px 0 0;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  &.orange {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  &.dangerColor {
    background-color: ${({ theme }) => theme.colors.dangerColor};
  }
  &.success {
    background-color: ${({ theme }) => theme.colors.success};
  }
  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
