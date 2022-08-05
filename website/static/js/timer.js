var timer;
var ele = document.getElementById('timer')
ele.addEventListener('load', inputCapture())

function inputCapture(){
    var clicked = false;

    document.addEventListener('keydown', function(e){
        if (e.key === " " && e.target === document.body) {  
            // Prevent pressing space bar from scrolling the page down
            e.preventDefault();  
          }  

        if(e.key === " " ){
            if(clicked){
                document.body.style.backgroundColor = 'red';
                stopTimer();
                clicked = false;
            }
            else{
                document.body.style.backgroundColor = 'green';
                runTimer();
                clicked = true;
            }
            
        }

    })

    document.addEventListener("touchstart", (e) =>{
        if(clicked){
            document.body.style.backgroundColor = 'red';
            stopTimer();
            clicked = false;
        }
        else{
            document.body.style.backgroundColor = 'green';
            runTimer();
            clicked = true;
        }
    })
}

function runTimer() {
    var min = 0;
    var sec = 0;
    var centisec = 0;

    timer=setInterval(()=> {
        if(centisec === 100){
            sec++;
            centisec=0;
            
            if(sec == 60){
                min++;
                sec = 0;
            }


        }

        ele.innerHTML=min+" . "+sec+" . "+centisec

        centisec++;

    }, 10)
}

function stopTimer(){
    clearInterval(timer)
}