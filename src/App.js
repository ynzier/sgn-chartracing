import React, { useState } from "react";
import "./App.css";
import useInterval from "./useInterval";
import axios from "axios";
import Racingchart from "./Racingchart";
import moment from "moment";

function App() {
  const [start, setStart] = useState(false);

  const [mstime, setMsTime] = useState(1619629200000);
  const day = 86400000;
  const maxDay = 1619629200000 + 28 * day;
  const [casesData, setCasesData] = useState();
  const fetch = () => {

    if (casesData == null) {
      axios
        .get("https://disease.sh/v3/covid-19/historical?lastdays=30")
        .then((res) => {
          setCasesData(res.data);
          setMsTime(mstime);
          setStart(!start);
        })
        .catch((err) => {
          console.log(err);
        });
    } else setStart(!start);
  };

  useInterval(() => {
    if (!start && casesData == null) {
      fetch();
      setStart(!start);
    }
    if (start) {
      setMsTime(mstime + day);
      if (mstime >= maxDay) setStart(!start);
    }
  }, 100);

  return (
    <div>
      <p></p>
      <div className="headertext">
        <b>Covid Global Cases by SGN</b>
      </div>
      <p></p>
      Date : {moment(mstime).format("M/D/YY")}
      <p></p>
      {casesData != null && <Racingchart data={casesData} mstime={mstime} />}
    </div>
  );
}

export default App;
