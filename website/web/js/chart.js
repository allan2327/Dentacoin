
    // Fixed amount of ever existing Dentacoins
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr.send();

    // Dentacoins of owner
          var xhr2 = new XMLHttpRequest();
          xhr2.open("GET", "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=0xc99f67433019D1DA18C311e767FAa2b8EC250886&tag=latest&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr2.send();

    // Dentacoins of contract
          var xhr3 = new XMLHttpRequest();
          xhr3.open("GET", "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&tag=latest&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr3.send();


          var json = JSON.parse(xhr.responseText);
          var json2 = JSON.parse(xhr2.responseText);
          var json3 = JSON.parse(xhr3.responseText);

          var totalAmount = parseInt(json.result);
          var ownerAmount = parseInt(json2.result);
          var contractAmount = parseInt(json3.result);

          var dentacoin = ownerAmount + contractAmount;
          var distAmount = totalAmount - dentacoin;




  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Dentacoin Foundation', dentacoin],
      //['Available', contractAmount],
      //['Distributed', distributed]
      ['ICO', contractAmount],
      ['Public', distAmount]
    ]);

    // Set chart options
    var options = {
                  //'title':'DCN DISTRIBUTION',
                    'legend':'none',
                    'pieSliceText': 'label',
                   'width':300,
                   'height':300,
                   'is3D': false,
                   'colors': ['#8D2F47', '#FF9900', '#3366CC'],
                   'backgroundColor': '#F9F9F9'
                 };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
