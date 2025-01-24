import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, BackSide, Object3D, Box3, Sphere, OrthographicCamera, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new Scene(); scene.background = new Color(0x242424);
const aspectRatio = window.innerWidth / window.innerHeight
const cameraSize = 5
const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize);
//const camera = new OrthographicCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// SCENE SETUP
const stuff = new Group()
const box = (() => {
  const geo = new BoxGeometry()
  const mat = new MeshNormalMaterial()
  const mesh = new Mesh(geo, mat)
  return mesh
})()
stuff.add(box)
box.rotateZ(Math.PI / 3)
box.rotateY(Math.PI / 6)
box.position.set(.5, 1, -1)
const box2 = (() => {
  const geo = new BoxGeometry()
  const mat = new MeshNormalMaterial()
  const mesh = new Mesh(geo, mat)
  return mesh
})()
stuff.add(box2)

const bb = new Box3().setFromObject(stuff)
const makeBoundingBox = ((bb: Box3) => {
  const geo = new BoxGeometry(bb.max.x - bb.min.x, bb.max.y - bb.min.y, bb.max.z - bb.min.z)
  const mat = new MeshNormalMaterial({ side: BackSide, flatShading: true })
  const mesh = new Mesh(geo, mat)
  mesh.position.set((bb.max.x - bb.min.x) / 2 + bb.min.x, (bb.max.y - bb.min.y) / 2 + bb.min.y, (bb.max.z - bb.min.z) / 2 + bb.min.z)
  return mesh
})
const boundingBox = makeBoundingBox(bb)
const boundingBoxGroup = new Group()
boundingBoxGroup.add(boundingBox)
scene.add(boundingBoxGroup)

const bs = new Sphere()
bb.getBoundingSphere(bs)
const makeBoundingSphere = (() => {
  const geo = new SphereGeometry()
  const mat = new MeshNormalMaterial({ side: BackSide, flatShading: true })
  const mesh = new Mesh(geo, mat)
  return mesh
})
const boundingSphere = makeBoundingSphere()
boundingSphere.scale.set(bs.radius, bs.radius, bs.radius)
const boundingSphereGroup = new Group()
boundingSphereGroup.add(boundingSphere)
scene.add(boundingSphereGroup)

scene.add(stuff)

// LISTENER CREATION

let clicking = false
const onMouseDown = (e: MouseEvent) => {
  clicking = true
}
const onMouseUp = (e: MouseEvent) => {
  clicking = false
}
const position = new Vector2(0.5, 0.5)
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = -2 * (e.clientY / window.innerHeight) + 1;


  if (!clicking) {
    stuff.rotateZ(Math.PI / 329); stuff.rotateX(Math.PI / -100); stuff.rotateY(Math.PI / 72);
  }

}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);


// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)

// ANIMATION LOOP


camera.position.z = 5
let speed = 0.05
const animate = () => {
  controls.update()

  //stuff.rotateZ(Math.PI / 329); stuff.rotateX(Math.PI / -100); stuff.rotateY(Math.PI / 72);
  const newBB = makeBoundingBox(bb.setFromObject(stuff))
  bb.getBoundingSphere(bs)

  boundingBoxGroup.clear()
  boundingBoxGroup.add(newBB)

  boundingSphere.scale.set(bs.radius, bs.radius, bs.radius)
  boundingSphere.position.set(bs.center.x, bs.center.y, bs.center.z)

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


