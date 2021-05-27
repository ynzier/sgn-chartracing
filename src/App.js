import React, { useState } from "react";
import "./App.css";
import useInterval from "./useInterval";
import axios from "axios";
import Racingchart2 from "./racingchart2";
import moment from "moment";

const getRandomIndex = (array) => {
  return Math.floor(array.length * Math.random());
};

function App() {
  const [iteration, setIteration] = useState(0);
  const [start, setStart] = useState(false);
  const [date, setDate] = useState();

  var i = 21;
  var mstime = 1619456400000;
  const day = 86400000;

  const [testdata, setTestData] = useState();
  const fetch = () => {  if (testdata == null) {
    axios
      .get("https://disease.sh/v3/covid-19/historical?lastdays=30")
      .then((res) => {
        setTestData(res.data);
        var test = moment(1619370000000 + day).format("M/D/YY");
        test = moment(1619456400000).format("M/D/YY");
        setDate(test)
      });
  } else 
    console.log(testdata);
  }
  const [data, setData] = useState([
    {
      name: "alpha",
      value: 10,
      color: "#f4efd3",
    },
    {
      name: "beta",
      value: 15,
      color: "#cccccc",
    },
    {
      name: "charlie",
      value: 20,
      color: "#c2b0c9",
    },
    {
      name: "delta",
      value: 25,
      color: "#9656a1",
    },
    {
      name: "echo",
      value: 30,
      color: "#fa697c",
    },
    {
      name: "foxtrot",
      value: 35,
      color: "#fcc169",
    },
  ]);

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex(data);
      setData(
        data.map((entry, index) =>
          index === randomIndex
            ? {
                ...entry,
                value: entry.value + 10,
              }
            : entry
        )
      );
      setIteration(iteration + 1);
    }
  }, 100);

  return (
    <div>
      <p></p>
      <div className="headertext">
        <b>Covid Global Cases by SGN</b>
      </div>
      <p></p>
      Date : {date}
      <p></p>
      {/* <RacingBarChart data={data} /> */}
      <button onClick={fetch}>{start ? "Stop the race" : "Fetch Data!"}</button>
      { testdata != null && <Racingchart2 data={testdata} />}
    </div>
  );
}

export default App;
