function CheckIfOnLine()
{
    var request;
    if(window.XMLHttpRequest)
        request = new XMLHttpRequest();
    else
        request = new ActiveXObject("Microsoft.XMLHTTP");
    request.open('GET', 'http://147.185.221.180:7548', false);
    try {
        request.send()
        alert('Server is online 🟢')
    }
    catch {
        alert('Server is offline 🔴')
    }
}