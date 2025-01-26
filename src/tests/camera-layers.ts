import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, ConeGeometry, } from 'three';

const scene = new Scene(); scene.background = new Color(0x242424);
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// SCENE SETUP
const cone = new Mesh(new ConeGeometry(), new MeshNormalMaterial())
const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
cube.layers.enable(1)
console.log(cone.layers.mask, cube.layers.mask)
scene.add(cone, cube)
cube.position.x -= 2


// LISTENER CREATION

let clicking = false
const onMouseDown = (e: MouseEvent) => {
  clicking = true
  camera.layers.toggle(1)
  camera.layers.toggle(0)
  console.log(cone.layers.mask, cube.layers.mask, camera.layers.mask)
}
const onMouseUp = (e: MouseEvent) => {
  clicking = false
}
const position = new Vector2(0.5, 0.5)
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = -2 * (e.clientY / window.innerHeight) + 1;

  if (clicking) {
  }

}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);


// ANIMATION LOOP

camera.position.z = 5
let speed = 0.05
const animate = () => {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


