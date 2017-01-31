$('#search-button').click(function() {
      $('.filter-wrapper').toggle('slow', function() {
    // Animation complete.
      });
    });
    $(function() {
      var start = moment().subtract(29, 'days');
      var end = moment();

      function cb(start, end) {
        $('#reportrange span').html(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
      }
      $('input[name="daterange"]').daterangepicker({
        locale: {
            format: 'DD MMM YYYY'
        },
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Tomorrow': [moment().add(1, 'days'), moment().add(1, 'days')],
           'Next 7 Days': [moment(), moment().add(6, 'days')],
           'Next 30 Days': [moment(), moment().add(29, 'days')],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Next Month': [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
          },
        "autoApply": true,
        "alwaysShowCalendars": true,
        "minDate": "DD/MM/YYYY",
        "maxDate": "DD/MM/YYYY",
        "opens": "left"
      },
       function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
      });
    });
    var modal = document.getElementById('login-modal');
    var btn = document.getElementById("modalBtn");
    var mobilebtn = document.getElementById("mobileModalBtn");
    var span = document.getElementsByClassName("close")[0];
    mobilebtn.onclick = function() {
        modal.style.display = "block";
    }
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }