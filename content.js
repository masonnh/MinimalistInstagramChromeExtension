/*
    Created by: Mason Hunter
    
    Note: This is my first Google Chrome extension.
    I'm just playing around with JavaScript, trying to learn what it can do!
*/

// whatever is put here runs when the page loads
init();

// looks at the host website
switch (window.location.hostname) {
    // if the host site is instagram
    case "www.instagram.com":
        // if we are on the explore page
        if (window.location.pathname === "/explore/") {
            // clear it!
            clearPage();
        }
        // end of this case
        break;
}

// the function that runs whenever a new page loads
function init() {
    // check if the url has changed
    let lastUrl = location.href; 
    new MutationObserver(() => {
    const url = location.href;
    // if it has changed, call the onUrlChange function
    if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
    }
    }).observe(document, {subtree: true, childList: true});
}

// function to run when the url changes
function onUrlChange() {
    // we reload instagram pages so that the clearPage() effects go away
    // we reload the explore page so that the clearPage() effects get applied
    if (window.location.hostname === "www.instagram.com") {
        // we do not want the messages tab to reload & clear (because then people can't read their messages)
        if (window.location.href.indexOf('/direct/') === -1) { // indexOf returns -1 if the string is not found
            location.reload();
        }
    }
}

// this makes a web page show up blank
function clearPage() {
    document.body.innerHTML ='<div class="invisible"></div>';
}


/*
    FUNCTIONS I NEED TO GET INFO FROM URLS
*/

// this gets the host name for a web page
function getHostName() {
    let host = window.location.hostname;
    alert('hostname: ' + host);
}

// this gets the path of a web page
function getPath() {
    let path = window.location.pathname;
    alert('path: ' + path);
}

// gets the entire url for a web page
function getLocation() {
    let location = window.location;
    alert('location: ' + location);
}