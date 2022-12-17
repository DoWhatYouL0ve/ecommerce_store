import styled from 'styled-components'

export const StyledLoadingWrapper = styled.div`
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .loading_line_wrapper {
    width: 100%;
    height: 5px;
    position: absolute;
    top: auto;
    left: 0;
    bottom: -5px;
    right: auto;
  }
  .loading_line {
    position: relative;
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    width: 100%;
    height: 100%;
    transform-origin: 100% 0;
    animation: kf_loading_line 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite;
    .loading_line_inner {
      position: absolute;
      top: 0;
      left: 0;
      bottom: auto;
      right: auto;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.dangerColor};
      transform-origin: 0 0;
    }
  }
  .loading_line_inner--1 {
    opacity: 0; //change for inner line opacity, currently 0/hidden
    animation: kf_loading_line_inner--1 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite;
  }
  .loading_line_inner--2 {
    opacity: 0.5;
    animation: kf_loading_line_inner--2 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite;
  }
  .loading_line_inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-color: red;
    transform-origin: 0 0;
  }
  @keyframes kf_loading_line {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
  @keyframes kf_loading_line_inner--1 {
    0% {
      transform: scaleX(0);
    }
    25% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
  @keyframes kf_loading_line_inner--2 {
    0% {
      transform: scaleX(0);
    }
    25% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
`
