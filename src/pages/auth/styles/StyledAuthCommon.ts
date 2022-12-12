import styled from 'styled-components'

export const StyledAuthCommon = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orangered;
  .img {
    animation: slide-down 0.5s ease;
  }

  .form {
    width: 35rem;
    padding: 1.5rem;
    animation: slide-up 0.5s ease;
    h2 {
      color: ${({ theme }) => theme.colors.dangerColor};
      text-align: center;
      font-size: 30px;
    }
    form {
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        display: block;
        font-size: 1.6rem;
        font-weight: 300;
        padding: 1rem;
        margin: 1rem auto;
        width: 100%;
        border: 1px solid #777;
        border-radius: 3px;
        outline: none;
      }
      .links {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        a {
          color: ${({ theme }) => theme.colors.grey};
          :hover {
            text-decoration: underline;
          }
        };
      }

      p {
        text-align: center;
        margin: 1rem;
      }
    }
    .register {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      a {
        color: ${({ theme }) => theme.colors.grey};
        margin-left: 5px;
        :hover {
          text-decoration: underline;
        }
      }
    };
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(-5rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slide-down {
    0% {
      transform: translateY(5rem);
    }
    100% {
      transform: translateY(0);
    }
  }


@media screen and (max-width: 700px) {
  .img {
    display: none;
  }
`
