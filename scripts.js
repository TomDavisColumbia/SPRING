// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        // Add a Chart that displays your data
        // Add Rows and Columns
        var data = new google.visualization.DataTable();
        
        data.addColumn('string', 'Platforms');
        
        data.addColumn('number', '% of Adults');
        data.addRows([
          ['Twitter', 23],
          ['Instagram', 26],
          ['Pinterest', 28],
          ['LinkedIn', 28],
          ['FB', 56]
        ]);

        // Set chart options
        var options = {'title':'How Many Adults are Using Social Platforms?',
                       'width':700,
                       'height':400,
                       'hAxis':{}
                     };
                     
 
                   

var chartTextStyle = { 
'color': '#FF0000',
'fontName': "Helvetica",
'fontSize': 12,
'bold': true,
'italic': false

};   
          
       options.hAxis.chart         
               
                     
        options.hAxis.minValue = 0; 
  
  /*      
               var data = google.visualization.arrayToDataTable([
         ['Element', '% of Adults', { role: 'style' }, { role: 'annotation' } ],
         ['Copper', 8.94, '#b87333', 'Cu' ],
         ['Silver', 10.49, 'silver', 'Ag' ],
         ['Gold', 19.30, 'gold', 'Au' ],
         ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
      ]);
        
        */
        
        
        
        
       
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }