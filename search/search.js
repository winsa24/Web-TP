function searchName(){
    const inputname = document.getElementById("name").value;
    var stdinfo = document.getElementsByClassName("name");
    var stdname = document.getElementsByTagName("spin");
    for(i = 0; i < stdinfo.length; i++){
        if(stdname[i].innerHTML.toString().search(inputname) == -1){
            stdinfo[i].style.visibility= "hidden";
        }else{
            stdinfo[i].style.visibility= "visible";
        }
    }
}

function searchModule(){
    const inputmodule = document.getElementById("module").value;
    var stdinfo = document.getElementsByClassName("name");
    for(i = 0; i < stdinfo.length; i++){
        if(stdinfo[i].innerHTML.toString().search(inputmodule) == -1){
            stdinfo[i].style.visibility= "hidden";
        }else{
            stdinfo[i].style.visibility= "visible";
        }
    }
}