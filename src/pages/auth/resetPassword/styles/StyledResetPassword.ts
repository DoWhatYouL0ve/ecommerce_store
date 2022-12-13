import styled from 'styled-components'

export const StyledResetPassword = styled.div`
  width: 100%;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    .register {
      display: flex;
      justify-content: space-between;
    }
  }
`
