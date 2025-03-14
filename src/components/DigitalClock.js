import { useState } from "react";
import './DigitalClock.css';

function DigitalClock(){

    const [time, setTime] = useState(null);

    function showTime(){
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        var session = "AM";

        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        let cuurTime = h + ":" + m + ":" + s + " " + session;
        setTime(cuurTime);
        
    }
    setTimeout(showTime, 1000);

    return(
        <div id="MyClockDisplay" className="clock" onLoad={showTime}>{time}</div>
    )
}

export default DigitalClock;