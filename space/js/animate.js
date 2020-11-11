var flag = 0;
window.onload = function(){
    setInterval(move, 1000);
}
function move() {
    const img = document.getElementById('img');
    let speed = document.getElementById('speed').value;
    let windowsWidth = window.innerWidth;

    if(img.offsetLeft > windowsWidth){
        flag = 1;
        img.style.transform = 'rotate(180deg)';
    }
    if(img.offsetLeft < 0){
        flag = 0;
        img.style.transform = 'rotate(180deg)';
    }

    if(flag == 0){
        img.style.left = img.offsetLeft + parseInt(speed) + "px";
    }else{
        img.style.left = img.offsetLeft - parseInt(speed) + "px";
    }

}


