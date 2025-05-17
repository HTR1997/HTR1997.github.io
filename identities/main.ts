import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, Vector4, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, DoubleSide, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cos_scene } from '../src/trig-scenes/cosine';
import { sin_scene } from '../src/trig-scenes/sine';



const scene_id = document.querySelector('[data-scene]').getAttribute('data-scene')

const scene_options = {
  'sine': sin_scene,
  'cosine': cos_scene
}

const scene = scene_options[scene_id]





const aspectRatio = window.innerWidth / window.innerHeight
const cameraSize = 200;
const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);

const renderer = new WebGLRenderer({ preserveDrawingBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2


// SCENE UPDATING
let angle = 0
let cosAngle = 1
let sinAngle = 0
let tanAngle = 0
const updateScene = () => {
  angle = Math.atan2(normalizedScreenCoordinates.y, normalizedScreenCoordinates.x)
  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  scene.userData.update(scaledScreenCoordinates)

}



// 0x00aaff lovly blue
// 0x00ffaa lovly sea green

let autoClearToggle = true
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 't') {
    renderer.clear()
    autoClearToggle = !autoClearToggle
    renderer.autoClear = autoClearToggle
    renderer.autoClearColor = autoClearToggle
  }
  if (autoClearToggle === true) {
    renderer.clear()
  }
  if (e.key === ' ') {
    renderer.clear()
  }
}
document.addEventListener('keydown', onKeyDown)


const screenCoordinates = new Vector2(0, 0)
const normalizedScreenCoordinates = new Vector2(0, 0)
const scaledScreenCoordinates = new Vector2(0, 0)
const onMouseMove = (e: MouseEvent) => {
  screenCoordinates.set(e.clientX, e.clientY)
  normalizedScreenCoordinates.set(2 * (e.clientX / window.innerWidth) - 1, -2 * (e.clientY / window.innerHeight) + 1)
  scaledScreenCoordinates.set(cameraSize * normalizedScreenCoordinates.x * aspectRatio / camera.zoom, cameraSize * normalizedScreenCoordinates.y / camera.zoom)
  scaledScreenCoordinates.add(camera.position)
}
document.addEventListener('mousemove', onMouseMove);


const controls = new OrbitControls(camera, renderer.domElement)
// ANIMATION LOOP

//camera.position.set(-4, 4, 10)
camera.position.set(0, 0, 10)
controls.update()

const animate = async () => {

  updateScene()

  controls.update()

  renderer.render(scene, camera)

}

//animate()
renderer.setAnimationLoop(animate);


