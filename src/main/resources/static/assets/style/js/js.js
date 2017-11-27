//Function for switching horizontal tabs, BricNow and BricLater
function openHorizontalTab(evt, tabName){
    var i, horizontalTabContent, horizontalTabButton;
    horizontalTabContent = document.getElementsByClassName("horizontalTabContent");            
    for(i=0; i<horizontalTabContent.length; i++){
        horizontalTabContent[i].style.display="none";
    }

    horizontalTabButton = document.getElementsByClassName("horizontalTabButton");
    for(i=0; i<horizontalTabButton.length; i++){
        horizontalTabButton[i].className = horizontalTabButton[i].className.replace(" active", "");
    }  

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Function for switching vertical tabs, Monday-Sunday tabs in BricLater
function openVerticalTab(evt, tabName){
    var i, verticalTabContent, verticalTabButton;
    verticalTabContent = document.getElementsByClassName("verticalTabContent");            
    for(i=0; i<verticalTabContent.length; i++){
        verticalTabContent[i].style.display="none";
    }

    verticalTabButton = document.getElementsByClassName("verticalTabButton");
    for(i=0; i<verticalTabButton.length; i++){
        verticalTabButton[i].className = verticalTabButton[i].className.replace(" active", "");
    }  

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Function for drawing monday graph
function drawMondayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterMondayGraph'));

    chart.draw(data, options);
}

//Function for drawing tuesday graph
function drawTuesdayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterTuesdayGraph'));

    chart.draw(data, options);
}

//Function for drawing wednesday graph
function drawWednesdayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterWednesdayGraph'));

    chart.draw(data, options);
}

//Function for drawing thursday graph
function drawThursdayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterThursdayGraph'));

    chart.draw(data, options);
}

//Function for drawing friday graph
function drawFridayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterFridayGraph'));

    chart.draw(data, options);
}

//Function for drawing saturday graph
function drawSaturdayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterSaturdayGraph'));

    chart.draw(data, options);
}

//Function for drawing sunday graph
function drawSundayGraph() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Person');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ]);

    var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('bricLaterSundayGraph'));

    chart.draw(data, options);
}


//Function for drawing speedmeter using google charts
function drawSpeedMeter(){
    
  var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Capacity', 80]
        ]);

        var options = {
            width: 600, height: 300,
            yellowFrom:75, yellowTo: 90,
            redFrom: 90, redTo: 100,
            minorTicks: 5
            
        };

        var chart = new google.visualization.Gauge(document.getElementById('capacityMeter'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 10000);
}

//Following is used for the contact us, about, faq button events
//Used three span variables, one for each box's close(x) button
var contactBox = document.getElementById("contactBox");
var faqBox = document.getElementById("faqBox");
var contactUs = document.getElementById("contactUs");
var faq = document.getElementById("faq");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var modal;

contactUs.onclick = function(){
    contactBox.style.display = "block";
    modal = contactBox;
}

faq.onclick = function(){
    faqBox.style.display = "block";
    modal = faqBox;
}

span1.onclick = function(){
    modal.style.display = "none";
}

span2.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.load('current', {packages: ['gauge']});
google.charts.setOnLoadCallback(drawMondayGraph);
google.charts.setOnLoadCallback(drawTuesdayGraph);
google.charts.setOnLoadCallback(drawWednesdayGraph);
google.charts.setOnLoadCallback(drawThursdayGraph);
google.charts.setOnLoadCallback(drawFridayGraph);
google.charts.setOnLoadCallback(drawSaturdayGraph);
google.charts.setOnLoadCallback(drawSundayGraph);
google.charts.setOnLoadCallback(drawSpeedMeter);
document.getElementById("default").click();
document.getElementById("default2").click();