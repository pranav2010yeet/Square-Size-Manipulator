noseX=0
noseY=0
left_wrist_X=0
left_wrist_y=0
right_wrist_x=0
right_wrist_y=0
difference=0


function setup(){


    video=createCapture(VIDEO)
video.size(500,500)
video.position(100,200)

canvas=createCanvas(400,400)
canvas.position(700,200)

posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}

function gotposes(results){
 if (results.length>0) {
     console.log(results)
     //fetch value of noseX
noseX=results[0].pose.nose.x; 
noseY=results[0].pose.nose.y;
right_wrist_x=results[0].pose.rightWrist.x
right_wrist_y=results[0].pose.rightWrist.y
left_wrist_x=results[0].pose.leftWrist.x
left_wrist_y=results[0].pose.leftWrist.y
//find difference between left and right wrist
difference=floor(left_wrist_x-right_wrist_x)
 }
}


function modelloaded(){
    console.log("PRANAV MODEL LOADED!!!")
}

function draw(){
background("black")

//code for filling the color
fill("white")
//code for giving stroke
stroke("yellow")
//code for drawing the square
square(noseX,noseY,difference)
document.getElementById("status").innerHTML="Side of square = "+difference+"px" 
}
