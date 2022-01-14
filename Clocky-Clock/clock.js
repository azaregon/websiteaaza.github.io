function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hour').innerHTML = h + ":" + m;
    document.getElementById('second').innerHTML = s ;
    setTimeout(startTime, 1);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
  }
  
  function date(){
   const today = new Date();
   months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
   
   y = today.getFullYear();
   m = today.getMonth();
   d = today.getDate();
   m = months[m];
   document.getElementById('date').innerHTML = d + "," ;
   document.getElementById('month').innerHTML = m  ;
   document.getElementById('year').innerHTML = y ;
   setTimeout(date,3000);
   
  }
  
  startTime();
  date();
  
  k=onclick=function(){k?(S=new Date,T=setInterval("a.innerHTML=(new Date-S)/1e3")):clearInterval(T);k=!k}
  