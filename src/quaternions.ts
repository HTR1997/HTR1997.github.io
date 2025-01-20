import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, } from 'three';

const scene = new Scene(); scene.background = new Color(0x242424);
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = (() => {
  const geometry = new BoxGeometry();
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);
  return cube
})()
cube.position.set(-3, 0, 0)
scene.add(cube);


const q12 = (() => {
  const s = new SphereGeometry(0.1)
  const m = new MeshNormalMaterial()
  const mesh = new Mesh(s, m)
  return mesh
})()
const q34 = (() => {
  const s = new SphereGeometry(0.1)
  const m = new MeshNormalMaterial()
  const mesh = new Mesh(s, m)
  return mesh
})()
const c = new LineCurve3(new Vector3(), new Vector3())
const lineQ = (() => {
  const l = new TubeGeometry(c, 16, .01)
  const m = new MeshNormalMaterial()
  const mesh = new Mesh(l, m)
  return mesh
})()

const quat = (() => {
  const quat = new Group()
  const ringGeometry = new TorusGeometry(1, 0.01,)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(ringGeometry, material)
  quat.add(mesh)
  return quat
})()
scene.add(quat)
quat.add(q12, q34, lineQ)


let initalPos: Vector2 = new Vector2()
let clicking = false
const onMouseDown = (e: MouseEvent) => {
  clicking = true
  initalPos.set(e.x, e.y)

  speed = speed < .025 ? .05 : 0;
}
const onMouseUp = (e: MouseEvent) => {
  clicking = false
}
const onMouseMove = (e: MouseEvent) => {
  if (clicking) {
    cube.rotation.y = (e.x - initalPos.x) / window.innerWidth * 8
    cube.rotation.x = (e.y - initalPos.y) / window.innerHeight * 8
  }

}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);



camera.position.z = 5
let speed = 0.05
const animate = () => {
  //cube.rotation.x += speed;
  //cube.rotation.y += 0.1;
  //cube.rotation.z += 0.1;
  cube.rotation.x += 0.1;
  q12.position.set(cube.quaternion.w, cube.quaternion.z, 0)
  q34.position.set(cube.quaternion.y, cube.quaternion.x, 0)

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


