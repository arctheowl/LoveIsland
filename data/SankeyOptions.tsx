import data from "./SankeyData.json";

export const boysOptions = {
  title: {
    show: false,
  },
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  animation: true,
  animationDuration: 10000,
  animationDelay: 1000,
  series: [
    {
      type: "sankey",
      data: data.boys.nodes,
      links: data.boys.links,
      emphasis: {
        focus: "adjacency",
      },
      levels: [
        {
          depth: 0,
          itemStyle: {
            color: "#ccebc5",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
        {
          depth: 1,
          itemStyle: {
            color: "#b3cde3",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
        {
          depth: 2,
          itemStyle: {
            color: "#fbb4ae",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
        {
          depth: 3,
          itemStyle: {
            color: "#decbe4",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
      ],
      lineStyle: {
        curveness: 0.5,
      },
    },
  ],
};

export const girlsOptions = {
  title: {
    show: false,
  },
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  animation: true,
  animationDuration: 10000,
  animationDelay: 1000,
  series: [
    {
      type: "sankey",
      data: data.girls.nodes,
      links: data.girls.links,
      emphasis: {
        focus: "adjacency",
      },
      levels: [
        {
          depth: 0,
          itemStyle: {
            color: "#ccebc5",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
        {
          depth: 1,
          itemStyle: {
            color: "#b3cde3",
          },
          lineStyle: {
            color: "source",
            curveness: 0.5,
            opacity: 0.8,
          },
        },
        {
          depth: 2,
          itemStyle: {
            color: "#fbb4ae",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
        {
          depth: 3,
          itemStyle: {
            color: "#decbe4",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
        },
      ],
      lineStyle: {
        curveness: 0.5,
      },
    },
  ],
};
