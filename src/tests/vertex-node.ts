import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, Vector4, DoubleSide, MeshPhongMaterial, BackSide, ConeGeometry, DodecahedronGeometry, IcosahedronGeometry, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh } from 'three/webgpu'
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, sub, screenUV, add, float, exp, length, positionGeometry, cameraViewMatrix, cameraProjectionMatrix, normalView, distance, viewportUV } from 'three/tsl'
import { font_helper } from './utils/text-utils'




const fragmentMaterial = new NodeMaterial()
fragmentMaterial.vertexNode = Fn(() => {
  const pos = uniform(position).add(1).mul(1 / 2)
  const pos2 = uniform(greenPosition).sub(.5).mul(2).mul(100)
  const positionLocal = positionGeometry
  const modelViewMatrix = cameraViewMatrix
  const v_positionView = (modelViewMatrix.mul(positionLocal))
  const v_modelViewProjection = (cameraProjectionMatrix.mul(v_positionView))
  const d = distance(positionLocal.xy, pos2.xy)
  const delta = vec4(float(1).div(d.x), float(1).div(d.y), 0, 0).clamp(float(0), float(1 / 10))
  const n_delta = normalView.mul(delta)
  const v = v_modelViewProjection.add(n_delta)
  //const v = v_modelViewProjection.add(d.x.div(100), 0, 0, 0)
  return vec4(v.xyz, 1)
})()
fragmentMaterial.colorNode = Fn(() => {
  return vec4(normalView.xyz, 1)
})()





const scene = new Scene(); scene.background = new Color(0x242424);
const cub = new Mesh(new BoxGeometry(100, 100, 100), new MeshNormalMaterial())
const die = new Mesh(new IcosahedronGeometry(100), fragmentMaterial)
const scene2 = new Scene(); scene2.add(cub)
const scene3 = new Scene(); scene3.add(die)
const aspectRatio = window.innerWidth / window.innerHeight


const cameraSize = 200;
//const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);
const camera = new OrthographicCamera(-cameraSize, cameraSize, cameraSize, -cameraSize, -1000, 1000);


const redElement = document.getElementById('red')
const blueElement = document.getElementById('blue')
const greenElement = document.getElementById('green')
const canvas: HTMLCanvasElement = document.getElementById('c') as HTMLCanvasElement

//const renderer = new WebGLRenderer();
const renderer = new WebGPURenderer({ forceWebGL: true, canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);
renderer.init()

const _v1 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
const cursor2 = new Mesh(new SphereGeometry(2), new MeshNormalMaterial({ side: BackSide }))
scene.add(cursor, cursor2)


const scenes: Scene[] = []
const cameras: OrthographicCamera[] = []



const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2
const inv_exp = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2
const double_exp = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2


const inv_exp_text = font_helper('e', '-jθ')
const exp_text = font_helper('e', 'jθ')
const double_exp_text = font_helper('e', '2jθ')

ex.add(exp_text)
inv_exp.add(inv_exp_text)
double_exp.add(double_exp_text)



scene.add(unitCircle, origin)
scene.add(ex, inv_exp, double_exp)


const rt = new RenderTarget(aspectRatio * window.innerWidth, window.innerHeight)
const rt2 = new RenderTarget(aspectRatio * window.innerWidth, window.innerHeight)
const normalRt = new RenderTarget(aspectRatio * window.innerWidth, window.innerHeight)

const shaderMaterial = new NodeMaterial()
shaderMaterial.colorNode = Fn(() => {
  const pos = uniform(position).add(1).mul(1 / 2)
  const circ = exp(length(pos.sub(uv()).mul(128)).negate().mul(1 / 2))
  const newuv = uv().sub(circ.mul(pos.sub(uv())))
  const color = vec4().toVar()
  const texel = texture(rt2.texture, newuv)
  color.xyz.assign(texel.xyz)
  return color
})()


const splitScreen = Fn(() => {
  const pos = uniform(position).add(1).mul(1 / 2)
  const texel = texture(rt.texture)
  const nexel = texture(normalRt.texture)
  const color = vec4().toVar()
  const cutoff = float(1).toVar()
  If(pos.x.lessThan(screenUV.x), () => {
    color.xyz.assign(pos.x)
    color.xyz.assign(nexel.xyz.dot(vec3(.5, .5, 1)).mul(2).add(-1).div(4))
    cutoff.assign(nexel.xyz.dot(vec3(.5, .5, 1)).mul(2).add(-1).div(1))
    color.xyz.assign(float(1).div(cutoff))
  }).Else(() => {
    color.xyz.assign(texel.oneMinus().xyz)
  })
  return color
})


const quadMesh = new QuadMesh(shaderMaterial)


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

  cursor.position.set(screenPosition.x, -screenPosition.y, 0)
  _v2.set(screenPosition.x, -screenPosition.y)
  const _magnitude = _v2.x * _v2.x + _v2.y * _v2.y
  _v2.set(10000 * _v2.x / _magnitude, 10000 * _v2.y / _magnitude)
  cursor2.position.set(_v2.x, -_v2.y, 0)

  ex.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)
  inv_exp.position.set(RADIUS * cosAngle, -RADIUS * sinAngle, 0)

  double_exp.position.set(RADIUS * Math.cos(2 * angle), RADIUS * Math.sin(2 * angle), 0)


}

