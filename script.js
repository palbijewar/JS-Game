score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    console.log("Key code is : ", e.keyCode)
    if(e.keyCode==38){
        jerry = document.querySelector('.jerry');
        jerry.classList.add('animateJerry');
        setTimeout(() =>{
jerry.classList.remove('animateJerry');
        }, 700);
    }
    if(e.keyCode==39){
        jerry = document.querySelector('.jerry');
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = jerryX + 112 + "px";
    }
    if(e.keyCode==37){
        jerry = document.querySelector('.jerry');
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = (jerryX - 112 )+ "px";
    }
}

setInterval(() => {
      jerry = document.querySelector('.jerry');
      gameOver = document.querySelector('.gameOver');
      tom = document.querySelector('.tom');
      scoreCount = document.querySelector('.scoreCount');
      
      jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
      jy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));
      tx = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
      ty = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));

      offsetX = Math.abs(jx-tx);
      offsetY = Math.abs(jy-ty);
      if(offsetX<73 && offsetY<52) {
        gameOver.innerHTML = "Game Over!"
        tom.classList.remove('animateTom');
        audiogo.play();
        setTimeout(()=>{
audiogo.pause();
audio.pause();
        }, 1000);
      }
      else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(tom, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            tom.style.animationDuration = newDur + 's';
        }, 500);
      }
 
},10);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score : " + score;
};
