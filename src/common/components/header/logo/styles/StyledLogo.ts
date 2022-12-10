import styled from 'styled-components'

export const StyledLogo = styled.div`
  a h2 {
    min-width: 58px;
    color: #fff;
    cursor: pointer;
    span {
      color: ${props => props.theme.colors.orangered};
    }
  }
`
