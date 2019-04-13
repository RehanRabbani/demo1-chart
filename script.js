

function initial(){
    let one,two,three,four;
   
    
    
    Chart.defaults.global.responsive = true;
    
    var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', ],
        datasets: [{
            label: '# of Votes',
            data: [1,2,3,4],
            backgroundColor: [
                '#ee815e',
                '#90a0a1',
                '#b2b698',
                '#bbbbba',
               
            ],
            borderColor: [
                '#ee501e',
                '#ececeb',
                '#ececeb',
                '#ececeb',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                stacked:true,
                ticks: {
                    beginAtZero: true
                   
                },
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                  }
            }],
            xAxes: [{
      gridLines: {
        display: false
      }
    }]
        }
        
    },
   
}
);

function getData(){
    one =Math.floor(Math.random()*10)+1;
    two=Math.floor(Math.random()*10)+1;
    three=Math.floor(Math.random()*10)+1;
    four=Math.floor(Math.random()*10)+1;
    myChart.data.datasets[0].data[0]=one;
    myChart.data.datasets[0].data[1]=two;
    myChart.data.datasets[0].data[2]=three;
    myChart.data.datasets[0].data[3]=four;
      
    // re-render the chart
    myChart.update();
}
setInterval(getData, 3000);

}
