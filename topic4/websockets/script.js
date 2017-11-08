let connection = new WebSocket('ws://demos.kaazing.com/echo');


connection.onopen = function () {
    document.getElementById("message").value +=('Client: Hello! Connection is open at ' + new Date());
  connection.send('Hello! Connection is open');
};

connection.onerror = function (error) {
    document.getElementById("error").value +=('WebSocket Error ' + error);
};

connection.onmessage = function (e) {
    document.getElementById("message").value += ('Server: ' + e.data + ' at ' + new Date());
};

let sendMessageBtn = document.getElementById('send-message');
sendMessageBtn.addEventListener('click', sendMessage);

function sendMessage(){
    document.getElementById("message").value +=('Client: Sending message!!!! at ' + new Date());
    connection.send('Sending message!!!!');
}