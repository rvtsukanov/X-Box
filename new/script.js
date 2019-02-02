
console.log(navigator.getGamepads())
var gamepads = navigator.getGamepads()



//console.log(gamepads[0].buttons.length
//console.log(gamepads[0].buttons[0].pressed == false)

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );


console.log(document.body)
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );



camera.position.z = 5;


var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    '../model.obj',
    // called when resource is loaded
    function ( object ) {

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);


var i = 0;

function checker(){
    requestAnimationFrame(checker);

    /*
    var gamepad = navigator.getGamepads()[0];
	var back = document.getElementsByTagName('body');
	pos = gamepad.axes[0];
	console.log(pos);
	a = 100*pos %  255 + 50;
	console.log('rgb(' + a.toString() + ',' + a.toString() + ',' + a.toString() + ')');
	document.body.style.backgroundColor = 'rgb(' + Math.ceil(a).toString() + ',' + 0 + ',' + 0 + ')';
	console.log(document.body.style.backgroundColor);

    */

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

}

checker();

setInterval(checker, 50);

requestAnimationFrame(checker, 1000);


