var str2ab = function(str) {
   var encodedString = unescape(encodeURIComponent(str));
   var bytes = new Uint8Array(encodedString.length);
   for (var i = 0; i < encodedString.length; ++i) {
      bytes[i] = encodedString.charCodeAt(i);
   }
   return bytes.buffer;
};



var listOfSerialDevices = function(ports) {
  for (var i=0; i<ports.length; i++) {
  console.log(ports[i].path + ' ' + ports[i].vendorId + ' ' + ports[i].productId + ' ' + ports[i].displayName);
    chrome.serial.connect(ports[i].path, function (ConnectionInfo) { 
        if (ConnectionInfo) {
        console.log('id:' + ConnectionInfo.connectionId) 
        var msg = '1'
        chrome.serial.send(ConnectionInfo.connectionId, str2ab(msg), function() { console.log('Message sent!')})
    }
    } );
  }
}

chrome.serial.send(ConnectionInfo.connectionId, str2ab(msg), function(sendInfo) {
    if (sendInfo.error) {
        console.log(sendInfo.error);
    } else if (sendInfo.bytesSent > 0) {
        console.log('Message sent!');
    }
});