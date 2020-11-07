var ball;
var database;
var pos;
function setup(){
    createCanvas(400,400);
    ball = createSprite(10,10,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    //database sets the location
    pos = database.ref("Car/position");
    //reads the value from database
    pos.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}

function writePosition(x,y){
    //writes into the database
    database.ref("Car/position").set({
        'x' : pos.x + x,
        'y' : pos.y + y
    })
}

function showError(){


}
