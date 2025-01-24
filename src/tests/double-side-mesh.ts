import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new Scene(); scene.background = new Color(0x242424);
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const frontSide = (() => {
  const geo = new PlaneGeometry()
  const mat = new MeshBasicMaterial({ color: new Color(0xff8080), forceSinglePass: true })
  const mesh = new Mesh(geo, mat)
  return mesh
})()
scene.add(frontSide)

const backSide = (() => {
  const geo = new PlaneGeometry()
  const mat = new MeshBasicMaterial({ color: new Color(0x80ff80), forceSinglePass: true })
  const mesh = new Mesh(geo, mat)
  return mesh
})()
backSide.rotateY(Math.PI)
scene.add(backSide)

let clicking = false
const onMouseDown = (e: MouseEvent) => {
  clicking = true

}
const onMouseUp = (e: MouseEvent) => {
  clicking = false
}
const onMouseMove = (e: MouseEvent) => {
  if (clicking) {
  }

}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

const controls = new OrbitControls(camera, renderer.domElement)


camera.position.z = 5
let speed = 0.05
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


