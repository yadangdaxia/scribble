// chart.js

document.addEventListener('turbolinks:load', () => {
  const ctx = document.getElementById('chart').getContext('2d');
    console.log(ctx);
    // debugger;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: JSON.parse(ctx.canvas.dataset.labels),
      datasets: [{
        data: JSON.parse(ctx.canvas.dataset.data),
      }]
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

});
