var box = document.getElementById('box'),
state = document.getElementById('status');

if (typeof window.FileReader === 'undefined') {
state.className = 'fail';
} else {
state.className = 'success';
state.innerHTML = 'Drag and drop files from desktop to the drop-box above. File API & FileReader available.';
}

box.ondragover = function() {
this.className = 'hover';
return false;
};
box.ondragend = function() {
this.className = '';
return false;
};
box.ondrop = function(e) {
this.className = '';
e.preventDefault();

var file = e.dataTransfer.files[0],
    reader = new FileReader();
reader.onload = function(event) {
    console.log(event.target);
    box.innerText = event.target.result;
};
console.log(file);
reader.readAsText(file);

return false;
};