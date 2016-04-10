function setup(){
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
var material=new THREE.MeshPhongMaterial({map:textura});
var forma=new THREE.SphereGeometry(1,64,64);
malla=new THREE.Mesh(forma,material);

malla.rotation.z +=0.25;

var LuzPuntual=new THREE.PointLight(0xFFFFFF);
LuzPuntual.position.x=10;
LuzPuntual.position.y=10;
LuzPuntual.position.z=10;

var LuzPuntual2=new THREE.PointLight(0xFFFFFF);
LuzPuntual.position.x=-10;
LuzPuntual.position.y=10;
LuzPuntual.position.z=10;

escena=new THREE.Scene();
escena.add(malla);
escena.add(LuzPuntual);
escena.add(LuzPuntual2);


camara=new THREE.PerspectiveCamera();
camara.position.z=10;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.y +=0.01;

renderer.render(escena,camara);
}

var camara,excena,renderer,malla;
setup();
loop();
