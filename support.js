/*
    Supporting functions for the content.js file
*/

// this makes a web page show up blank
function clearPage() {
    document.body.innerHTML ='<div class="invisible"></div>';
}

// this gets the host name for a web page
function getHostName() {
    let host = window.location.hostname;
    alert('hostname: ' + host);
}



// gets the entire url for a web page
function getLocation() {
    let location = window.location;
    alert('location: ' + location);
}