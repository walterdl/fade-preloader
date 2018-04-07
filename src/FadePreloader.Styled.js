import styled from "styled-components"

// Own
import FadePreloader from "./FadePreloader"

const FadePreloader_Styled = styled(FadePreloader)`
  display: none;
  background-color: white;
  height: 100vh;
  position: fixed;
  opacity: 0;
  width: 100vw;
  z-index: 16;

  &.is-present {
    display: block;
  }

  &.fade-in-no-transition {
    opacity: 1;
  }

  &.fade-out-no-transition {
    opacity: 0;
  }

  &.fade-in {
    transition: opacity 2s;
    opacity: 1;
  }

  &.fade-out {
    transition: opacity 2s;
    opacity: 0;
  }

  .content {
    text-align: center;
    margin-top: 25vh;

    img {
      max-height: 115px;
    }

    .saving {
      line-height: 0;

      span {
        animation-name: blink;
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        font-size: 9rem;

        &:nth-child(2) {
          animation-delay: .2s;
        }

        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: .2;
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: .2;
    }
  }
`
export default FadePreloader_Styled