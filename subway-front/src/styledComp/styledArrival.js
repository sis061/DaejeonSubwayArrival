import styled from "styled-components";

export const ArrivalInfo = styled.div`
  max-width: 480px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  position: relative;

  .go-to-main {
    position: absolute;
    top: 1.5vh;
    left: 1vw;
    color: #fff;
    opacity:0.5;
    transition:0.3s;
      &:hover {
        opacity: 1;
    }
      &:hover .go-to-main-text {
        opacity: 1;
    }
  }

  .go-to-main-text{
    opacity:0;
    position:absolute;
    top:55%;
    left:120%;
    width: 6rem;
    height: 100%;
    font-size:1rem;
  }

  h1 {
    margin-top: 24vh;
    margin-bottom: 19vh;
    font-size: 4rem;
    text-align: center;
    font-size:6vh;
    z-index: 1;

  }

  .prevArrivalInfo,
  .nextArrivalInfo {
    opacity: 0.5;
    transition:0.3s;
    font-size: 1.7rem;
    font-weight: 600;
  }

  .prevArrivalInfo {
    position: absolute;
    top: 12.5vh;
    &:hover {
      opacity: 1;
    }
  }

  .nextArrivalInfo {
    position: absolute;
    top:40vh;
    right:0;
    &:hover {
      opacity: 1;
    }
  }

  .hidden{
    display:none;
  }

  .info-inner-wrap {
    border-top: 2px solid rgba(255, 255, 255, 0.7);
    padding-top: 2rem;
    margin-bottom: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    text-align: center;

    h3 {
      font-size: 3rem;
      width: 50%;
    }

    p {
      font-size: 3rem;
    }

    span {
      font-size: 8rem;
      font-weight: 600;
      width: 50%;
    }
  }

  .footer {
    bottom: 0;
    width: 100%;
    margin-left: 50%;
    transform: translate(-50%, 0);
    margin-bottom: 1vh;
    font-size: 0.7rem;
    text-align: center;
    opacity: 0.7;
  }
`;
