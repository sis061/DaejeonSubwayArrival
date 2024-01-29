import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import * as styled from "../styledComp/styledMain";

function Main() {
  const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  };
  window.addEventListener('resize', setVh);
  setVh();

  let StationIdData = useSelector((state) => state.StationNameData.stationId);

  return (
    <styled.Main>
      <div className="img-wrap">
        <img src="/img/subway.png" alt="" className="main-bg" />
      </div>
      <h1>대전 지하철 NOW!</h1>
      <div className="station-list-wrap">
        {StationIdData.map((e, i) => (
          <StationList key={i} StationIdData={StationIdData[i]} i={i + 101} />
        ))}
      </div>
      <div className="footer">
        <p>© 2024. 정성우. all rights reserved.</p>
        <p>대전교통공사에서 제공하는 열차시각표를 기준으로 제작되었습니다.</p>
      </div>
    </styled.Main>
  );
}

function StationList(props) {
  return (
    <styled.StationList>
      <Link to={`arrivalinfo/` + props.i} className="list-item">
        <span className="list-item-inner">{props.StationIdData.name}</span>
      </Link>
    </styled.StationList>
  );
}

export default Main;
