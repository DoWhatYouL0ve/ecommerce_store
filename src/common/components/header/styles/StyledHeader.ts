import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: #fff;
  .header {
    width: 100%;
    height: 6rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    nav {
      width: 75%;
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;

        .logoMobile {
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
      padding-right: 1rem;
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
    .menuIcon {
      cursor: pointer;
      display: none;
    }
    @media screen and (max-width: 800px) {
      nav {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.darkBlue};
        padding: 1rem;
        z-index: 999;
        transform: translateX(-200%);
        transition: all 0.3s;

        .navWrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          transform: translateX();
          transition: all 0.3s;
        }

        .showNavWrapper {
          transform: translateX(100%);
        }

        ul {
          display: block;
          .logoMobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            > * {
              cursor: pointer;
            }
          }
          li {
            padding: 5px 0;
            border-bottom: 1px solid #333;
            a {
              display: block;
            }
          }
        }

        .headerRight {
          display: block;
          padding: 0;
          .links {
            display: block;
            a {
              display: block;
              margin: 0;
              padding: 5px 0;
              border-bottom: 1px solid #333;
            }
          }
        }
      }
      .showNav {
        transform: translateX(0);
      }
      .hideNav {
        transform: translateX(-200%);
      }
      .menuIcon {
        display: flex;
        > * {
          margin-left: 2rem;
        }
      }
    }
    .active {
      position: relative;
      color: ${props => props.theme.colors.dangerColor};
    }
    .active::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }
`
