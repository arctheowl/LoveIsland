
// prettier-ignore
const episdoes = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'
];

// prettier-ignore
const Islanders = [
  'Andrew', 'Dami', 'Danica',
  'Davide', 'Ekin-Su', 'Gemma', 'Indiyah',
  'Jaques', 'Jay', 'Luca', 'Paige', 'Tasha',
  'Amber', 'Ikenna', 'Remi', 'Afia', 'Liam'
];

// prettier-ignore
const data = [
  [0,1,1], [0,2,1],[0,4,2], [0,11,1], [1,0,1],
  [1,2,1], [1,4,1],[1,6,1],[1,7,1], [1,10,2],[1,14,4], [1,15,4],
  [2,11,3],[2,13,3],[2,14,1], [2,15,1],
  [3, 0, 2], [3,1,3], [3, 2, 2],[3, 3, 4],[3, 4, 3],[3, 6, 1],[3, 8, 2], [3, 9, 3],  [3, 10, 1],  [3, 11, 2], [3, 13, 2], [3, 14, 1],  [3, 15, 1],
  [4, 3, 1], [4, 4, 5], [4,6,2], [4,7,3], [4,8,4], [4,9,2], [4,10,3], [4,11,3], [4,13,1], [4,14,3], [4,15,1],
  [5,0,3], [5,1,2], [5,2,4], [5,3,4], [5,4,3], [5,6,2] , [5,7,1] , [5,8,1] , [5,9,1] , [5,10,1], [5,13,4] 
 ]
    .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

export const HeatMapOptions: any = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: episdoes,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: Islanders,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 6,
    calculable: false,
    orient: 'horizontal',
    // left: 'center',
    // bottom: '15%'
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

