import TimelineBoys from "./TimeLineBoys.json";
import TimelineGirls from "./TimeLineGirls.json";

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

export const boysOptions: any = {
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
    data: legendData(TimelineBoys),
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
      ...dataCategories(TimelineBoys),

      // "Tasha",
      // "Paige",
      // "Indiyah",
      // "Gemma",
      // "Ekin-Su",
      // "Amber",
      // "Single",
      // "Exit",
    ],
  },
  series: TimelineBoys,
};

export const girlsOptions: any = {
  title: {},
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
    data: [legendData(TimelineGirls)],
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

    data: [...dataCategories(TimelineGirls)],
  },
  series: TimelineGirls,
};

function arraymove(arr: any, fromIndex: any, toIndex: any) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

function legendData(TimelineBoys: ITimeLineData[]): string[] {
  let legendList: string[] = [];
  TimelineBoys.map((person) => {
    legendList.push(person.name);
  });

  return legendList;
}

function dataCategories(TimelineBoys: ITimeLineData[]): string[] {
  let listOfGirls = [""];
  TimelineBoys.map((person) => {
    person.data.map((partner) => {
      listOfGirls.push(partner);
    });
  });

  let uniqueChars = listOfGirls.filter((c, index) => {
    return listOfGirls.indexOf(c) === index;
  });

  uniqueChars.filter;

  //remove the - and ""
  let FinalList: string[] = [];
  uniqueChars.map((entry) => {
    if (entry === "" || entry === "-") {
      return;
    } else {
      FinalList.push(entry);
    }
  });
  if (FinalList.includes("Exit")) {
    let current_exit = FinalList.indexOf("Exit");
    arraymove(FinalList, current_exit, 0);
  }

  let current_single = FinalList.indexOf("Single");
  arraymove(FinalList, current_single, FinalList.length);

  return FinalList;
}
