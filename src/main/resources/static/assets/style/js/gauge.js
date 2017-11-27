//Function for drawing gauge using c3 and d3
function createGauge(){
    var chart = c3.generate({
        bindto: '#capacityGauge',
        data: {
            columns: [
                ['data', 91.4]
            ],
            type: 'gauge',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
    //        label: {
    //            format: function(value, ratio) {
    //                return value;
    //            },
    //            show: false // to turn off the min/max labels.
    //        },
    //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow /    rate of change
    //    max: 100, // 100 is default
    //    units: ' %',
    //    width: 39 // for adjusting arc thickness
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
    //            unit: 'value', // percentage is default
    //            max: 200, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 180
        }
    });  
}

createGauge();

////Function for drawing speedmeter using google charts
//function drawSpeedMeter(){
//    
//  var data = google.visualization.arrayToDataTable([
//          ['Label', 'Value'],
//          ['Capacity', 80]
//        ]);
//
//        var options = {
//            width: 600, height: 300,
//            yellowFrom:75, yellowTo: 90,
//            redFrom: 90, redTo: 100,
//            minorTicks: 5
//            
//        };
//
//        var chart = new google.visualization.Gauge(document.getElementById('capacityMeter'));
//
//        chart.draw(data, options);
//
//        setInterval(function() {
//          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//          chart.draw(data, options);
//        }, 10000);
//}

//google.charts.load('current', {packages: ['gauge']});
//google.charts.setOnLoadCallback(drawSpeedMeter);