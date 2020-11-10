function move() {
    const img = document.getElementById('img');
    let windowsWidth = window.innerWidth;
    if(img.offsetLeft < windowsWidth){
        img.style.left = img.offsetLeft + 20 + "px";
    }else{
        img.style.left = 0 + "px";
    }

}
window.onload = function(){
    setInterval(move, 1000);
}

