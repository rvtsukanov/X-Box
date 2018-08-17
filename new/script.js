console.log(navigator.getGamepads())

var gamepads = navigator.getGamepads()

//console.log(gamepads[0].buttons.length)



function a(){
alert(1);
}





console.log(gamepads[0].buttons[0].pressed == false)

var i = 0;
function checker(){
	var gamepad = navigator.getGamepads()[0];

//	for(i = 0; i < gamepads[0].buttons.length; i++){
//		if(gamepads[0].buttons[i].pressed == true){
//			console.log(i, 'is pressed');
//		}
//	}

	

	var back = document.getElementsByTagName('body');
	pos = gamepad.axes[0];
	console.log(pos);
	a = 100*pos %  255 + 50;
	console.log('rgb(' + a.toString() + ',' + a.toString() + ',' + a.toString() + ')');
	document.body.style.backgroundColor = 'rgb(' + Math.ceil(a).toString() + ',' + 0 + ',' + 0 + ')';
	console.log(document.body.style.backgroundColor);



}

setInterval(checker, 50);


