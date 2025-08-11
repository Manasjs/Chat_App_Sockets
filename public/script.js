// this is frontend
var socket = io();

const btn = document.getElementById('btn');
btn.onclick = function exec (){
    socket.emit('message from client')
}

socket.on('from server',()=>{
    console.log('collected a event from server');
    const div = document.createElement('div');
    div.innerText = 'new event from server';
    document.body.appendChild(div);
})