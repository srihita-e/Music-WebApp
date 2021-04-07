song1 = "";
song2 = "";

function preload()
{
    
}

function loadSound()
{
    song1 = loadSound("believer.mp3");
    song2 = loadSound("thunder.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#B2AC88");
    stroke("#B2AC88");
}