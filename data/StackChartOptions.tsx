import { kill } from "process";
import colours from "./Colours.json";

interface IMatches {
  person: string;
  partner: string;
  color: string;
}

interface ITimeLineData {
  name: string;
  type: string;
  stack: string;
  data: string[];
  smooth: boolean;
  color: string;
}

const placeholder = 0.0000009;
const luca = 0.0000001;
const dami = 0.0000002;
const davide = 0.0000003;
const andrew = 0.0000004;
const liam = 0.0000005;
const ikenna = 0.0000006;
const jaques = 0.0000007;
const single = 0.0000008;

const gemma = 0.0000001;
const paige = 0.0000002;
const indiyah = 0.0000003;
const afia = 0.0000004;
const ekinSu = 0.0000005;
const amber = 0.0000006;
const tasha = 0.0000007;

export const girlsOptions: any = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (info: any) => {
      // console.log(info);
      let innerHtml = `<b style="text-align:center">${info[0].axisValue}:</b><br/><table id="myTable" border="1" cellpadding="3">`;
      info.map((data: any) => {
        if (data.data === "-" || data.seriesName === "") {
          return;
        }
        // console.log(`${data.data}===${data.seriesName}`);
        innerHtml +=
          `<tr>` +
          `<td ">${data.seriesName}</td>` +
          `<td ">${Math.round(data.data)} </td>` +
          "</tr>";
      });
      innerHtml += "</table>";
      return `
          ${innerHtml}`;
    },
  },
  legend: { show: false },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Gemma", "Paige", "Indiyah", "Tasha", "Ekin-Su", "Amber"],
  },
  label: {
    formatter: (value: any) => {
      // console.log(value.data);
      let stringData = `${value.data}`;
      // console.log(stringData);
      if (stringData.endsWith("9")) {
        return ``;
      } else if (stringData.endsWith("1")) {
        return `Luca`;
      } else if (stringData.endsWith("2")) {
        return `Dami`;
      } else if (stringData.endsWith("3")) {
        return `Davide`;
      } else if (stringData.endsWith("4")) {
        return `Andrew`;
      } else if (stringData.endsWith("5")) {
        return `Liam`;
      } else if (stringData.endsWith("6")) {
        return `Ikenna`;
      } else if (stringData.endsWith("7")) {
        return `Jaques`;
      } else if (stringData.endsWith("8")) {
        return `Single`;
      }
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      data: ["-", "-", "-", "-", 4 + placeholder],
    },
    {
      name: "Liam",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Liam"),
        color: addColours("Liam"),
      },
      data: [1 + liam],
    },
    {
      name: "Davide",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Davide"),
        color: addColours("Davide"),
      },
      data: [3 + davide, "-", "-", "-", 4 + davide],
    },
    {
      name: "Luca",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Luca"),
        color: addColours("Luca"),
      },
      data: [4 + luca, 4 + luca],
    },
    {
      name: "Single",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Single"),
        color: addColours("Single"),
      },
      data: ["-", 3 + single],
    },
    {
      name: "Jaques",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Jaques"),
        color: addColours("Jaques"),
      },
      data: ["-", 1 + jaques],
    },
    {
      name: "Ikenna",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Ikenna"),
        color: addColours("Ikenna"),
      },
      data: ["-", "-", 8 + ikenna],
    },
    {
      name: "Andrew",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Andrew"),
        color: addColours("Andrew"),
      },
      data: ["-", "-", "-", 8 + andrew],
    },
    {
      name: "Dami",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Dami"),
        color: addColours("Dami"),
      },
      data: ["-", "-", "-", "-", "-", 8 + dami],
    },
  ],
};

export const boysOptions: any = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (info: any) => {
      // console.log(info);
      let innerHtml = `<b style="text-align:center">${info[0].axisValue}:</b><br/><table id="myTable" border="1" cellpadding="3">`;
      info.map((data: any) => {
        if (data.data === "-" || data.seriesName === "") {
          return;
        }
        // console.log(`${data.data}===${data.seriesName}`);
        innerHtml +=
          `<tr>` +
          `<td ">${data.seriesName}</td>` +
          `<td ">${Math.round(data.data)} </td>` +
          "</tr>";
      });
      innerHtml += "</table>";
      return `
              ${innerHtml}`;
    },
  },
  legend: { show: false },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Luca", "Dami", "Andrew", "Davide", "Ikenna", "Jaques"],
  },
  label: {
    formatter: (value: any) => {
      // console.log(value.data);
      let stringData = `${value.data}`;
      // console.log(stringData);
      if (stringData.endsWith("9")) {
        return ``;
      } else if (stringData.endsWith("1")) {
        return `Gemma`;
      } else if (stringData.endsWith("2")) {
        return `Paige`;
      } else if (stringData.endsWith("3")) {
        return `Indiyah`;
      } else if (stringData.endsWith("4")) {
        return `Afia`;
      } else if (stringData.endsWith("5")) {
        return `Ekin-Su`;
      } else if (stringData.endsWith("6")) {
        return `Amber`;
      } else if (stringData.endsWith("7")) {
        return `Tasha`;
      } else if (stringData.endsWith("8")) {
        return `Single`;
      }

      //   } else if (value === "under_compliant") {
      //     return `Undercompliant`;
      //   }
      //   console.log(typeof value);
      //   return `${value}`;
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      data: ["-", "-", "-", 1 + placeholder, "-", 6 + placeholder],
    },
    {
      name: "Single",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Single"),
        color: addColours("Single")
      },
      data: ["-", "-", "-", "-", "-", 1 + single],
    },
    {
      name: "Paige",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Paige"),
        color: addColours("Paige"),
      },
      data: [4 + paige, "-", "-", "-", "-", 1 + paige],
    },
    {
      name: "Gemma",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Gemma"),
        color: addColours("Gemma"),
      },
      data: [4 + gemma, "-", "-", 3 + gemma],
      //   color: "#fc8452"
    },

    {
      name: "Ekin-Su",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Ekin-Su"),
        color: addColours("Ekin-Su"),
      },
      data: ["-", "-", "-", 4 + ekinSu],
    },
    {
      name: "Indiyah",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Indiyah"),
        color: addColours("Indiyah"),
      },
      data: ["-", "-", "-", "-", 8 + indiyah],
    },
    {
      name: "Tasha",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Tasha"),
        color: addColours("Tasha"),
      },
      data: ["-", "-", 8 + tasha],
    },
    {
      name: "Amber",
      type: "bar",
      stack: "total",

      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      itemStyle: {
        borderColor: addColours("Amber"),
        color: addColours("Amber"),
      },
      data: ["-", 8 + amber],
    },
  ],
};

function addColours(name: string):string {
  let newColour = ""
  colours.map((k) => {
    if (k.name === name) {
      newColour= k.colour;
    }

  });

  return newColour
}
