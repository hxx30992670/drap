function drap(id){
	var obj = document.getElementById(id);
	obj.onmousedown = function(){
		var disX = obj.offsetLeft;
		var disY = obj.offsetTop;
		document.onmousemove = function(ev){
			var ev = window.event || ev;
			obj.style.left = ev.clientX - disX + 'px';
			obj.style.top = ev.clientY - disY + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
}
