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