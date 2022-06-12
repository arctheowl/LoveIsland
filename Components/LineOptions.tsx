import { EChartsOption } from "echarts-for-react";
import TimelineBoys from "../data/TimeLineBoys.json"
import TimelineGirls from "../data/TimelineGirls.json"

interface IMatches {
  person: string;
  partner: string;
  color: string;
}

export const boysOptions: EChartsOption = {
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
    // data: ["0", "1", "2", "3", "4"],
  },
  yAxis: {
    type: "category",
    data: [
      "Exit",
      "Tasha",
      "Paige",
      "Indiyah",
      "Gemma",
      "Ekin-Su",
      "Amber",
      "Single",
    ],
  },
  series: TimelineBoys
};

export const girlsOptions: EChartsOption = {
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
    data: [
      "Paige",
      "Amber",
      "Indiyah",
      "Tasha",
      "Gemma",
      "Ekin-Su",
      "Afia",
      "Exit",
    ],
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
    // data: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  },
  yAxis: {
    type: "category",

    data: [
      "Exit",
      "Luca",
      "Liam",
      "Ikenna",
      "Davide",
      "Dami",
      "Andrew",
      "Single",
    ],
  },
  series: TimelineGirls
};
