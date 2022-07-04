import TimelineBoys from "./TimeLineBoys.json";
import TimelineGirls from "./TimeLineGirls.json";
import colours from "./Colours.json";
import { EChartsOption } from "echarts-for-react";

// // interface IMatches {
//   person: string;
//   partner: string;
//   color: string;
// }
//

interface INewTimeLineData {
  name: string;
  type: string;
  stack: string;
  data: ICountReturn[];
  smooth: boolean;
  color: string;
}

interface ICountReturn {
  partner: string;
  length: number;
}
interface ITimeLineData {
  name: string;
  type: string;
  stack: string;
  data: string[];
  smooth: boolean;
  color: string;
  markArea?: {
    itemStyle: {
      color: string;
    };
    data: [
      [
        {
          name: string;
          xAxis: string;
        }
      ]
    ];
  };
}

let casaAmor: any = {
  name: "Casa Amor",
  type: "line",
  smooth: true,
  // prettier-ignore
  markArea: {
    itemStyle: {
      color: 'rgba(255, 173, 177, 0.4)'
    },
    data: [
      [
        {
          name: 'Casa Amor',
          xAxis: '22'
        },
        {
          xAxis: '24'
        }
      ]
    ]
  },
};

const sortingData: any = (NewTimeLine: INewTimeLineData[]) => {
  let FinalLineData: ITimeLineData[] = [];

  NewTimeLine.map((person) => {
    let finalPersonData: ITimeLineData;
    let finalData: string[] = [];
    person.data.map((data) => {
      for (let i = 0; i < data.length; i++) {
        finalData.push(data.partner);
      }
      finalPersonData = {
        color: person.color,
        name: person.name,
        smooth: person.smooth,
        type: person.type,
        stack: person.stack,
        data: finalData,
      };

      FinalLineData.push(finalPersonData);
    });
  });
  return FinalLineData;
};

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
        const box = document.createElement("a");
        box.style.borderWidth = "2px";
        box.style.marginRight = "10px";
        box.style.height = "10px";
        box.style.width = "10px";
        box.style.borderRadius = "5px";
        box.style.display = "inline-block";

        let innerHtml = `<b style="text-align:center">${info[0].axisValueLabel}:</b><br/><table id="myTable" border="1" cellpadding="3">`;
        let listOfNames: string[] = [];
        info.map((line: any) => {
          if (line.value === "-") {
            return;
          }
          if (listOfNames.includes(line.seriesName)) {
            return;
          }

          box.style.background = `${line.color}`;
          box.style.borderColor = `${line.color}`;
          innerHtml +=
            `<tr>` +
            `<td>${box.outerHTML}</td>` +
            `<td ">${line.seriesName}</td>` +
            `<td ">${line.value} </td>` +
            "</tr>";
          listOfNames.push(line.seriesName);
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
    axisLabel: { formatter: "Day {value}" },
    type: "category",
    boundaryGap: false,
  },
  yAxis: {
    type: "category",
    data: [...dataCategories(TimelineBoys)],
  },
  series: [...addColours(sortingData(TimelineBoys)), casaAmor],
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
        const box = document.createElement("a");
        box.style.borderWidth = "2px";
        box.style.marginRight = "10px";
        box.style.height = "10px";
        box.style.width = "10px";
        box.style.borderRadius = "5px";
        box.style.display = "inline-block";

        let innerHtml = `<b style="text-align:center">${info[0].axisValueLabel}:</b><br/><table id="myTable" border="1" cellpadding="3">`;
        let listOfNames: string[] = [];
        info.map((line: any) => {
          if (line.value === "-") {
            return;
          }
          console.log(line);
          if (listOfNames.includes(line.seriesName)) {
            return;
          }

          box.style.background = `${line.color}`;
          box.style.borderColor = `${line.color}`;
          innerHtml +=
            `<tr>` +
            `<td>${box.outerHTML}</td>` +
            `<td ">${line.seriesName}</td>` +
            `<td ">${line.value} </td>` +
            "</tr>";
          listOfNames.push(line.seriesName);
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
    data: [...legendData(TimelineGirls)],
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
  },
  yAxis: {
    type: "category",

    data: [...dataCategories(TimelineGirls)],
  },
  series: [...addColours(sortingData(TimelineGirls)), casaAmor],
};

function addColours(TimelineBoys: ITimeLineData[]): ITimeLineData[] {
  let FinalList: any[] = [];

  TimelineBoys.map((person) => {
    let name: string = person.name;
    let setColour: string = "";
    colours.map((k) => {
      if (k.name === name) {
        setColour = k.colour;
      }
    });

    let newPerson: ITimeLineData;
    newPerson = {
      name: person.name,
      type: person.type,
      stack: person.stack,
      data: person.data,
      smooth: person.smooth,
      color: setColour,
    };

    FinalList.push(newPerson);
  });

  return FinalList;
}

function arraymove(arr: any, fromIndex: any, toIndex: any) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

function legendData(TimelineBoys: INewTimeLineData[]): string[] {
  let legendList: string[] = [];
  TimelineBoys.map((person) => {
    legendList.push(person.name);
  });

  return legendList;
}

function dataCategories(TimelineBoys: INewTimeLineData[]): string[] {
  let listOfGirls = [""];

  TimelineBoys.map((person) => {
    person.data.map((partner) => {
      listOfGirls.push(partner.partner);
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
  arraymove(FinalList, current_single, 1);

  return FinalList;
}
