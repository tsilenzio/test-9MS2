$(document).ready(function () {
  // Setup Bulma tab functionality for the physician page
  $('#tabs li').on('click', function () {
    var tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-content div').removeClass('is-active');
    $('div[data-content="' + tab + '"]').addClass('is-active');
  });

  // Setup and display that ChartJS chart
  if($('#chart').length) {
    var labels = [];
    var datasets = [];

    $(responses).each(function (key, response) {
      // Skip any questions that are not temperature related
      if (!_.includes(response.question.text, 'temperature')) {
        return;
      }

      // Create labels for the chart
      labels.push(response.timestamp);

      // The chart uses a dataset, an object. We need to check
      // to see if we need to create a dataset or update one.
      var index = _.findIndex(datasets, function(obj) {
        return obj.label == response.question.text
      });

      if(index == -1) {
        // Create new dataset
        datasets.push({
          label: response.question.text,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [response.text],
        });
      } else {
        // Update the dataset
        datasets[index].data.push(response.text);
      }
    })

    // Default setup out of the box for ChartJS
    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {}
    });
  }
});
