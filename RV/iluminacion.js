function setup(){
var forma=new THREE.SphereGeometry(1);
var material=new THREE.MeshPhongMaterial({color:'#00cc00'});
malla=new THREE.Mesh(forma,material);

malla.position.y+=2;
malla.rotation.z+=0.25;

var base=new THREE.Mesh(new THREE.BoxGeometry(5,.1,5),new THREE.MeshLambertMaterial({color:'#00cc00'}));

var iluminacion=new THREE.AmbientLight(0xFFFFFF);

escena=new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.y+=0.01;

renderer.render(escena,camara);
}

var camara,escena,renderer,malla;

setup();
loop();
