const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

const baseAPIUrl = "http://www.djtc.kr/OpenAPI/service/TimeTableSVC/getAllTimeTable?";

const getAPI = async () => {
  try {
    const response = await axios.get(baseAPIUrl, {
      params: {
        ServiceKey: "Triqfgx2gAo3E0kaY05/FHftk4zX1ji64QZrtwolupcU2ty5Bh3yqv4lBc0WCQYJ+00A5eWLAJRZFHjaVQAPaQ=="
      }
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

app.get(`/`, (req, res) => {
  res.send("Hello, this is the root path!");
});

app.get(`/arrivalinfo/:id`, async (req, res) => {
  try {
    const response = await getAPI(req);
    res.send(response.data);
  } catch (error) {
    console.error(error.message); // 에러 메시지를 출력
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

