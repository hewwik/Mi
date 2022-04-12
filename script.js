TweenMax.set( "#str0", {scale:.4, x:0, y:0})
TweenMax.set( "#str1", {scale:.8, x:100, y:0})

function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

var backEl = $(".background");
var numStars = 33//24;
var totalWidth = 1280-100;
var percent, thisStar, randAmt, startX, startY, endY, scaleAmt, speed, delayAmt;

for (var i=0; i<numStars; i++) {
  backEl.append( '<div id="star'+i+'" class="starryNight"></div>' );
  
  thisStar  = $("#star"+i);
  percent   = i/numStars;
  randAmt   = getRandomBetween(.1, 1); ///Math.random();
  startX    = totalWidth*percent + 0;
  startY    = -450+250*randAmt;
  endY      = 633 + 300*Math.random();
  scaleAmt  =  .1 + .3*randAmt;
  speed     = 2 + 2.05 * (1-randAmt);
  delayAmt  = getRandomBetween(.25, 6.20);
  
  TweenMax.set( thisStar, {scale:scaleAmt, x:startX, y:startY });
  TweenMax.to( thisStar, speed*2.05, {y:endY, delay:delayAmt, repeat:-1 });
}
