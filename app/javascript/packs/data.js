// chart.js

// const api = "http://localhost:3000"
// console.log(api)

// fetch(api)
//   .then(response => response.json())
//   console.log(response, "RESPONSE IS HERE!~")
//   .then((data) => {
//     console.log(data, "data is here!")
//   });


document.addEventListener('turbolinks:load', () => {
  const ctx = document.getElementById('chart').getContext('2d');
    console.log(ctx);
    // debugger;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: JSON.parse(ctx.canvas.dataset.labels),
      // labels: <%= @labels.to_json.html_safe %>,

      datasets: [{
        data: JSON.parse(ctx.canvas.dataset.data),
        label: 'NUMBER',
        // data: <%= @data.to_json.html_safe %>,
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



document.addEventListener('turbolinks:load', () => {
  const testDisplay = document.getElementById('test-display')
  console.log(testDisplay)
});
