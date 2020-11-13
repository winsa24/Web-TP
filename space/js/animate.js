var flag = true; //direction
var shootflag = false;
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
        alert("shoot");
        shootflag = !shootflag;
    }
    if(shootflag){
        bullet.style.animationPlayState = 'running';
    }else{
        bullet.style.animationPlayState = 'paused';
    }
}

window.onload = function(){
    setInterval(move, 1000);
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

