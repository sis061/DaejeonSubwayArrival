# 대전 지하철 NOW! - 대전 지하철 실시간 도착정보 웹 앱
 SPA web app - Real-time Arrivals for Daejeon Subway Line #1


<img src="https://github.com/sis061/DaejeonSubwayArrival/blob/master/result/IMG_9628.JPG" width="600" height="auto" />

## 🖥 &nbsp;프로젝트 소개
대전 지하철 1호선의 실시간 도착 정보를 보여주는 웹 앱입니다. 

공공데이터포털에서 제공하는 [대전교통공사 열차시각표](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000960)를 활용, 역 별 남은 도착 시간을 직관적으로 보여줍니다.

### 🔗 &nbsp;배포 URL 
 <https://daejeonsubway-arrival.netlify.app/>


## 🐈 &nbsp;기술 스택 

- Environment

  
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

- Development

  
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

- Deploy


  <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"> 

## 📄 &nbsp;화면 구성 및 기능
+ 메인(홈)

  - 전체 역명을 보여줍니다. 해당 역을 클릭해 역별 세부페이지로 이동합니다.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="https://github.com/sis061/DaejeonSubwayArrival/blob/master/result/screenshot-main.png" width="300" height="auto" />
    
+ 도착정보

  - 해당 역의 도착정보를 보여줍니다.
  - 상행(판암행) 및 하행(반석행) 열차의 남은 도착 시간(분)을 각각 보여줍니다.
  - 전체 역을 확인할 수 있게 메인으로 돌아가는 버튼이 제공됩니다.
  - 이전 역 / 다음 역으로 이동할 수 있는 버튼이 제공됩니다.

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="https://github.com/sis061/DaejeonSubwayArrival/blob/master/result/screenshot-sub.png" width="300" height="auto" />