// 0x00aaff lovly blue
// 0x00ffaa lovly sea green


// LISTENER CREATION

let clicking = false
const onMouseDown = (e: MouseEvent) => {
  clicking = true
}
const onMouseUp = (e: MouseEvent) => {
  clicking = false
}
const position = new Vector2(0.5, 0.5)
const greenPosition = new Vector2(0.5, 0.5)
const screenPosition = new Vector2(0, 0)
const scenePosition = new Vector4()
const _m = new Matrix4()
const updatePosition = (e: MouseEvent) => {
}
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = 2 * (e.clientY / window.innerHeight) - 1;
  const greenRect = greenElement.getBoundingClientRect()
  greenPosition.x = (e.clientX - greenRect.left) / greenRect.width
  greenPosition.y = -(e.clientY - greenRect.bottom) / greenRect.height
  console.log(greenPosition)

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

const controls = new OrbitControls(camera, greenElement)
//const controls2 = new OrbitControls(camera2, blueElement)
// ANIMATION LOOP

camera.position.z = 10
let speed = 0.05
const meshNormalMaterial = new MeshNormalMaterial()
const _v2 = new Vector2()

const _vec4 = new Vector4()
const renderScene = (s: Scene, element: Element, c: OrthographicCamera) => {
  const rect = element.getBoundingClientRect()

  _vec4.set(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top)
  renderer.setViewport(_vec4)
  renderer.setScissor(_vec4)



  //renderer.setRenderTarget(rt2)
  renderer.renderAsync(s, c);
  //renderer.renderAsync(s, c);

  //renderer.setRenderTarget(null)
  //quadMesh.renderAsync(renderer)
}

const updateSize = () => {
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false)
  }
}

const bgColor = new Color()
bgColor.set(.3, .3, .3)
scene.background = bgColor
const animate = async () => {

  updateScene()
  updateSize()

  canvas.style.transform = `translateY(${window.scrollY}px)`;


  //renderer.setClearColor(0xffffff)
  renderer.setScissorTest(false)

  //renderer.setClearColor(0xe0e0e0)
  renderer.setScissorTest(true)

  scene.overrideMaterial = fragmentMaterial
  renderScene(scene, redElement, camera)
  renderScene(scene2, blueElement, camera)
  renderScene(scene3, greenElement, camera)


  //console.log((await renderer.debug.getShaderAsync(scene2, camera, cub)).fragmentShader)
  requestAnimationFrame(animate)
}

animate()
//renderer.setAnimationLoop(animate);


