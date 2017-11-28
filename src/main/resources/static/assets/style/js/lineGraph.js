//Use c3 and d3 to create line graph
//Function for monday graph
function drawMondayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterMondayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['People',0,10,14,19,25,24,23,23,24,32,17,27,43,33,37,34,37,22,25,28],
            ]
        }
    
    });    
}

//Function for tuesday graph
function drawTuesdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterTuesdayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['People',0,11,22,18,19,28,18,19,18,22,25,29,29,33,35,30,27,20,22,25],
            ]
        }
    });    
}

//Function for wednesday graph
function drawWednesdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterWednesdayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['People',0,10,14,20,20,22,25,29,30,28,27,33,32,29,40,36,37,37,29,29],
            ]
        }
    });    
}

//Function for thursday graph
function drawThursdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterThursdayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['People',0,9,15,18,19,22,28,27,32,30,33,33,38,28,29,33,30,29,28,20,23],
            ]
        }
    });    
}

//Function for friday graph
function drawFridayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterFridayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                ['People',0,9,15,15,22,22,25,21,25,21,27,24,25,25,23,30,33,32,31],
            ]
        }
    });    
}

//Function for saturday graph
function drawSaturdayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterSaturdayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                ['People',0,8,9,10,11,10,12,14,15,18,20,22,28,24,23,25,22,21,19],
            ]
        }
    });    
}

//Function for sunday graph
function drawSundayGraph(){
    var chart = c3.generate({
        size: {
            height: 300,
            width: 800
        },
        bindto: "#bricLaterSundayGraph",
        data: {
            x: 'Time',
            y: '# People',
            columns: [
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                ['People', 0,5,9,10,17,15,11,10,19,15,15,18,17,19,18,12,10,12,10],
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