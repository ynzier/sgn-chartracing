import React, { useRef, useEffect } from "react";
import { select, scaleBand, scaleLinear, max } from "d3";
import useResizeObserver from "./useResizeObserver";
import moment from "moment";
import randomColor from "randomcolor";

function Racingchart({ data, mstime }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  for(var i = 0 ; i < data.length ; i++)
  {
    if(data[i].color == null)
      data[i].color = randomColor();
  }
   console.log(data)
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;
    
    data.sort(
      (a, b) =>
        b.timeline.cases[moment(mstime).format("M/D/YY")] -
        a.timeline.cases[moment(mstime).format("M/D/YY")]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    data = data.slice(0,50);
    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((value, index) => index))
      .range([0, 1000]);

    const xScale = scaleLinear()
      .domain([
        0,
        max(
          data,
          (entry) => entry.timeline.cases[moment(mstime).format("M/D/YY")]
        ),
      ])
      .range([0, dimensions.width]);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data, (entry, index) => entry.country)
      .join((enter) =>
        enter.append("rect").attr("y", (entry, index) => yScale(index))
      )
      .attr("fill", (entry, index) => entry.color)
      .attr("class", "bar")
      .attr("x", 0)
      .attr("height", yScale.bandwidth())
      .transition()
      .attr("width", (entry) =>
        xScale(entry.timeline.cases[moment(mstime).format("M/D/YY")])
      )
      .attr("y", (entry, index) => yScale(index));

    // draw the labels
    svg
      .selectAll(".label")
      .data(data, (entry, index) => entry.country)
      .join((enter) =>
        enter
          .append("text")
          .attr(
            "y",
            (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5
          )
      )
      .text(
        (entry) =>
          ` ${entry.country} (${
            entry.timeline.cases[moment(mstime).format("M/D/YY")] 
          } cases)
          `
      )
      .attr("class", "label")
      .attr("x", 10)
      .transition()
      .attr("y", (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5);
      
  }
  , [data, dimensions, mstime]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "20rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Racingchart;
