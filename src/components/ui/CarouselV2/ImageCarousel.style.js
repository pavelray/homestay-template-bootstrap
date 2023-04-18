import css from "styled-jsx/css";

export const style = css`
  @import "../../../styles/mixins";
  .carousel-container {
    margin-top: -5vmin;

    @include mobile {
      margin-top: 0rem;
    }
    @include mobile-landscape {
      margin-top: 0rem;
    }
    @include tablet {
      margin-top: 0rem;
    }
  }

  .slide-container {
    position: relative;
    overflow: hidden;
    max-height: 110vmin;
  }

  .slide {
    display: flex;
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 500ms;
  }

  .video {
    width: 100vw;
  }

  .slide-control-wrapper {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.45) 100%
    );
  }

  .slide-control-center {
    justify-content: center;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 14px;
    right: 0px;
    left: 0px;
    z-index: 1;
  }

  .slide-content {
    color: rgb(247, 247, 247);
  }
  .hero-title {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    word-spacing: 0.3rem;

    @include mobile {
      font-size: 1rem;
    }
    @include mobile-landscape {
      font-size: 1rem;
    }
    @include tablet {
      font-size: 1rem;
    }
  }

  .hero-subtitle {
    @include mobile {
      font-size: .8rem;
    }
    @include mobile-landscape {
      font-size: .8rem;
    }
    @include tablet {
      font-size: 1rem;
    }
  }

  .text {
    @include mobile {
      font-size: .6rem;
    }
    @include mobile-landscape {
      font-size: .7rem;
    }
    @include tablet {
      font-size: 7rem;
    }
  }

  .carousel-indicators--wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .carousel-indicator {
    width: 0.9rem;
    height: 0.9rem;
    background: white;
    border-radius: 100%;
    opacity: 0.5;
  }

  .carousel-indicator--active {
    padding: 2px;
    opacity: 1;
  }
`;
