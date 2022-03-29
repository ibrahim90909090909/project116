mustacheX=0;
mustacheY=0;
 function preload(){
mustache=loadImage('https://i.postimg.cc/3xR2wYWv/mustache.png');
 }
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('poseNet is Initialized');
}
function gotPoses(results){
if(results.length > 0)
console.log(results);
mustacheX=results[0].pose.mustache.x;
mustacheY=results[0].pose.mustache.y;
console.log("mustache x =" +mustacheX);
console.log("mustache y =" +mustacheY);
}
function draw(){
image(video, 0, 0, 300, 300);
image(mustache, mustacheX=130, mustacheY=70, 70, 20);
}
function take_snapshot(){
save('myFilterImage.png')
}
