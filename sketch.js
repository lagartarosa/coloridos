let  cor ;
let  circuloX ; //horizontal
let  circuloY ; //vertical

function setup() {
  
 createCanvas (400,400); //largura x altura
 background( color ( 100,50,70));
 cor = color (random (0,255), random (0,255), random (0,255));
  circuloX = [0,0,0,0]; 
  circuloY = [random (height), random (height), random(height), random(height)];
  }


//círculo X = 0,0,0,0
//círculo Y = 300,150,50,25

function draw () { 
  
  fill( cor );
  
  //console.log(circuloX.lenght);
  for (let contador in circuloX) {
    //console.log(contador)
    circle ( circuloX [ contador ], circuloY [ contador ],50);
    circuloX [contador] += random (0,3);
    circuloY [contador] += random(-3,3);
    
    if (circuloX [contador] >= width ) {
      circuloX [contador]= 0 ;
      circuloY [contador] = random (height);
    }
    
  }
  
  if (mouseIsPressed){
    cor = color (random ( 0,255),random (0,255), random (0,255),random (0,100));
  }
}
