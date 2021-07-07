function gameredirect()
{
    window.location.assign("minigame.html");
}
function resultredirect()
{
    window.alert("Let's see how you did...are you an adult or are you still a goddamn child...");
    setTimeout(
            function()
            {
                window.location.assign("result.html");
            }
            , 6000);
}
function startgame()
{
    document.getElementById("intro_to_minigame").style.display = "none";
    document.getElementById("minigame").style.display = "block";
    document.getElementById("tab1").style.display = "block";
    document.getElementById("timer").style.display = "block";
    let starttime = setInterval(
            function ()
            {
                var maxmin = document.getElementById("maxmin").value;
                var maxsec = document.getElementById("maxsec").value;
                if (maxmin == 0 && maxsec == 0)
                {
                    clearInterval(starttime);
                    resultredirect();
                } else if (maxsec == 0)
                {
                    maxmin -= 1;
                    maxsec = 59;
                    document.getElementById("maxmin").value = maxmin;
                    document.getElementById("maxsec").value = maxsec;
                } else
                {
                    maxsec -= 1;
                    document.getElementById("maxsec").value = maxsec;
                }
                if (maxsec < 10)
                {
                    if(maxmin == 0)
                    {
                        document.getElementById("time").style.color = "red";
                    }
                    document.getElementById("time").innerHTML = maxmin + " : 0" + maxsec;
                } else
                {
                    document.getElementById("time").innerHTML = maxmin + " : " + maxsec;
                }
            }
    , 1000);
}
function questions(tab)
{
    if(tab === 15)
    {
        resultredirect();
    }
    else
    {
        var tabname = "tab" + tab;
        document.getElementById(tabname).style.display = "none";
        tab += 1;
        tabname = "tab" + tab;
        document.getElementById(tabname).style.display = "block";
    }
}
