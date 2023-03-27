function updateclock()
{
    var date =new Date()
    var hh = date.getHours()
    var mm = date.getMinutes()
    var ss = date.getSeconds()
    var ampm = "AM"
    document.getElementById("hour").innerHTML=hh
    document.getElementById("minutes").innerHTML=mm
    document.getElementById("seconds").innerHTML=ss
    var updatethetime = setTimeout(function(){updateclock()},1000)
}