setInterval(displayClock,500);
function displayClock() {
    var date=new Date();
    var hrs=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var en='AM';
    var x='';
    if (hrs> 12) {
        en='PM';
        hrs=hrs-12;
        ;
    }
    if (hrs == 0) {
        hrs=12;
    }
    if(hrs<10)
        hrs='0'+ hrs;
    if(min<10)
         min='0'+ min;
    if(sec<10)
         sec='0'+ sec;
    
    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
    document.getElementById('ampm').innerHTML=en;
}

