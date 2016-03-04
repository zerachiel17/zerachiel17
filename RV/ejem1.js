Function PIERNA(){
THREE.Object3D.call(this);
this.píerna= new Three.Mesh (new THREE.BoxGeometry(1,5,1));
this.pie = new THREE.Mesh(new THREE.BoxGeometry(2,1,1));
this.píerna.position.y= -2.5;
this.pie.position.y=-4.5;
this.pie.position.x=1.5;
this.add(this.pierna);
this.add(this.pie);
}
Pierna.prototype = new THREE.Object3D();
functiom setup(){
 var cuerpo= new THREE.Mesh( new THREE.CylinderGeometry(1,2,5,10));
 PiernaD =new Pierna();
 PiernaI =new Pierna();
 cuerpo.position.y=2;
 piernaD.position.z=-1;
  piernaI.position.z=1;
step=.01;
escena=new THREE.Scene();
escena.add(cuerpo);
escena.add(piernaD);
escena.add(piernaI);
camara= new THREE.PerspectiveCamera();

rendere= new THREE.WebGLRendere();
renderer.setSize(Window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(rendere.domElement);
}
function loo´(){
 requestAnimationFrame (loop);
 request.renderer(escena, camara);
 if (Math.abs(piernad,rotation.z) > .5)
 step= step;
 piernaD.rotation.z +=step;
  piernaIrotation.z -=step;
}
var escena, camara, renderer;
var step, piernaD, piernaI;
step();
loop();


