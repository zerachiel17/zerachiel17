function Wall(){
  THREE.Object3D.call(this);
  var texture = new THREE.TextureLoader().load( './paredes1.jpg');
  
  this.wall = new THREE.Mesh(new THREE.BoxGeometry(20,5,0.5),
                       new THREE.MeshBasicMaterial({map:texture}));
  texture.anisotropy = 16;
  this.add(this.wall);
}
Wall.prototype = new THREE.Object3D();
function setup(){
THREE.ImageUtils.crossOrigin = '';

var points = [];
  points.push(new THREE.Vector2(0,2));
  points.push(new THREE.Vector2(0.7,-0.5));
  points.push(new THREE.Vector2(2,-1.5));
  points.push(new THREE.Vector2(0,-1.5));

dia = 0.1;
 mul=1;
 
 var redTexture = new THREE.ImageUtils.loadTexture('./blue.jpg');
 var material = new THREE.MeshBasicMaterial({map:redTexture,
 side:THREE.DoubleSide});
 var cilindroForma1=new THREE.CylinderGeometry(dia, dia, 2);
 var cilindro1 = new THREE.Mesh(cilindroForma1,material);
 cilindro1.rotateX(1.57);
 cilindro1.position.x=2;
 cilindro1.position.y=2;
 
 var cilindroForma2=new THREE.CylinderGeometry(dia, dia, 3);
 var cilindro2 = new THREE.Mesh(cilindroForma2,material);
 cilindro2.position.x=2;
 cilindro2.position.y=3.5;
 cilindro2.position.z=-1;
 
 var cilindroForma3=new THREE.CylinderGeometry(dia, dia, 3);
 var cilindro3 = new THREE.Mesh(cilindroForma3,material);
 cilindro3.position.x=2;
 cilindro3.position.y=3.5;
 cilindro3.position.z=1;
 
 var cilindroForma4=new THREE.CylinderGeometry(dia, dia, 2);
 var cilindro4 = new THREE.Mesh(cilindroForma4,material);
 cilindro4.rotateX(1.57);
 cilindro4.position.x=2;
 cilindro4.position.y=5;
 
 var cilindroForma5=new THREE.CylinderGeometry(dia, dia, 3);
 var cilindro5 = new THREE.Mesh(cilindroForma5,material);
 cilindro5.position.x=2;
 cilindro5.position.y=6.5;
 
 var cilindroForma6=new THREE.CylinderGeometry(dia, dia, 8);
 var cilindro6 = new THREE.Mesh(cilindroForma6,material);
 cilindro6.rotateX(1.57);
 cilindro6.position.x=2;
 cilindro6.position.y=8;
 
 var cilindroForma7=new THREE.CylinderGeometry(dia, dia, 4);
 var cilindro7 = new THREE.Mesh(cilindroForma7,material);
 cilindro7.rotateZ(1.57);
 cilindro7.position.x=4;
 cilindro7.position.y=5;
 
 var cilindroForma8=new THREE.CylinderGeometry(dia, dia, 4.95);
 var cilindro8 = new THREE.Mesh(cilindroForma8,material);
 cilindro8.rotateZ(0.785);
 cilindro8.position.x=7.75;
 cilindro8.position.y=3.25;
 
 var cilindroForma9=new THREE.CylinderGeometry(dia, dia, 6);
 var cilindro9 = new THREE.Mesh(cilindroForma9,material);
 cilindro9.rotateX(1.57);
 cilindro9.position.x=9.5;
 cilindro9.position.y=1.5;
 
 var ruedaForma1=new THREE.CylinderGeometry(2, 2, 1, 25);
 var rueda1 = new THREE.Mesh(ruedaForma1,material);
 rueda1.rotateX(1.57);
 rueda1.position.x=2;
 rueda1.position.y=2;
 
 var ruedaForma2=new THREE.CylinderGeometry(1.5, 1.5, 1, 25);
 var rueda2 = new THREE.Mesh(ruedaForma2,material);
 rueda2.rotateX(1.57);
 rueda2.position.x=9.5;
 rueda2.position.y=1.5;
 rueda2.position.z=2.5;
 
 var rueda3 = new THREE.Mesh(ruedaForma2,material);
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
 robot = new THREE.Mesh(forma,material);
 
 
wall1 = new Wall();
wall2 = new Wall();
wall3 = new Wall();
wall4 = new Wall();


wall1.position.z = -10;
wall2.rotation.y = 3.1416 / 2;
wall2.position.x = 9.75;
wall3.rotation.y = 3.1416 / 2;
wall3.position.x = -9.75;
wall4.position.z = 10;

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 7;
escena = new THREE.Scene();
escena.add(wall1);
escena.add(wall2);
escena.add(wall3);
escena.add(wall4);
escena.add(robot);
escena.add(iluminacion);

camara = new THREE.PerspectiveCamera();
camara.position.z = 0;
camara.position.y = 30;
camara.rotation.x = -3.1416 / 2 + 0.02;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95);
console.log( renderer.getMaxAnisotropy());
document.body.appendChild( renderer.domElement);

