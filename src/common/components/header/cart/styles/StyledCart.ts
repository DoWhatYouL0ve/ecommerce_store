import styled from 'styled-components'

export const StyledCart = styled.span`
  a {
    display: flex;
    color: ${props => props.theme.colors.white};
    position: relative;
    &:hover {
      color: ${props => props.theme.colors.orange};
    }
    &.active {
      color: ${props => props.theme.colors.dangerColor};
    }
    p {
      position: absolute;
      top: -1rem;
      right: -1rem;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 800px) {
    display: block;
    padding: 5px 0;
    border-bottom: 1px solid #333;
    a {
      color: #fff;
      position: relative;
      &:hover {
        color: orangered;
      }
      p {
        position: absolute;
        top: -1rem;
        left: 3.5rem;
        font-weight: 500;
        color: #fff;
      }
    }
  }
`
