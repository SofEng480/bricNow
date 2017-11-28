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
                ['# People',0,3,2,4,10,4,6,7,8,8,6,9,8,11,12,12,12,9,8,8]
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
                ['# People',0,2,3,5,4,7,8,8,7,6,11,11,7,14,12,13,11,8,7,7],
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
                ['# People',0,2,4,4,7,6,6,7,8,3,8,9,10,9,11,13,8,8,7,14],
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
                ['# People',0,1,5,2,7,7,7,6,5,7,2,11,12,13,18,5,7,8,9,10],
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
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['# People',0,1,2,2,3,7,8,7,9,11,8,7,4,7,4,6,3,4,6,6],
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
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['# People',0,1,1,2,1,3,2,2,3,2,3,4,5,6,8,4,4,4,3,2],
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
                ['Time',5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                ['# People', 0,1,1,1,2,1,3,2,3,4,3,5,2,0,3,7,6,4,3,2],
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