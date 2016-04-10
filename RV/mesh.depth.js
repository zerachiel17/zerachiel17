function setup(){
 var forma=new THREE.BoxGeometry(100,100,500);
 var material=new THREE.MeshDepthMaterial();
 malla=new THREE.Mesh(forma,material);
 escena=new THREE.Scene();
 escena.add(malla);
 camara=new THREE.PerspectiveCamera();
 camara.position.z=750;
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

var camara,escena,renderer,malla;
setup();
loop();
