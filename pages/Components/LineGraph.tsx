import ReactECharts from "echarts-for-react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

type Props = {
  theme: string;
};

const LineGraph = (props: Props) => {
  const { theme } = props;

  const settings = [
    {
      name: "dark",
      themes: "bg-[#100C2A] text-white",
      bg: "bg-[#100C2A]",
      text: "text-white",
    },
    {
      name: "light",
      themes: "bg-white text-black bg-opacity-80 ",
      bg: "bg-[#100C2A]",
      text: "text-black",
    },
  ];

  let number = 0;
  if (theme === "light") {
    number = 1;
  }

  return (
    <>
      <div
        className={`${settings[number].themes} col-span-12 lg:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Boys Timeline
        </Typography>

        <ReactECharts
          option={boysOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>

      <div
        className={`${settings[number].themes} col-span-12 lg:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Girls Timeline
        </Typography>
        <ReactECharts
          option={girlsOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>
    </>
  );
};

export default LineGraph;

interface IMatches {
  person: string;
  partner: string;
  color: string;
}

function tooltip() {
  return;
}

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
    formatter: (info: any) => {
      if (info) {
        let group: IMatches[] = [];

        const box = document.createElement("a");
        box.style.borderWidth = "2px";
        box.style.marginRight = "10px";
        box.style.height = "10px";
        box.style.width = "10px";
        box.style.borderRadius = "5px";
        box.style.display = "inline-block";

        let innerHtml = `<b style="text-align:center">${info[0].axisValueLabel}:</b><br/><table id="myTable" border="1" cellpadding="3">`;

        info.map((line: any) => {
          if (line.value === "-") {
            return;
          }
          group.push({
            person: `${line.seriesName}`,
            partner: `${line.value}`,
            color: `${line.color}`,
          });

          box.style.background = `${line.color}`;
          box.style.borderColor = `${line.color}`;
          innerHtml +=
            `<tr>` +
            `<td>${box.outerHTML}</td>` +
            `<td ">${line.seriesName}</td>` +
            `<td ">${line.value} </td>` +
            "</tr>";
        });
        innerHtml += "</table>";
        return `
        ${innerHtml}`;
      } else {
        return "No Data";
      }
    },
  },
  legend: {
    data: ["Luca", "Dami", "Andrew", "Liam", "Davide", "Ikenna", "Exit"],
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
    data: ["Paige", "Amber", "Indiyah", "Tasha", "Gemma", "Single"],
  },
  series: [
    {
      name: "Luca",
      type: "line",
      stack: "Total",
      data: ["Paige", "Paige", "Paige", "Paige"],
      smooth: true,
    },
    {
      name: "Dami",
      type: "line",
      stack: "Total",
      data: ["Amber", "Amber", "Amber", "Amber"],
      smooth: true,
    },
    {
      name: "Andrew",
      type: "line",
      stack: "Total",
      data: ["Tasha", "Tasha", "Tasha", "Tasha"],
      smooth: true,
    },
    {
      name: "Liam",
      type: "line",
      stack: "Total",
      data: ["Gemma", "Single", "Single", "Single", "Exit"],
      smooth: true,
    },
    {
      name: "Davide",
      type: "line",
      stack: "Total",
      data: ["-", "Gemma", "Gemma", "Gemma"],
      smooth: true,
    },
    {
      name: "Ikenna",
      type: "line",
      stack: "Total",
      data: ["Indiyah", "Indiyah", "Indiyah", "Indiyah"],
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
    formatter: (info: any) => {
      if (info) {
        let group: IMatches[] = [];

        const box = document.createElement("a");
        box.style.borderWidth = "2px";
        box.style.marginRight = "10px";
        box.style.height = "10px";
        box.style.width = "10px";
        box.style.borderRadius = "5px";
        box.style.display = "inline-block";

        let innerHtml = `<b style="text-align:center">${info[0].axisValueLabel}:</b><br/><table id="myTable" border="1" cellpadding="3">`;

        info.map((line: any) => {
          if (line.value === "-") {
            return;
          }
          group.push({
            person: `${line.seriesName}`,
            partner: `${line.value}`,
            color: `${line.color}`,
          });

          box.style.background = `${line.color}`;
          box.style.borderColor = `${line.color}`;
          innerHtml +=
            `<tr>` +
            `<td>${box.outerHTML}</td>` +
            `<td ">${line.seriesName}</td>` +
            `<td ">${line.value} </td>` +
            "</tr>";
        });
        innerHtml += "</table>";
        return `
        ${innerHtml}`;
      } else {
        return "No Data";
      }
    },
  },
  legend: {
    data: ["Paige", "Amber", "Indiyah", "Tasha", "Gemma", "Ekin-Su", "Afia", "Exit"],
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

    data: ["Luca", "Dami", "Andrew", "Liam", "Davide", "Ikenna", "Single"],
  },
  series: [
    {
      name: "Paige",
      type: "line",
      stack: "Total",
      data: ["Luca", "Luca", "Luca", "Luca"],
      smooth: true,
    },
    {
      name: "Amber",
      type: "line",
      stack: "Total",
      data: ["Dami", "Dami", "Dami", "Dami"],
      smooth: true,
    },
    {
      name: "Tasha",
      type: "line",
      stack: "Total",
      data: ["Andrew", "Andrew", "Andrew", "Andrew"],
      smooth: true,
    },
    {
      name: "Gemma",
      type: "line",
      stack: "Total",
      data: ["Liam", "Davide", "Davide", "Davide"],
      smooth: true,
    },
    {
      name: "Indiyah",
      type: "line",
      stack: "Total",
      data: ["Ikenna", "Ikenna", "Ikenna", "Ikenna"],
      smooth: true,
    },
    {
      name: "Afia",
      type: "line",
      stack: "Total",
      data: ["-", "-", "-", "Single"],
      smooth: true,
    },
    {
      name: "Ekin-Su",
      type: "line",
      stack: "Total",
      data: ["-", "-", "-", "Single"],
      smooth: true,
    },
  ],
};
