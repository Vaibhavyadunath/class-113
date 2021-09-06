
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(150,250);
    video = createCapture(VIDEO);
    video.hide();

}
function draw (){
    image(video, 230,150,220,200);
    
        fill(255,0,255);
        stroke(200,0,0);
        circle(50,50,80);

        fill(0,255,255); 
        stroke(200,0,200);
        rect(90,40,460,20);

        fill(255,0,255);
        stroke(225,0,0);
        circle(50,430,80);
        
        fill(0,255,255); 
        stroke(200,0,200);
        rect(90,420,460,20);
    
}


