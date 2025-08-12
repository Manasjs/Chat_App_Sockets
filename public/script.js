// this is frontend
var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');

btn.onclick = function exec(){
    socket.emit('msg_send',{
          msg:inputMsg.value
    });

    socket.on('msg_rcvd',(data)=>{
        let ltmsg = document.createElement('li');
        ltmsg.innerText = data.msg;
        msgList.appendChild(ltmsg);
    })
}