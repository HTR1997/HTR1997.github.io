import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, Vector4, DoubleSide, MeshPhongMaterial, BackSide, ConeGeometry, DodecahedronGeometry, IcosahedronGeometry, LinearSRGBColorSpace, SRGBColorSpace, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh } from 'three/webgpu'
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, sub, screenUV, add, float, exp, length, positionGeometry, cameraViewMatrix, cameraProjectionMatrix, normalView, distance, viewportUV } from 'three/tsl'

import { font_helper } from './utils/text-utils'
import { exp_scene } from './trig-scenes/exponential'
import { inv_exp_scene } from './trig-scenes/inverse_exponential'
import { cos_scene } from './trig-scenes/cosine'
import { sin_scene } from './trig-scenes/sine'
import { exp_cos_sin_scene } from './trig-scenes/exponential-cosine-sine'
import { exp_arc_scene } from './trig-scenes/exponential-arc'
import { tan_scene } from './trig-scenes/tangent'
import { tan_sec_scene } from './trig-scenes/tangent-secant'
import { sec_scene } from './trig-scenes/secant'
import { csc_scene } from './trig-scenes/cosecant'
import { cot_scene } from './trig-scenes/cotangent'
import { pyt_cos_sin_scene } from './trig-scenes/pythagorean-cosine-sine'
import { pyt_tan_sec_scene } from './trig-scenes/pythagorean-tangent-secant'
import { pyt_cot_csc_scene } from './trig-scenes/pythagorean-cotangent-cosecant'
import { pyt_sec_cos_sin_tan_scene } from './trig-scenes/pythagorean-secant-cosine-sine-tangent'
import { pyt_all_scene } from './trig-scenes/pythagorean-all.ts'



const scene = new Scene(); scene.background = new Color(0x242424);
const cub = new Mesh(new BoxGeometry(100, 100, 100), new MeshNormalMaterial())
const die = new Mesh(new IcosahedronGeometry(100), new MeshNormalMaterial())
const scene2 = new Scene(); scene2.add(cub); scene2.background = new Color(0x242424)
const scene3 = new Scene(); scene3.add(die); scene3.background = new Color(0x242424)
const aspectRatio = window.innerWidth / window.innerHeight


const cameraSize = 200;
//const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);
const camera = new OrthographicCamera(-cameraSize, cameraSize, cameraSize, -cameraSize, -1000, 1000);


let canvas: HTMLCanvasElement
let content: HTMLElement
let renderer: WebGPURenderer

const _v1 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// PAGE SETUP

const elements: HTMLElement[] = []
let scenes: Scene[] = []
let basic_scenes = [exp_scene, inv_exp_scene, cos_scene, sin_scene, exp_cos_sin_scene, exp_arc_scene, tan_scene]
let reciprocal_scenes = [sec_scene, csc_scene, cot_scene]
let pythagorean_scenes = [pyt_cos_sin_scene, pyt_tan_sec_scene, pyt_cot_csc_scene, pyt_sec_cos_sin_tan_scene]
let other_scenes = [pyt_all_scene]

scenes = scenes.concat(basic_scenes, reciprocal_scenes, pythagorean_scenes, other_scenes)

//scenes = scenes.slice(-3)
const pageInit = () => {
  canvas = document.createElement('canvas')
  canvas.id = "c"
  document.body.appendChild(canvas);

  content = document.createElement('div')
  content.id = "content"
  document.body.appendChild(content);


  //canvas = document.getElementById("c") as HTMLCanvasElement
  //cotent = document.getElementById("content") as HTMLCanvasElement

  renderer = new WebGPURenderer({ forceWebGL: true, canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.init()

  for (let n = 0; n < scenes.length; n++) {

    if (n === basic_scenes.length) {
      const p = document.createElement('hr')
      p.setAttribute('hr-text', "Reciprocal Identities")
      content.appendChild(p)
    }

    if (n === basic_scenes.length + reciprocal_scenes.length) {
      const p = document.createElement('hr')
      p.setAttribute('hr-text', "Pythagorean Identities")
      content.appendChild(p)
    }

    if (n === basic_scenes.length + reciprocal_scenes.length + pythagorean_scenes.length) {
      const p = document.createElement('hr')
      p.setAttribute('hr-text', "Other")
      content.appendChild(p)
    }

    const element = document.createElement('div')
    element.className = 'list-item'

    const sceneElement = document.createElement('div')
    element.appendChild(sceneElement)

    const descriptionElement = document.createElement('a')
    descriptionElement.innerHTML = scenes[n].userData.title
    descriptionElement.href = 'index.html'
    element.appendChild(descriptionElement)


    content.appendChild(element)

    elements.push(element)

  }

}
pageInit()



// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
const cursor2 = new Mesh(new SphereGeometry(2), new MeshNormalMaterial({ side: BackSide }))
scene.add(cursor, cursor2)



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
  screenVector.set(scenePosition.x, scenePosition.y)
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
const scenePosition = new Vector4(.71, .29, 0, 0)
const _m = new Matrix4()
const updatePosition = (e: MouseEvent) => {
}
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = 2 * (e.clientY / window.innerHeight) - 1;

  screenPosition.set(position.x * cameraSize * aspectRatio / camera.zoom, position.y * cameraSize / camera.zoom)

  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.x += screenPosition.x
  scenePosition.y -= screenPosition.y
}
const onWheel = (e: WheelEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = 2 * (e.clientY / window.innerHeight) - 1;

  screenPosition.set(position.x * cameraSize * aspectRatio / camera.zoom, position.y * cameraSize / camera.zoom)

  scenePosition.set(camera.position.x, camera.position.y, camera.position.z, 0)
  scenePosition.x += screenPosition.x
  scenePosition.y -= screenPosition.y
}
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('wheel', onWheel);

const controls = new OrbitControls(camera, elements[0])
// ANIMATION LOOP

camera.position.z = 10
let speed = 0.05
const meshNormalMaterial = new MeshNormalMaterial()
const _v2 = new Vector2()

const _vec4 = new Vector4()
const renderScene = (n: number) => {
  const element = elements[n]
  const rect = element.getBoundingClientRect()
  _vec4.set(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top)
  renderer.setViewport(_vec4)
  renderer.setScissor(_vec4)

  const s = scenes[n]
  const c = camera
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
const screenVector = new Vector2()
const animate = async () => {

  updateSize()

  canvas.style.transform = `translateY(${window.scrollY}px)`;
  updateScene()
  for (let n = 0; n < scenes.length; n++) {
    const u = scenes[n].userData.update
    if (u !== undefined) {
      u(screenVector)
    }
  }


  renderer.outputColorSpace = LinearSRGBColorSpace
  renderer.setClearColor(0x808080)
  renderer.setScissorTest(false)
  renderer.clearAsync()
  renderer.setClearColor(0x242424)
  renderer.setScissorTest(true)
  renderer.outputColorSpace = SRGBColorSpace

  for (let n = 0; n < scenes.length; n++) {
    renderScene(n)
  }

  //requestAnimationFrame(animate)
}

//animate()
//console.log((await renderer.debug.getShaderAsync(scene2, camera, cub)).fragmentShader)
renderer.setAnimationLoop(animate);


