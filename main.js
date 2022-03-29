noseX=0;
noseY=0;
function preload(){
mustache=loadImage('https://i.postimg.cc/brBbc9W7/m.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video,modleLoaded);
    poseNet.on('pose',gotPoses);
}

function modleLoaded(){
    console.log('Pose net is initialized')
}

function draw(){
image(video,0,0,300,300)
image(mustache,noseX,noseY,30,30)
}

function take_snapshot(){
    save('FilterAppImage.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-12;
        noseY=results[0].pose.nose.y;
    }
}