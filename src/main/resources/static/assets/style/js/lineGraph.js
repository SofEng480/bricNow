//Use c3 and d3 to create line graph
//Function for monday graph
function drawMondayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterMondayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

//Function for tuesday graph
function drawTuesdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterTuesdayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

//Function for wednesday graph
function drawWednesdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterWednesdayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

//Function for thursday graph
function drawThursdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterThursdayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

//Function for friday graph
function drawFridayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterFridayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

//Function for saturday graph
function drawSaturdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterSaturdayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

//Function for sunday graph
function drawSundayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 1000
        },
        bindto: "#bricLaterSundayGraph",
        data: {
            x: 'Time',
            y: 'Person',
            columns: [
                ['Time', 50, 100, 150, 200],
                ['Person', 30, 200, 100, 300],
            ]
        }
    });    
}

drawMondayGraph();
drawTuesdayGraph();
drawWednesdayGraph();
drawThursdayGraph();
drawFridayGraph();
drawSaturdayGraph();
drawSundayGraph();

////Function for drawing monday graph
//function drawMondayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterMondayGraph'));
//
//    chart.draw(data, options);
//}
//
////Function for drawing tuesday graph
//function drawTuesdayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterTuesdayGraph'));
//
//    chart.draw(data, options);
//}
//
////Function for drawing wednesday graph
//function drawWednesdayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterWednesdayGraph'));
//
//    chart.draw(data, options);
//}
//
////Function for drawing thursday graph
//function drawThursdayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterThursdayGraph'));
//
//    chart.draw(data, options);
//}
//
////Function for drawing friday graph
//function drawFridayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterFridayGraph'));
//
//    chart.draw(data, options);
//}
//
////Function for drawing saturday graph
//function drawSaturdayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterSaturdayGraph'));
//
//    chart.draw(data, options);
//}
//
////Function for drawing sunday graph
//function drawSundayGraph() {
//    
//    var data = new google.visualization.DataTable();
//    data.addColumn('number', 'X');
//    data.addColumn('number', 'Person');
//
//    data.addRows([
//        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//        [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);
//
//    var options = {
//        hAxis: {
//          title: 'Time'
//        },
//        vAxis: {
//          title: 'Population'
//        }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('bricLaterSundayGraph'));
//
//    chart.draw(data, options);
//}
//
//
//google.charts.load('current', {packages: ['corechart', 'line']});
//google.charts.setOnLoadCallback(drawMondayGraph);
//google.charts.setOnLoadCallback(drawTuesdayGraph);
//google.charts.setOnLoadCallback(drawWednesdayGraph);
//google.charts.setOnLoadCallback(drawThursdayGraph);
//google.charts.setOnLoadCallback(drawFridayGraph);
//google.charts.setOnLoadCallback(drawSaturdayGraph);
//google.charts.setOnLoadCallback(drawSundayGraph);