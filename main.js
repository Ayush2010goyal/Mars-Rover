canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var marsimg = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];

random_number = Math.floor(Math.random()*4);
console.log(random_number);

rover_width=100;
rover_height=90;

rover_image="rover.png";
background_image=marsimg[random_number];


rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

   rover_imgTag=new Image();
   rover_imgTag.onload=roverbackground; 
   rover_imgTag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function roverbackground(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=='38'){
        console.log("up");
        up();
    }
    if (keypressed=='40'){
        console.log("down");
        down();
    }
    if (keypressed=='37'){
        console.log("left");
        left();
    }
    if (keypressed=='39'){
        console.log("right");
        right();
    }
}

function up(){
    console.log("up");
    if (rover_y>=0){
        rover_y=rover_y-10;
        //rover_y -=10;//
        console.log("when up arrow is clicked, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        roverbackground();
    }
}
function down(){
    console.log("down");
    if (rover_y<=500){
        rover_y=rover_y+10;
        //rover_y +=10;//
        console.log("when up arrow is clicked, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        roverbackground();
    }
}

function left(){
    console.log("left");
    if (rover_x>=0){
        rover_x=rover_x-10;
        //rover_x -=10;//
        console.log("when up arrow is clicked, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        roverbackground();
    }
}

function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        //rover_x +=10;//
        console.log("when up arrow is clicked, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        roverbackground();
    }
}
