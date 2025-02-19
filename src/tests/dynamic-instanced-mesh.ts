import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, Vector4, DoubleSide, MeshPhongMaterial, BackSide, InstancedMesh, InstancedBufferAttribute, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh } from 'three/webgpu'
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float, exp, length } from 'three/tsl'
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = new Scene(); scene.background = new Color(0x242424);
const aspectRatio = window.innerWidth / window.innerHeight

const cameraSize = 1200;
const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);

//const renderer = new WebGLRenderer();
const renderer = new WebGPURenderer({ forceWebGL: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const _v1 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())




const cube = new InstancedMesh(new BoxGeometry(RADIUS, RADIUS, RADIUS), new MeshNormalMaterial(), 25);
const updateCube = () => {
  const len = Math.sqrt(cube.count)
  for (let n = 0, l = cube.count; n < l; n++) {
    _v1.set(1.5 * RADIUS * (n % len), 1.5 * RADIUS * Math.floor(n / len), 0)
    _m1.setPosition(_v1)
    cube.setMatrixAt(n, _m1)
  }
  cube.instanceMatrix.needsUpdate = true

}
scene.add(cube)
updateCube()

console.log(cube)

const removeCube = () => {
  cube.count = cube.count + 1
}
const addCube = () => {

  const newCount = 36
  const oldMatrix = cube.instanceMatrix
  cube.count = newCount
  cube.instanceMatrix = new InstancedBufferAttribute(new Float32Array(newCount * 16), 16)
  cube.instanceMatrix.array
  updateCube()
  _m1.setPosition(-200, -200, 200)
  cube.setMatrixAt(35, _m1)
  cube.instanceMatrix.addUpdateRange(0, newCount * 16)
  cube.instanceMatrix.needsUpdate = true
}


// SCENE UPDATING
let angle = 0
let cosAngle = 1
let sinAngle = 0
let tanAngle = 0
const updateScene = () => {
  angle = Math.atan2(-screenPosition.y, screenPosition.x)
  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)


}

// 0x00aaff lovly blue
// 0x00ffaa lovly sea green


// LISTENER CREATION

let clicking = false
const onMouseDown = (e: MouseEvent) => {
  addCube()
  console.log(cube)
}
const onMouseUp = (e: MouseEvent) => {
  clicking = false
}
const position = new Vector2(0.5, 0.5)
const screenPosition = new Vector2(0, 0)
const scenePosition = new Vector4()
const _m = new Matrix4()
const updatePosition = (e: MouseEvent) => {
}
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = 2 * (e.clientY / window.innerHeight) - 1;

  screenPosition.set(position.x * cameraSize * aspectRatio / camera.zoom, position.y * cameraSize / camera.zoom)

  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.x += screenPosition.x
  scenePosition.y -= screenPosition.y
}
const onWheel = (e: WheelEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = 2 * (e.clientY / window.innerHeight) - 1;

  screenPosition.set(position.x * cameraSize * aspectRatio / camera.zoom, position.y * cameraSize / camera.zoom)

  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.x += screenPosition.x
  scenePosition.y -= screenPosition.y
}
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('wheel', onWheel);

const controls = new OrbitControls(camera, renderer.domElement)
// ANIMATION LOOP

camera.position.z = 10
let speed = 0.05
const meshNormalMaterial = new MeshNormalMaterial()
const _v2 = new Vector2()
const animate = async () => {

  cursor.position.set(screenPosition.x, -screenPosition.y, 0)


  updateScene()

  controls.update()

  renderer.renderAsync(scene, camera);
  scene.overrideMaterial = null

  renderer.setRenderTarget(null)

  //console.log(renderer.info)
  //console.log((await renderer.debug.getShaderAsync(scene, camera, testPlane)).fragmentShader)
  //console.log((await renderer.debug.getShaderAsync(scene, camera, testPlane)).vertexShader)


  requestAnimationFrame(animate)
}

animate()
//renderer.setAnimationLoop(animate);


