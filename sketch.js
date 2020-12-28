
var hr,mn,se
var seAngle
var mnAngle
var hrAngle

function setup() {
  createCanvas(800,400);
  
angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
hr = hour()
mn = minute()
se = second()

seAngle = map(se,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr%12,0,12,0,360)

push()
rotate(seAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)

pop()

push()
rotate(mnAngle)
stroke(0,255,0)
strokeWeight(7)
line(0,0,75,0)

pop()

push()
rotate(hrAngle)
stroke(0,0,255)
strokeWeight(7)
line(0,0,50,0)

pop()
noFill()
stroke(255,0,0)
strokeWeight(8)
arc(0,0,300,300,0,seAngle)

stroke(0,255,0)
arc(0,0,280,280,0,mnAngle)

stroke(0,0,255)
arc(0,0,260,260,0,hrAngle)


drawSprites();
}