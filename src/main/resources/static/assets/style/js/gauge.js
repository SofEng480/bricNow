//Function for setting each area's population
function setAreaData(){
    var counter = $('div.counterContainer');
    var totalNumberOfPeople = 0;
     
    //Get data from json file and pass total number of people to create gauge function
    $.ajax({
        url: 'assets/data/bricNowData.json',
        dataType: 'json',
        type: 'get',
        success: function(data){
            $.each(data, function(index, item){
                $.each(item, function(key, value){
                   counter.append(value.area + ': ' + value.lastCount  
                                  + ' (Update: ' + value.dateLastUpdate + ')</br></br>');
                    totalNumberOfPeople += +value.lastCount; 
                });
            });
            createGauge(totalNumberOfPeople);
        }      
    })
}

//Function for drawing gauge using c3 and d3
function createGauge(totalNumberOfPeople){
    var numberOfPeople = 0;
    numberOfPeople += +totalNumberOfPeople;
    var chart = c3.generate({
        bindto: '#capacityGauge',
        data: {
            columns: [
                ['data', numberOfPeople]
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
            pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'], // the three color levels for the percentage values.
            threshold: {
    //            unit: 'value', // percentage is default
    //            max: 100, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 180
        }
    });  
}

setAreaData();