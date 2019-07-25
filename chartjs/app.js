$(document).ready(function(){
  $.ajax({
    url: "http://localhost/chartjs/index.php",
    method: "GET",
    success: function(data) {
      console.log(d);
      var player = [];
      var score = [];

      for(var i in d) {
        player.push("Player " + d[i].runs);
        score.push(d[i].wicket);
      }

      var chartdata = {
        labels: player,
        datasets : [
          {
            label: 'Player Score',
            backgroundColor: 'rgba(200, 200, 200, 0.75)',
            borderColor: 'rgba(200, 200, 200, 0.75)',
            hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
            hoverBorderColor: 'rgba(200, 200, 200, 1)',
            data: score
          }
        ]
      };

      var ctx = $("#mychart");

      var barGraph = new Chart(ctx, {
        type: 'bar',
        data: chartdata
      });
    },
    error: function(data) {
      console.log(data);
    }
  });
});