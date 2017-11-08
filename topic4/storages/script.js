function doSave(){

    localStorage.setItem("text", text.value);
}

function doLoad(){

    text.value = localStorage.getItem("text");
}

window.onload = function(){
    saveButton = document.getElementById("save");
    saveButton.onclick = doSave;
    loadButton = document.getElementById("load");
    loadButton.onclick = doLoad;
    textarea = document.getElementById("text");
};