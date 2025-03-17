import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, Vector4, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, DoubleSide, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh } from 'three/webgpu'
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float } from 'three/tsl'
import { spiral_sum_scene } from './tests/spiral-sum'
import { exp_max_scene } from './tests/exp-max'
import { arc_spiral_sum_scene } from './tests/arc-spiral-sum'
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = exp_max_scene
//const scene = new Scene(); scene.background = new Color(0x242424);
const aspectRatio = window.innerWidth / window.innerHeight
//const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const cameraSize = 200;
const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);
//camera.projectionMatrix.multiply(new Matrix4().makeScale(1, -1, 1)) // Fix for renterTarget texture being flipped on Y axis

const renderer = new WebGLRenderer();
//const renderer = new WebGPURenderer({ forceWebGL: true });
//const renderer = new WebGPURenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const _v1 = new Vector3()
const _v2 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
//scene.add(cursor)




// SCENE UPDATING
let angle = 0
let cosAngle = 1
let sinAngle = 0
let tanAngle = 0
const updateScene = () => {
  screenVector.set(position.x, position.y)
  angle = Math.atan2(-screenPosition.y, screenPosition.x)
  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  scene.userData.update(screenVector)

}
scene.add(new Mesh(new SphereGeometry(), new MeshBasicMaterial()))



// 0x00aaff lovly blue
// 0x00ffaa lovly sea green


// LISTENER CREATION

let clicking = false
const onMouseDown = (e: MouseEvent) => {
  //scene.userData.toggleText()
  clicking = true
}
const onMouseUp = (e: MouseEvent) => {
  clicking = false

}
const position = new Vector2(0.5, 0.5)
const screenPosition = new Vector2(0, 0)
const scenePosition = new Vector4(.71, .29, 0, 0)
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = 2 * (e.clientY / window.innerHeight) - 1;

  screenPosition.set(position.x * cameraSize * aspectRatio / camera.zoom, position.y * cameraSize / camera.zoom)

  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.x += screenPosition.x
  scenePosition.y -= screenPosition.y

  if (clicking) {
  }

}

const p = new Mesh(new PlaneGeometry(100, 100), new MeshBasicMaterial({ color: 0x333333, side: DoubleSide }))
p.rotateY(Math.PI)
p.position.z = -  Math.PI / 3 - Math.PI * 2
//scene.add(p)

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

const controls = new OrbitControls(camera, renderer.domElement)
// ANIMATION LOOP

camera.position.set(-4, 4, 10)
controls.update()

let speed = 0.05
const meshNormalMaterial = new MeshNormalMaterial()
const screenVector = new Vector2(0, 0)
const animate = async () => {

  cursor.position.set(screenPosition.x, -screenPosition.y, 0)

  updateScene()


  controls.update()



  renderer.render(scene, camera)


}

//animate()
renderer.setAnimationLoop(animate);


