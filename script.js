function setIframeSource() {
    var theSelect = document.getElementById('company');
    var theIframe = document.getElementById('myIframe');
    var theUrl;

    theUrl = theSelect.options[theSelect.selectedIndex].value;
    theIframe.src = theUrl;
}
var iframe = document.getElementById('iframe');