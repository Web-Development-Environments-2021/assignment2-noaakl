function setKey(key, e) {
    //TODO: fix
    let code = e.keyCode;
    console.log(code)
    // if (47<code && code<106){
    if (code!=9 && code!=13){
        console.log(key, code)
        if (key == "left") {
            leftKey = code;
        }
        if (key == "up") {
            upKey = code;
        }
        if (key == "right") {
            rightKey = code;
        }
        if (key == "down") {
            downKey = code;
        }
    }
}

function setBallsNum(num) {
    food_remain = num;
    console.log("settings food remain: " + food_remain)
    numOf5PointsBall = Math.floor(0.6*num);
    numOf15PointsBall = Math.floor(0.3*num);
    numOf25PointsBall = Math.floor(0.1*num);
    ballPoints = [numOf5PointsBall, numOf15PointsBall, numOf25PointsBall]
    console.log("settings ball points: " + ballPoints)
}

function setballsColor(points, color) {
    console.log(points, color);
    switch (points) {
        case 5:
            color5PointsBall = color;
        case 15:
            color15PointsBall = color;
        case 25:
            color25PointsBall = color;
    }
}

function setgameTime(sec) {
    gameTime = sec;
}

function setNumOfMonsters(num) {
    numOfMonsters = num;
    console.log("settings num: " + numOfMonsters);
}

function setRandomSettings() {
    setBallsNum(Math.floor(Math.random()*41)+50);
    setballsColor(5, setRandomColor());
    setballsColor(15, setRandomColor());
    setballsColor(25, setRandomColor());
    setgameTime(Math.floor(Math.random()*241)+60);
    setNumOfMonsters(Math.floor(Math.random()*4)+1);
}

function setRandomColor() {
    var letters = '0123456789ABCDEF';
    var hashtag = '#';
    for (var i = 0; i < 6; i++) {
        randomColor = hashtag + letters[Math.floor(Math.random() * 16)];
    }
    return randomColor; 
}

function play() {
    if (newGame == true) {
        Start();
        show(settings, app);
        // newGame = false;
    }
    else {
        $(document).ready(function() {
            context = canvas.getContext("2d");
            Start();
        });
        show(settings, app);
    }
}
