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