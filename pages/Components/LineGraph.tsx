import ReactECharts from "echarts-for-react";
// import { boysOptions } from "./LineGraphData/BoysData";
// import { girlsOptions } from "./LineGraphData/GirlsData";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Vulnerable from "./Vulnerable";
// import Image from "next/image"
import CountDown from "./CountDown";
import CurrentCouples from "./CurrentCouples"
import CrossTable from "./CrossTable"

type Props = {};

const LineGraph = (props: Props) => {
  return (
    <>
    <Typography sx={{ fontSize: 24 }} className="text-slate-900 text-center underline font-bold ">
            My GF Watches Love Island
          </Typography>
      <div className="grid grid-cols-12 gap-4 lg:p-24 p-4">
        <Card variant="outlined" className="lg:col-span-6 col-span-12 text-center">
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

        <Card variant="outlined" className="lg:col-span-6 col-span-12 text-center">
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
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Luca', 'Dami', 'Andrew', 'Liam', 'Davide', 'Ikenna']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {
        name: 'Love Island Timeline Boys'
      }
    }
  },
  xAxis: {
      // name: 'Time',
    axisLabel: {formatter : 'Day {value}'},
    type: 'category',
    boundaryGap: false,
    data: ['0','1', '2', '3', '4', '5', '6', '7', '8']
  },
  yAxis: {
    type: 'category',
    data: ['Paige', 'Amber', 'Indiyah', 'Tasha', 'Gemma', 'Vulnerable'],

  },
  series: [
    {
      name: 'Luca',
      type: 'line',
      stack: 'Total',
      data: ['Paige', 'Paige']
    },
    {
      name: 'Dami',
      type: 'line',
      stack: 'Total',
      data: ['Amber', 'Amber']
    },
    {
      name: 'Andrew',
      type: 'line',
      stack: 'Total',
      data: ['Tasha', 'Tasha']
    },
    {
      name: 'Liam',
      type: 'line',
      stack: 'Total',
      data: ['Gemma', 'Vulnerable'],
      smooth: true
    },
    {
      name: 'Davide',
      type: 'line',
      stack: 'Total',
      data: ['-', 'Gemma']
    },
    {
      name: 'Ikenna',
      type: 'line',
      stack: 'Total',
      data: ['Indiyah','Indiyah']
    }
  ]
};


export let girlsOptions = {
  title: {
    // text: 'Love Island 2022 Girls'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Paige', 'Amber', 'Indiyah', 'Tasha', 'Gemma'],

    
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {
        name: 'Love Island Timeline Girls'
      }
    }
  },
  xAxis: {
    axisLabel: {formatter : 'Day {value}'},
    type: 'category',
    boundaryGap: false,
    data: ['0','1', '2', '3', '4', '5', '6', '7', '8']
  },
  yAxis: {
    type: 'category',
   
    data: ['Luca', 'Dami', 'Andrew', 'Liam', 'Davide', 'Ikenna']

  },
  series: [
    {
      name: 'Paige',
      type: 'line',
      stack: 'Total',
      data: ['Luca', 'Luca']
    },
    {
      name: 'Amber',
      type: 'line',
      stack: 'Total',
      data: ['Dami', 'Dami']
    },
    {
      name: 'Tasha',
      type: 'line',
      stack: 'Total',
      data: ['Andrew', 'Andrew']
    },
    {
      name: 'Gemma',
      type: 'line',
      stack: 'Total',
      data: ['Liam', 'Davide']
    },
    {
      name: 'Indiyah',
      type: 'line',
      stack: 'Total',
      data: ['Ikenna','Ikenna']
    }
  ]
};