let total_stars = 600;
let stars       = new Array(total_stars);
let star_size   = 8;
let speed       = 0;
let max_speed   = 40;
let height      = window.innerHeight;
let width       = window.innerWidth;

let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");


function randFloat(min, max){
    return Math.random() * (max - min) + min;
}

class Star {
    constructor() {
        this.x  = randFloat(-width, width);
        this.y  = randFloat(-height, height);
        this.z  = randFloat(0, width);
        this.pz = this.z
    }
    
    update(){
        this.z     = this.z - speed;
        if (this.z < 1){
            this.z = width;
            this.x = randFloat(-width, width);
            this.y = randFloat(-height, height);
        }
    }

    show(){
        fill(255);
        noStroke();
        let sx = ((this.x)/(this.z)) * width;
        let sy = ((this.y)/(this.z)) * height;
        let r  = (1 - (this.z / width)) * (star_size);
        ellipse(sx, sy, r, r);
    }
}


function setup() {
    // size(height, width)
    createCanvas(width, height);
    frameRate(60);
    background(0);
    for(let i=0; i<total_stars; i++){
        stars[i] = new Star();
    }
    sliderValue.innerHTML = slider.value;
    slider.oninput = function() {
        sliderValue.innerHTML = this.value;
    };
}

function draw() {
    // speed = (float(mouseX) / width) * 40;
    speed = (float(slider.value)/100) * 20;
    background(0);
    translate(width/2, height/2);
    stars.forEach(element => {
        element.update();
        element.show();
    })
    // for(let i=0; i<stars.length; i++){
    //     stars[i].update();
    //     stars[i].show();
    // }
}