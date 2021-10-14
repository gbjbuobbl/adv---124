noseX=0;
noseY=0;
diffrence = 0
leftwristX =0;
rightwristX = 0;

function setup() {
    video = createCapture(VIDEO)
    video.size(550,550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    background("#969A97");
    fill("#F90008");
    stroke("#F90008");
    square(noseX,noseY,diffrence)
}

function modelLoaded() {
    console.log("posenet is initialized!");
}

function gotPoses(results) {
      if (results.length > 0) {
          console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("noseX =" + noseX + "noseY" + noseY);

         leftwristX = results[0].pose.leftWrist.x;
         rightwristX = results[0].pose.rightWrist.x;
         diffrence = floor(leftwristX - rightwristX)
      }
}
