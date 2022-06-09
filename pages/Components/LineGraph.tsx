import ReactECharts from "echarts-for-react";
// import { boysOptions } from "./LineGraphData/BoysData";
// import { girlsOptions } from "./LineGraphData/GirlsData";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Vulnerable from "./Vulnerable";
// import Image from "next/image"
import CountDown from "./CountDown";
import CurrentCouples from "./CurrentCouples";
import CrossTable from "./CrossTable";

type Props = {};

const LineGraph = (props: Props) => {
  return (
    <>
      <Typography
        sx={{ fontSize: 24 }}
        className="text-neutral-100 text-center underline font-bold"
      >
        My GF Watches Love Island
      </Typography>
      <div className="grid grid-cols-12 gap-4 lg:p-24 p-4 ">
        <Card className="lg:col-span-6 col-span-12 text-center bg-white bg-opacity-80 backdrop-blur-xl rounded drop-shadow-lg">
          <Typography sx={{ fontSize: 24 }} className="text-slate-900">
            Boys Timeline
          </Typography>

          <ReactECharts
            option={boysOptions}
            notMerge={true}
            lazyUpdate={true}
            // theme={"dark"}
          />
        </Card>

        <Card className="lg:col-span-6 col-span-12 text-center bg-white bg-opacity-80 backdrop-blur-xl rounded drop-shadow-lg">
          <Typography sx={{ fontSize: 24 }} className="text-slate-900 ">
            Girls Timeline
          </Typography>
          <ReactECharts
            option={girlsOptions}
            notMerge={true}
            lazyUpdate={true}
            // theme={"dark"}
          />
        </Card>

        <Vulnerable />
        <CountDown />
        <CurrentCouples />
      </div>
    </>
  );
};

export default LineGraph;

const boysOptions = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      label: {
        formatter: "Day {value}",
      },
    },
  },
  legend: {
    data: ["Luca", "Dami", "Andrew", "Liam", "Davide", "Ikenna"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {
        name: "Love Island Timeline Boys",
      },
    },
  },
  xAxis: {
    // name: 'Time',
    axisLabel: { formatter: "Day {value}" },
    type: "category",
    boundaryGap: false,
    data: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  },
  yAxis: {
    type: "category",
    data: ["Paige", "Amber", "Indiyah", "Tasha", "Gemma", "Vulnerable"],
  },
  series: [
    {
      name: "Luca",
      type: "line",
      stack: "Total",
      data: ["Paige", "Paige", "Paige"],
      smooth: true,
    },
    {
      name: "Dami",
      type: "line",
      stack: "Total",
      data: ["Amber", "Amber", "Amber"],
      smooth: true,
    },
    {
      name: "Andrew",
      type: "line",
      stack: "Total",
      data: ["Tasha", "Tasha", "Tasha"],
      smooth: true,
    },
    {
      name: "Liam",
      type: "line",
      stack: "Total",
      data: ["Gemma", "Vulnerable", "Vulnerable"],
      smooth: true,
    },
    {
      name: "Davide",
      type: "line",
      stack: "Total",
      data: ["-", "Gemma", "Gemma"],
      smooth: true,
    },
    {
      name: "Ikenna",
      type: "line",
      stack: "Total",
      data: ["Indiyah", "Indiyah", "Indiyah"],
      smooth: true,
    },
  ],
};

export let girlsOptions = {
  title: {
    // text: 'Love Island 2022 Girls'
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      label: {
        formatter: "Day {value}",
      },
    },
  },
  legend: {
    data: ["Paige", "Amber", "Indiyah", "Tasha", "Gemma"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {
        name: "Love Island Timeline Girls",
      },
    },
  },
  xAxis: {
    axisLabel: { formatter: "Day {value}" },
    type: "category",
    boundaryGap: false,
    data: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  },
  yAxis: {
    type: "category",

    data: ["Luca", "Dami", "Andrew", "Liam", "Davide", "Ikenna"],
  },
  series: [
    {
      name: "Paige",
      type: "line",
      stack: "Total",
      data: ["Luca", "Luca", "Luca"],
      smooth: true,
    },
    {
      name: "Amber",
      type: "line",
      stack: "Total",
      data: ["Dami", "Dami", "Dami"],
      smooth: true,
    },
    {
      name: "Tasha",
      type: "line",
      stack: "Total",
      data: ["Andrew", "Andrew", "Andrew"],
      smooth: true,
    },
    {
      name: "Gemma",
      type: "line",
      stack: "Total",
      data: ["Liam", "Davide", "Davide"],
      smooth: true,
    },
    {
      name: "Indiyah",
      type: "line",
      stack: "Total",
      data: ["Ikenna", "Ikenna", "Ikenna"],
      smooth: true,
    },
  ],
};
