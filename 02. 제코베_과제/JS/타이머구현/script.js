// second 클릭하면 10초 증가
const secBox = document.querySelector(".second")
const secBtn = secBox.querySelector("input");
const startBtn = document.querySelector(".start-button");
const resetBtn = document.querySelector(".reset-button");

class TimerManager {
  constructor(){

  }

  addSecTime(){
    secBox.addEventListener("click", () => {
      if(secBtn.value == "00"){
        startBtn.setAttribute("disabled", "false");
        resetBtn.setAttribute("disabled", "false");
        secBtn.value = "10";
    
        startBtn.style.backgroundImage = 
        "url(./images/button/start-default.svg)";

        resetBtn.style.backgroundImage = 
        "url(./images/button/reset-default.svg)";
        
      } 
    })
  }

  start(){
    startBtn.addEventListener("click", () => {
      console.log("test")
      if(secBtn.innerText == "10"){
        startBtn.style.backgroundImage = 
        "url(./images/button/pause.svg)";
        
        let timerPlay = setInterval(() => {
          let count = parseInt(secBtn.value);
          count--;
          secBtn.value = count;
        })

        if(count == 0) {
          startBtn.setAttribute("disabled", "true");
          resetBtn.setAttribute("disabled", "true");

          startBtn.style.backgroundImage = 
          "url(./images/button/start-disabled.svg)";

          resetBtn.style.backgroundImage = 
          "url(./images/button/reset-disabled.svg)";
        }
      }
    });
  }

  reset(){
    resetBtn.addEventListener("click", () => {
      startBtn.setAttribute("disabled", "true");
      resetBtn.setAttribute("disabled", "true");
      
      secBtn.innerText = "00"
      startImg.setAttribute("src", "./images/button/start-disabled.svg");
      resetImg.setAttribute("src", "./images/button/reset-disabled.svg");
    });
  }
}

const manager = new TimerManager();
manager.addSecTime();
manager.start();
manager.reset();