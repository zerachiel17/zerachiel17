function setup(){
 
 // Se plantean las geometrias a utilizar
 dia = 0.1;
 mul=1;
 
 var cilindroForma1=new THREE.CylinderGeometry(dia, dia, 2);
 var cilindro1 = new THREE.Mesh(cilindroForma1);
 cilindro1.rotateX(1.57);
 cilindro1.position.x=2;
 cilindro1.position.y=2;
 
 var cilindroForma2=new THREE.CylinderGeometry(dia, dia, 3);
 var cilindro2 = new THREE.Mesh(cilindroForma2);
 cilindro2.position.x=2;
 cilindro2.position.y=3.5;
 cilindro2.position.z=-1;
 
 var cilindroForma3=new THREE.CylinderGeometry(dia, dia, 3);
 var cilindro3 = new THREE.Mesh(cilindroForma3);
 cilindro3.position.x=2;
 cilindro3.position.y=3.5;
 cilindro3.position.z=1;
 
 var cilindroForma4=new THREE.CylinderGeometry(dia, dia, 2);
 var cilindro4 = new THREE.Mesh(cilindroForma4);
 cilindro4.rotateX(1.57);
 cilindro4.position.x=2;
 cilindro4.position.y=5;
 
 var cilindroForma5=new THREE.CylinderGeometry(dia, dia, 3);
 var cilindro5 = new THREE.Mesh(cilindroForma5);
 cilindro5.position.x=2;
 cilindro5.position.y=6.5;
 
 var cilindroForma6=new THREE.CylinderGeometry(dia, dia, 8);
 var cilindro6 = new THREE.Mesh(cilindroForma6);
 cilindro6.rotateX(1.57);
 cilindro6.position.x=2;
 cilindro6.position.y=8;
 
 var cilindroForma7=new THREE.CylinderGeometry(dia, dia, 4);
 var cilindro7 = new THREE.Mesh(cilindroForma7);
 cilindro7.rotateZ(1.57);
 cilindro7.position.x=4;
 cilindro7.position.y=5;
 
 var cilindroForma8=new THREE.CylinderGeometry(dia, dia, 4.95);
 var cilindro8 = new THREE.Mesh(cilindroForma8);
 cilindro8.rotateZ(0.785);
 cilindro8.position.x=7.75;
 cilindro8.position.y=3.25;
 
 var cilindroForma9=new THREE.CylinderGeometry(dia, dia, 6);
 var cilindro9 = new THREE.Mesh(cilindroForma9);
 cilindro9.rotateX(1.57);
 cilindro9.position.x=9.5;
 cilindro9.position.y=1.5;
 
 var ruedaForma1=new THREE.CylinderGeometry(2, 2, 1, 25);
 var rueda1 = new THREE.Mesh(ruedaForma1);
 rueda1.rotateX(1.57);
 rueda1.position.x=2;
 rueda1.position.y=2;
 
 var ruedaForma2=new THREE.CylinderGeometry(1.5, 1.5, 1, 25);
 var rueda2 = new THREE.Mesh(ruedaForma2);
 rueda2.rotateX(1.57);
 rueda2.position.x=9.5;
 rueda2.position.y=1.5;
 rueda2.position.z=2.5;
 
 var rueda3 = new THREE.Mesh(ruedaForma2);
 rueda3.rotateX(1.57);
 rueda3.position.x=9.5;
 rueda3.position.y=1.5;
 rueda3.position.z=-2.5;
 
 // Se genera una forma  (geometrica) abstracta
 var forma=new THREE.Geometry();
 
 // Se utiliza el paquete GeometryUtils para conjuntar las formas
 THREE.GeometryUtils.merge(forma, cilindro1);
 THREE.GeometryUtils.merge(forma, cilindro2);
 THREE.GeometryUtils.merge(forma, cilindro3);
 THREE.GeometryUtils.merge(forma, cilindro4);
 THREE.GeometryUtils.merge(forma, cilindro5);
 THREE.GeometryUtils.merge(forma, cilindro6);
 THREE.GeometryUtils.merge(forma, cilindro7);
 THREE.GeometryUtils.merge(forma, cilindro8);
 THREE.GeometryUtils.merge(forma, cilindro9);
 THREE.GeometryUtils.merge(forma, rueda1);
 THREE.GeometryUtils.merge(forma, rueda2);
 THREE.GeometryUtils.merge(forma, rueda3);
 
 // Se genera la malla a partir de la forma
 malla=new THREE.Mesh(forma);
 wireframe = new THREE.WireframeHelper( malla, 0x00ff00 );
 escena=new THREE.Scene();
 escena.add(malla,wireframe);
 camara=new THREE.PerspectiveCamera();
 camara.position.z=25;
 renderer=new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
//malla.rotation.x+=0.01;
malla.rotation.y+=0.001;
renderer.render(escena,camara);
}

var escena,camara,renderer,malla,wireframe,dia,mul;
setup();
loop();
