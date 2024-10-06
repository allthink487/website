

window.onload = ()=>{
    $('#chat_entry').focus()
    $(function(){
        var socket = io.connect("http://localhost:8080")
        $('form').submit((even)=>{
            even.preventDefault()
            socket.emit('chat_msg',{msg:$("#chat_entry").val()})
         
        })
        socket.on('chat_send',(message)=>{
            date = new Date()
                hour = date.getHours()
                minute = date.getMinutes()
                $('section').append(`
                <div class="msg" >
                <span class="img"><img src="buy-1.jpg"></span>
                <div class="a">
                <span class="msg_text">${message.msg} </span> 
                <span class="msg_hour">${hour}h : ${minute} min </span>
                </div>
                </div>
                `)
                $('#chat_entry').val("")
        }) 
        /*fetch('http://localhost:8080/lastmsg')
        .then(reponse=>reponse.json())
        .then((data)=>{
            console.log(data)
            date = new Date()
                hour = date.getHours()
                minute = date.getMinutes()
                data.forEach(element => {
                    $('section').append(`
                <div class="msg" >
                <span class="img"><img src="buy-1.jpg"></span>
                <div class="a">
                <span class="msg_text">${element.msg}</span> 
                <span class="msg_hour">${hour}h : ${minute} min </span>
                </div>
                </div>
                `)
                });
                
        })*/
    })
    
}