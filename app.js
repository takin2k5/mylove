var i = 0;
function run() {
	if (i<65) {
		var a = "<img id='item' src='/imgs/";
		var b = i.toString();
		var c = ".jpg'>";
		document.getElementById("imgs").innerHTML += a+b+c
		i++
		setTimeout(run, 50);
	}
}
run()