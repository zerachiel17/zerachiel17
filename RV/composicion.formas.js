function setup(){
 
 // Se plantean las geometrias a utilizar
 var esferaForma=new THREE.SphereGeometry(1);
 var cilindroForma=new THREE.CylinderGeometry(0.5, 0.5, 4);
 
 // Para generar una forma combinada se requiere de las mallas para
 // poder desplazar las formas en el espacio vectorial
 var esfera1 = new THREE.Mesh(esferaForma);
 var esfera2 = new THREE.Mesh(esferaForma);
 var cilindro = new THREE.Mesh(cilindroForma);
 
 // se desplazan las mallas
 esfera1.position.y=2;
 esfera2.position.y=-2;
 
 // Se genera una forma  (geometrica) abstracta
 var forma=new THREE.Geometry();
 
 // Se utiliza el paquete GeometryUtils para conjuntar las formas
 THREE.GeometryUtils.merge(forma, esfera1);
 THREE.GeometryUtils.merge(forma, esfera2);
 THREE.GeometryUtils.merge(forma, cilindro);
 
 // Se genera la malla a partir de la forma
 malla=new THREE.Mesh(forma);
 wireframe = new THREE.WireframeHelper( malla, 0x00ff00 );
 escena=new THREE.Scene();
 escena.add(malla,wireframe);
 camara=new THREE.PerspectiveCamera();
 camara.position.z=10;
 renderer=new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
malla.rotation.x+=0.01;
malla.rotation.y+=0.01;
renderer.render(escena,camara);
}

var escena,camara,renderer,malla,wireframe;
setup();
loop();
