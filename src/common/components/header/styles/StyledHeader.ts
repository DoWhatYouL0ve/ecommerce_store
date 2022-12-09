import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: #fff;
  .header {
    width: 100%;
    height: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo a h2 {
      min-width: 56px;
      color: #fff;
      cursor: pointer;
      span {
        color: ${props => props.theme.colors.orangered};
      }
    }
    nav {
      width: 75%;
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;

        .logo-mobile {
          display: none;
        }

        li {
          margin: 0 5px;
          a {
            color: ${props => props.theme.colors.white};
            &:hover {
              color: ${props => props.theme.colors.orangered};
            }
          }
        }
      }
    }
    .headerRight {
      display: flex;

      .cart a {
        display: flex;
        color: ${props => props.theme.colors.white};
        position: relative;
        &:hover {
          color: ${props => props.theme.colors.orangered};
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

      span {
        margin: 0 5px;

        p {
          color: ${props => props.theme.colors.white};
        }
      }

      .links a {
        margin: 0 5px;
        color: ${props => props.theme.colors.white};
        &:hover {
          color: ${props => props.theme.colors.orangered};
        }
        &.active {
          color: ${props => props.theme.colors.dangerColor};
        }
      }
    }
  }
`
