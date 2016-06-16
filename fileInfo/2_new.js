function doFirst(){
	document.getElementById('myFile').onchange = fileChange;
}
function fileChange(){
	var file = document.getElementById('myFile').files[0];
	var message = 'File Name: ' + file.name+'\n';
	message += 'File Size: ' + file.size+' byte(s)\n';
	message += 'File Type: ' + file.type+'\n';
	message += 'Last Modified: ' + file.lastModifiedDate+'\n';
	document.getElementById('fileInfo').value = message;
}
window.addEventListener('load', doFirst, false);