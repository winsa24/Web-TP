var flag = true; //direction
var shootflag = false;
var timer;
// var bullet = document.getElementById('bullet');
// bullet.style.animationPlayState = 'paused';
document.onkeydown = function (even) {
    const gun = document.getElementById('gun');
    let cs = window.getComputedStyle(gun,null);
    const bullet = document.getElementById('bullet');
    let cs2 = window.getComputedStyle(bullet,null);
    if(even.keyCode == 37){
        gun.style.left = parseInt(cs.left) - 20 + "px";
        bullet.style.left = parseInt(cs2.left) - 20 + "px";
    }
    if(even.keyCode == 39){
        gun.style.left = parseInt(cs.left) + 20 + "px";
        bullet.style.left = parseInt(cs2.left) + 20 + "px";
    }
    if(even.keyCode == 32){
        shootflag = !shootflag;
    }
}
function shoot(){
    const bullet = document.getElementById('bullet');
    if(shootflag){
        bullet.style.animation = 'shoot 5s infinite';
        setInterval(boom, 1000);
    }else{
        bullet.style.animation = '';
    }
}
window.onload = function(){
    timer = setInterval(move, 1000);
    setInterval(shoot, 100);
}
function move() {
    const img = document.getElementById('ss');
    let cs = window.getComputedStyle(img,null);

    let speed = document.getElementById('speed').value;
    let windowsWidth = window.innerWidth;

    if(parseInt(cs.left) > windowsWidth || parseInt(cs.left) < 0){
        flag = !flag;
    }

    if(flag){
        //img.style.left = img.offsetLeft + parseInt(speed) + "px";
        img.style.transform = '';
        img.style.left = parseInt(cs.left) + parseInt(speed) + "px";

    }else{
        img.style.transform = 'rotate(180deg)';
        img.style.left = parseInt(cs.left) - parseInt(speed) + "px";
        //img.style.left = img.offsetLeft - parseInt(speed) + "px";
    }

    let ud = Math.floor(Math.random() * 20 - 10); // -10 ~ 10
    img.style.top = parseInt(cs.top) + ud + "px";
}
function changedir() {
    const img = document.getElementById('ss');
    let cs = window.getComputedStyle(img,null);
    flag = !flag;
    img.style.transform = 'rotate(180deg)';
}
function boom(){
    const img = document.getElementById('ss');
    let cs = window.getComputedStyle(img,null);
    const bullet = document.getElementById('bullet');
    let cs2 = window.getComputedStyle(bullet,null);
    const boom = document.getElementById('boom');
    // alert("1:" + parseInt(cs2.left));
    // alert("2:" + parseInt(cs.left));
    if((parseInt(cs2.left) > parseInt(cs.left)) && (parseInt(cs2.left) < parseInt(cs.left) + 50)
        && (parseInt(cs2.top) > parseInt(cs.top)) && (parseInt(cs2.top) < parseInt(cs.top) + 50) ){
        boom.style.visibility = "visible";
        boom.style.left = cs.left;
        boom.style.top = cs.top;
        clearInterval(timer);
        // alert("Click Restart Button");
    }
}
function restart() {
    timer = setInterval(move, 1000);
    setInterval(shoot, 100);
    const boom = document.getElementById('boom');
    boom.style.visibility = "hidden";
}
