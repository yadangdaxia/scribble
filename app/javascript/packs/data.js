// D3
// console.log(d3)
// d3.select('div')

// Global properties - causes error
// Chart.defaults.global.defaultFontFamily='Arial';
// Chart.defaults.global.defaultFontSize=12;

const myChart = document.getElementById('chart').getContext('2d');
console.log(myChart);

// Key value pair
const chartData = {
  "2021-07-26": 3,
  "2021-07-27": 4,
  "2021-07-28": 5
};
const labels = Object.keys(chartData)

const feelingChart = new Chart(myChart, {
  type: 'line', // see documentation for other chart types
  data: {
    // JSON.parse(myChart.dataset.labels)
    labels: labels,
    // labels:['Monday', 'Tuesday', 'Wednesday'],
    // labels: Utils.months({count:7}),
    datasets:[{
      label:'Exercise',
      data: Object.values(chartData),
      // [ 2, 3, 7, 5, 2, 7, 8 ],
      // Can apply styles here if wanted.
      backgroundColor:'red',
    },
      {
        label: 'Sleep',
        data: [
          8, 7.5, 8.5, 9, 8, 7.5, 7.5
        ],
        // Can apply styles here if wanted.
        backgroundColor: 'blue',
      }],
  },
  options:{
    title:{
      display:true,
      text:'My Feelings',
      fontSize:35
    },
    legend:{
      position:'right',
      labels:{
        fontColor:'#FFFFFF'
      }
    },
    layout:{
      left:0,
      right:0,
      bottom:100,
      top:100,
      backgroundColor:'#FFFFFF'
    },
    tooltips:{
      enabled:true
    }
  }
});
