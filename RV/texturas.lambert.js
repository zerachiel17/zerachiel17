function setup(){
 THREE.ImageUtils.crossOrigin='';
 var textura  =THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');
 var material =new THREE.MeshLambertMaterial({map:textura});
 var forma    =new THREE.BoxGeometry(1,4,9);
 malla        =new THREE.Mesh(forma,material);
 
 var luzPuntual=new THREE.PointLight(0xffffff);
 luzPuntual.position.x=10;
 luzPuntual.position.y=10;
 luzPuntual.position.z=10;
 escena=new THREE.Scene();
 escena.add(malla,luzPuntual);
 camara=new THREE.PerspectiveCamera();
 camara.position.z=10;
 renderer=new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
malla.rotation.x+=0.01;
malla.rotation.y+=0.01;
renderer.render(escena,camara);
}

var malla,camara,escena,renderer;
setup();
loop();
