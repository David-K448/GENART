

let pallete1 = ['#b6f7aa'];
let compPal1 = ['#aab6f7', '#c6b3e2','#dfafcd', '#dfafcd', '#e7c5b3', '#d2dfaf', ];

let pallete2 = ['	#bbd3ea'];
let pallete3 = ['#d6bbcb'];
let pallete4 = ['#b54423'];
let pallete5 = ['#899ef0'];
let pallete6 = ['#b87c75'];
let pallete7 = ['#46afb9'];
let pallete8 = ['#43af85'];
let pallettes = [[pallete1, compPal1], pallete2, pallete3, pallete4, pallete5, pallete6, pallete7, pallete8];
let index = 0;

let q1 = "If  you  apply  yourself  to  the  task  before  you,  following  the  right  reason  seriously,  vigorously,  calmly,  without  allowing  anything  else  to  distract  you,  but  keeping  your  divine  part  pure,  as  if  you  might  be  bound  to  give  it  back  immediately;  if  you  hold  this,  expecting  nothing,  fearing  nothing,  but  satisfied  with  your  present  activities  according  to  nature,  and  with  heroic  truth  in  every  word  and  sound  which  you  utter,  you  will  live  happily.  And  there  is  no  man  who  is  able  to  prevent this."


function setup() {
  var canvas = createCanvas(1190, 700);
  canvas.parent('sketch-holder');
  noLoop();
}

function getBG(pallettes){
  let randIndex = Math.floor(Math.random() * pallettes.length);
  index = randIndex;
  return pallettes[randIndex][0];
}

function getColor(pallettes) {
  let randIndex = Math.floor(Math.random() * pallettes.length) +2;
  return pallettes[index][randIndex];
}

function saveCanvasAsPNG(canvas) {
  const dataURL = canvas.toDataURL('imgs/png');
  
  const link = document.createElement('a');
  
  link.href = dataURL;
  
  link.download = 'my-canvas.png';
  
  document.body.appendChild(link);
  
  link.click();
  
  document.body.removeChild(link);
}


function draw() {
  let bg = getBG(pallettes);
  background(bg);
  drawGrid();
  drawDots();
  //saveCanvasAsPNG(canvas);
}

function drawGrid() {
  strokeWeight(.15);
  
  stroke('#ededed');
  
  let cellWidth = 35;
  let cellHeight = 35;
  
  for (let x = 0; x < width; x += cellWidth) {
    line(x, 0, x, height);
  }
  
  for (let y = 0; y < height; y += cellHeight) {
    line(0, y, width, y);
  }
}



function drawDots() {
  let i = 0
  for (let x = 0; x < 34; x++) {
    for (let y = 0; y < 20; y++) {
      let index = x+y*20;
      let currChar = q1[index];
      if(currChar != " "){
        switch (currChar) {
          case 'a':
          case 'A':{
            noStroke();
            let color = compPal1[0];
            fill(color);
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
          case 'e':
          case 'E':{
            noStroke();
            let color = compPal1[1];
            fill(color);
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
          case 'i':
          case 'I':{
            noStroke();
            let color = compPal1[2];
            fill(color);
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
          case 'o':
          case 'O':{
            noStroke();
            let color = compPal1[3];
            fill(color);
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
          case 'u':
          case 'U':{
            noStroke();
            let color = compPal1[4];
            fill(color);
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
          case 'y':
          case 'Y':{
            noStroke();
            let color = compPal1[5];
            fill(color);
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
          default: {
            noStroke();
            fill('ffffff')
            ellipse(x * 35 + 17.5, y * 35 + 17.5, 27.5, 27.5);
            break;
          }
        }
        
      }
    }
  }
}