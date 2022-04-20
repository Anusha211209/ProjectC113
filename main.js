function preload(){ 
}

function setup(){
    canvas = createCanvas(640, 500);
    canvas.position(340, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 10, 10, 640, 500);

    rect(10, 10, 20, 500)
    stroke(176,224,230)
    fill(176,224,230)

    rect(620, 10, 20, 500)
    stroke(255,215,0)
    fill(255,215,0)

    rect(10, 10, 640, 20)
    stroke(60,179,113)
    fill(60,179,113)
    circle(10, 10, 100);

    rect(10, 480, 640, 20)
    stroke(220,20,60)
    fill(220,20,60)
    circle(620, 10, 100);
}

function take_snapshot(){
    save("student_name.png");
}