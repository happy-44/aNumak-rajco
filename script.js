var i = 0;
function divChange(){
    var divTag = document.getElementById("topDiv");
    var bgcolor = ["yellow","red","lightblue"];
    divTag.style.backgroundcolor = bgcolor[i];
    i = (i + 1) % bgcolor.length;
}
setInterval(divChange,2000);