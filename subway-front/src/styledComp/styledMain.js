import styled from "styled-components";


export const Main = styled.main`
  background-color: #007448;
  max-width: 480px;
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-flow: column;

  .img-wrap{
    position:relative;
  }

  .main-bg {
    position: absolute;
    width: 30%;
    height: auto;
    top: 5vh;
    left: 57.5%;
    z-index: 0;
  }

  h1 {
    text-align: center;
    font-size: 4.5vh;
    margin-top: 11vh;
    z-index: 1;
  }

  .station-list-wrap {
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
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

export const StationList = styled.div`
  background-color: #00834c;
  width: 21%;
  height: 9vh;
  margin: 2%;
  text-align: center;
  display: flex;
  border-radius: 10%;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in-out;
  }

  .list-item {
    font-size: 1.2em;
    font-weight: 600;
    width: 100%;
    height: 100%;
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-item-inner {
    padding: 0;
  }
`;
