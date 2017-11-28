//Use c3 to create line graph
//Function for monday graph
function drawMondayGraph(){
    $.getJSON('assets/data/bricLaterMondayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterMondayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });
}

//Function for tuesday graph
function drawTuesdayGraph(){
    $.getJSON('assets/data/bricLaterTuesdayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterTuesdayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });   
}

//Function for wednesday graph
function drawWednesdayGraph(){
    $.getJSON('assets/data/bricLaterWednesdayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterWednesdayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });    
}

//Function for thursday graph
function drawThursdayGraph(){
    $.getJSON('assets/data/bricLaterThursdayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterThursdayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });    
}

//Function for friday graph
function drawFridayGraph(){
    $.getJSON('assets/data/bricLaterFridayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterFridayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });      
}

//Function for saturday graph
function drawSaturdayGraph(){
    $.getJSON('assets/data/bricLaterSaturdayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterSaturdayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });    
}

//Function for sunday graph
function drawSundayGraph(){
    $.getJSON('assets/data/bricLaterSundayData.json', function(externalData){
        var chart = c3.generate({
            size: {
                height: 300,
                width: 800
            },
            bindto: "#bricLaterSundayGraph",
            data: {
                json: externalData,
                type:'line'
            }
        })  
    });      
}

drawMondayGraph();
drawTuesdayGraph();
drawWednesdayGraph();
drawThursdayGraph();
drawFridayGraph();
drawSaturdayGraph();
drawSundayGraph();