function booble() {
  let element = "";

  for (let index = 1; index <= 161; index++) {
    let rn = Math.floor(Math.random() * 10);

    element += `<div class="boble">${rn}</div>`;
  }

  document.querySelector(".main").innerHTML = element;
}
let time = 60;

function settimer() {
  let timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timeval").innerHTML = time;
    } else {
      clearInterval(timer);
      document.querySelector(".main").innerHTML="game over"
    }
  }, 1000);
}

let hit =0;

function forhit() {
   hit = Math.floor(Math.random()*10)
  document.querySelector("#hitter").innerHTML=hit

}
let rate = 0;

function score() {
  rate += 10 ;
  document.querySelector("#scoree").innerHTML=rate
}



function tar() {
  document.querySelector(".main")
  .addEventListener("click",(docu) => {
  let chnge = (Number(docu.target.innerHTML));
   
  if (chnge === hit) {
    score();
    booble()
    forhit()
  } else {
    
  }
  })
}



settimer();
booble();
forhit();
tar();
