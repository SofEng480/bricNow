//JavaScript for non-graph related stuff
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
    var i, graphContainer, verticalTabButton;
    graphContainer = document.getElementsByClassName("graphContainer");            
    for(i=0; i<graphContainer.length; i++){
        graphContainer[i].style.display="none";
    }

    verticalTabButton = document.getElementsByClassName("verticalTabButton");
    for(i=0; i<verticalTabButton.length; i++){
        verticalTabButton[i].className = verticalTabButton[i].className.replace(" active", "");
    }  

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Following is used for the contact us andfaq button events
//Used two span variables, one for each box's close(x) button
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

document.getElementById("default").click();
document.getElementById("default2").click();

function setAreaData(){
    var studioB = document.getElementById("studioB");
    studioB.innerHTML += "1";

    var climbingWall = document.getElementById("climbingWall");
    climbingWall.innerHTML += "2";

    var fitness = document.getElementById("fitness");
    fitness.innerHTML += "3";

    var courtOne = document.getElementById("courtOne");
    courtOne.innerHTML += "4";

    var courtTwo = document.getElementById("courtTwo");
    courtTwo.innerHTML += "5";

    var courtThree = document.getElementById("courtThree");
    courtThree.innerHTML += "6";

    var courtFour = document.getElementById("courtFour");
    courtFour.innerHTML += "7";

    var thirdNorthEast = document.getElementById("thirdNorthEast");
    thirdNorthEast.innerHTML += "8";

    var thirdNorth = document.getElementById("thirdNorth");
    thirdNorth.innerHTML += "9";

    var olympic = document.getElementById("olympic");
    olympic.innerHTML += "10";

    var thirdWest = document.getElementById("thirdWest");
    thirdWest.innerHTML += "11";

    var benchPress = document.getElementById("benchPress");
    benchPress.innerHTML += "12";    
}

setAreaData();
