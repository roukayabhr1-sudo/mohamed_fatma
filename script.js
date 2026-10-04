/* =======================================
START ANIMATION
======================================= */
const music = document.getElementById("music");
const doors = document.getElementById("doors");
const scene = document.getElementById("scene");
const content = document.getElementById("content");
document.addEventListener("click", () => {
music.play();
}, { once: true });
function startMusic(){
music.play().catch(() => {});
}
document.addEventListener("pointerdown", startMusic, { once:true });
setTimeout(() => {
startMusic();
doors.classList.add("open");
},1000);

/* =======================================
BRIDE & GROOM ZOOM
======================================= */
setTimeout(() => {
document
.querySelector(".bride")
.classList.add("zoom");
document
.querySelector(".groom")
.classList.add("zoom");},3200);
/* =======================================
FLOWERS
======================================= */
function createFlower(){
const flower=document.createElement("div");
flower.className="flower";
flower.innerHTML="🌹";
flower.style.left=Math.random()*100+"vw";
flower.style.animationDuration=(4+Math.random()*2)+"s";
document.body.appendChild(flower);
setTimeout(()=>{
flower.remove();
},6000);}
/* =======================================
START FLOWERS
======================================= */
let flowerInterval;
setTimeout(()=>{
flowerInterval=setInterval(createFlower,350);
},4500);
/* =======================================
STOP FLOWERS
======================================= */
setTimeout(()=>{
clearInterval(flowerInterval);
},8500);
/* =======================================
SHOW HALL THEN INVITATION
======================================= */
setTimeout(() => {
doors.style.display = "none";
content.classList.add("show");
const invitationFlowers = setInterval(createFlower,350);
setTimeout(() => {
clearInterval(invitationFlowers);
},9000);
const steps = document.querySelectorAll(".step");
steps.forEach((step, index) => {
setTimeout(() => {
step.classList.add("show");
}, index * 1500);
});
},9000);