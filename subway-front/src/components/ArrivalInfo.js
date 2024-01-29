import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  faGrip,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styled from "../styledComp/styledArrival";

function ArrivalInfo() {
  const setVh = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", setVh);
  setVh();

  // URL 파라미터에서 id 추출
  let { id } = useParams();

  // Redux에서 역 정보 가져오기
  const StationIdData = useSelector((state) => state.StationNameData.stationId);

  // 역 도착 정보를 담을 state
  const [timeData, setTimeData] = useState([]);

  // 역 도착 정보 API 호출 함수
  const callApi = async () => {
    try {
      const response = await axios.get(
        `https://port-0-daejeonsubwayback-ghdys32blrus26tf.sel5.cloudtype.app/arrivalinfo/${id}`
      );
      const resultList = response.data.response.body.items.item;
      setTimeData(resultList);
    } catch (error) {
      console.error("Error fetching arrival info:", error);
    }
  };

  // 컴포넌트가 마운트되거나 id가 변경될 때 API 호출
  useEffect(() => {
    callApi();
  }, [id]);

  // 현재 시간 정보 가져오기
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  // 해당 역과 방향에 대한 도착 정보 필터링
  const resStNum = timeData.filter((data) => data.stNum === Number(id));
  const currentDay = new Date().getDay();
  // 주중(1~5, 월요일부터 금요일)인 경우 dayType이 0인 것만 선택, 그 외에는 dayType이 1인 것만 선택
  const resDay = resStNum.filter((data) =>
    currentDay > 0 && currentDay < 6 ? data.dayType === 0 : data.dayType === 1
  );

  // 상행열차(0)만 선택
  const resDrctUp = resDay.filter((data) => data.drctType === 0);

  // 하행열차(1)만 선택
  const resDrctDown = resDay.filter((data) => data.drctType === 1);

  // 도착 시간과 분을 담을 배열 생성
  const extractMinutesArray = (data) => {
    return typeof data.tmList === "string" ? data.tmList.split(" ") : [];
  };

  const stationMinuteUp = resDrctUp.map(extractMinutesArray);
  const stationHourUp = resDrctUp.map((data) => data.tmZone);

  const stationMinuteDown = resDrctDown.map(extractMinutesArray);
  const stationHourDown = resDrctDown.map((data) => data.tmZone);

  // 남은 도착 시간을 계산하는 함수
  const calculateRemainingTime = (hour, minute, stationHour, stationMinute) => {
    // 현재 시간대에 해당하는 역 시간의 인덱스 찾기
    const currentIndex = stationHour.indexOf(hour);

    // 인덱스가 유효하지 않거나 해당 시간대에 도착 정보가 없으면 null 반환
    if (currentIndex === -1 || !stationMinute[currentIndex]?.length) {
      return null;
    }

    // 해당 시간대의 분 정보 배열 가져오기
    const minuteArrayForHour = stationMinute[currentIndex];

    // console.log(minuteArrayForHour);

    // 남은 도착 시간 계산
    const remainingTime = minuteArrayForHour
      .map((arrivalMinute) => {
        // 현재 분보다 나중에 도착하는 시간 찾기
        const currentMinuteValue = parseInt(arrivalMinute);
        if (currentMinuteValue > minute) {
          return { hour, minute: currentMinuteValue - minute };
        } else {
          return null;
        }
      })
      .filter(Boolean);
    //.filter(Boolean) 통해 남은 시간이 있는 경우만 필터링.

    // 남은 도착 시간이 있는 경우 첫 번째 값 반환
    if (remainingTime.length > 0) {
      return remainingTime[0];
    }

    // 다음 시간대로 넘어가기
    const nextHourIndex = (currentIndex + 1) % stationHour.length;
    const nextHour = stationHour[nextHourIndex];
    const nextMinuteValue = parseInt(stationMinute[nextHourIndex][0]);
    const nextHourRemainingMinutes = 60 - minute + nextMinuteValue;

    // 다음 시간대의 남은 도착 시간 반환
    return { hour: nextHour, minute: nextHourRemainingMinutes };
  };

  // 남은 도착 시간 계산
  const remainingTimeUp = calculateRemainingTime(
    currentHour,
    currentMinute,
    stationHourUp,
    stationMinuteUp
  );
  const remainingTimeDown = calculateRemainingTime(
    currentHour,
    currentMinute,
    stationHourDown,
    stationMinuteDown
  );

  // console.log(`남은 시간 (상행): ${remainingTimeUp ? remainingTimeUp.minute : '도착정보를 기다리는 중..'}분`);
  // console.log(`남은 시간 (하행): ${remainingTimeDown ? remainingTimeDown.minute : '도착정보를 기다리는 중..'}분`);

  // 화면에 출력

  const prevStation = StationIdData[id - 102]?.name;
  const nextStation = StationIdData[id - 100]?.name;
  const [prevStationClassName, setPrevStationClassName] = useState("");
  const [nextStationClassName, setNextStationClassName] = useState("");

  useEffect(() => {
    setPrevStationClassName(prevStation === undefined ? "hidden" : "");
  }, [prevStation, prevStationClassName]);

  const handlePrevLinkClick = () => {
    if (prevStation === undefined) {
      setPrevStationClassName(prevStationClassName);
    }
  };

  useEffect(() => {
    setNextStationClassName(nextStation === undefined ? "hidden" : "");
  }, [nextStation]);

  const handleNextLinkClick = () => {
    if (nextStation === undefined) {
      setNextStationClassName("hidden");
    }
  };

  return (
    <styled.ArrivalInfo>
      <Link to={`/`} className="go-to-main">
        <FontAwesomeIcon icon={faGrip} size="4x" />
        <span className="go-to-main-text">전체 목록 보기</span>
      </Link>
      <span className="prevArrivalInfo">
        <Link
          to={`/arrivalinfo/${Number(id) - 1}`}
          onClick={handlePrevLinkClick}
          className={prevStationClassName}
        >
          <FontAwesomeIcon icon={faAnglesLeft} style={{ marginRight: `5px` }} />
          {prevStation}
        </Link>
      </span>
      <h1>{StationIdData[id - 101]?.name}</h1>
      <span className="nextArrivalInfo">
        <Link
          to={`/arrivalinfo/${Number(id) + 1}`}
          onClick={handleNextLinkClick}
          className={nextStationClassName}
        >
          {nextStation}
          <FontAwesomeIcon icon={faAnglesRight} style={{ marginLeft: `5px` }} />
        </Link>
      </span>
      <div className="info-inner-wrap">
        <h3>판암행</h3>
        <h3>반석행</h3>
        <p>
          <span>{remainingTimeUp ? `${remainingTimeUp.minute}` : "..."}</span>분
        </p>
        <p>
          <span>
            {remainingTimeDown ? `${remainingTimeDown.minute}` : "..."}
          </span>
          분
        </p>
      </div>
      <div className="footer">
          <p>© 2024. 정성우. all rights reserved.</p>
          <p>대전교통공사에서 제공하는 열차시각표를 기준으로 제작되었습니다.</p>
        </div>
    </styled.ArrivalInfo>
  );
}

export default ArrivalInfo;