renderer.shadowMapEnabled = true;
wall1.castShadow = true;
robot.castShadow = true;
iluminacion.castShadow = true;
stepx = 0.1;
stepz = 0;
raycaster2 = new THREE.Raycaster(robot.position,new THREE.Vector3(1,0,0));
raycaster3 = new THREE.Raycaster(robot.position,new THREE.Vector3(-1,0,0));
raycaster1 = new THREE.Raycaster(robot.position,new THREE.Vector3(0,0,-1));
raycaster4 = new THREE.Raycaster(robot.position,new THREE.Vector3(0,0,1));

}

function loop(){
var rot = 0;
collisionOne = raycaster1.intersectObject(wall1,true);
collisionTwo = raycaster2.intersectObject(wall2,true);
collisionThree = raycaster3.intersectObject(wall3,true);
collisionFour = raycaster4.intersectObject(wall4,true) ;



if(collisionTwo.length > 0 && collisionTwo[0].distance <= 2){ stepx = 0; stepz = -0.1  ;}
if(collisionOne.length > 0 && collisionOne[0].distance <= 2) {stepx = - 0.1;  stepz = 0;}
if(collisionThree.length > 0 && collisionThree[0].distance <= 2) {stepx = 0; stepz = 0.1;}
if(collisionFour.length > 0 && collisionFour[0].distance <= 2) {stepx = 0.1; stepz = 0;}

if(collisionTwo.length > 0 && collisionTwo[0].distance <= 2
   && collisionOne.length > 0 && collisionOne[0].distance <= 2){
     stepx = -0.1; 
     stepz = 0;
   }

if(collisionThree.length > 0 && collisionThree[0].distance <= 2
   && collisionOne.length > 0 && collisionOne[0].distance <= 2){
     stepx = -0; 
     stepz = 0.1;
   }

if(collisionThree.length > 0 && collisionThree[0].distance <= 2
   && collisionFour.length > 0 && collisionFour[0].distance <= 2){
     stepx = 0.1; 
     stepz = 0;
   }
   
if(collisionTwo.length > 0 && collisionTwo[0].distance <= 2
   && collisionFour.length > 0 && collisionFour[0].distance <= 2){
     stepx = 0; 
     stepz = -0.1;
   }



robot.position.x += stepx;
robot.position.z += stepz;



raycaster2.set(robot.position,new THREE.Vector3(1,0,0));
raycaster3.set(robot.position,new THREE.Vector3(-1,0,0));
raycaster1.set(robot.position,new THREE.Vector3(0,0,-1));
raycaster4.set(robot.position,new THREE.Vector3(0,0,1));
requestAnimationFrame(loop);
renderer.render(escena, camara);
}

var camara, escena, renderer,wall1,wall2,wall3,wall4,raycaster,robot,stepx,stepz,cyl;
var raycaster1, raycaster2,raycaster3, raycaster4;
var collisionOne, collisionTwo,collisionThree, collisionFour;
var collideMatrix = [];
setup();
loop();
 
