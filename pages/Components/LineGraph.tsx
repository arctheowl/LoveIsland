import ReactECharts from "echarts-for-react";
import { boysOptions } from "./LineGraphData/BoysData";
import { girlsOptions } from "./LineGraphData/GirlsData";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Vulnerable from "./Vulnerable";
// import Image from "next/image"
import CountDown from "./CountDown";
import CurrentCouples from "./CurrentCouples"

type Props = {};

const LineGraph = (props: Props) => {
  return (
    <>
    <Typography sx={{ fontSize: 24 }} className="text-slate-900 text-center underline font-bold ">
            My GF Watches Love Island
          </Typography>
      <div className="grid grid-cols-12 gap-4 p-24">
        <Card variant="outlined" className="col-span-6">
          <Typography sx={{ fontSize: 24 }} className="text-slate-900 ">
            Boys Timeline
          </Typography>

          <ReactECharts
            option={boysOptions}
            notMerge={true}
            lazyUpdate={true}
            theme={"dark"}
          />
        </Card>

        <Card variant="outlined" className="col-span-6">
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
