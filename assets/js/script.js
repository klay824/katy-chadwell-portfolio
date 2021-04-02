function updateTime(){
    let currentTime = moment().format('h:mm a');
    $(".time").text('It is ' + currentTime + '. ' + ' Do you know where your next full-stack web developer is?');
}

updateTime();
setInterval(function() {
    updateTime();
},60000);