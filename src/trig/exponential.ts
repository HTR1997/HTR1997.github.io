import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, Vector4, DoubleSide, MeshPhongMaterial, BackSide, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh } from 'three/webgpu'
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float, exp, length } from 'three/tsl'
import { font_helper } from './utils/text-utils'
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = new Scene(); scene.background = new Color(0x242424);
const aspectRatio = window.innerWidth / window.innerHeight

const cameraSize = 200;
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
const cursor2 = new Mesh(new SphereGeometry(2), new MeshNormalMaterial({ side: BackSide }))
scene.add(cursor, cursor2)

//const cube = new Mesh(new BoxGeometry(50, 50, 50), new MeshNormalMaterial()); scene.add(cube); cube.rotateX(Math.PI / 4); cube.rotateY(Math.PI / 3)

const makeSkinnedCapsuleMesh = (color = 0xffffff) => {

  const makeSkinnedCapsuleGeometry = () => {
    const capGeo = new CapsuleGeometry(.5)
    const skinIndices: number[] = []
    const skinWeights: number[] = []
    for (let n = 0, l = capGeo.attributes.position.count; n < l; n++) {
      const y = (capGeo.attributes.position.getY(n))
      const skinIndex: number = y > 0 ? 1 : 0
      const skinWeight: number = y > 0 ? 1 : 0
      skinIndices.push(skinIndex, 0, 0, 0)
      skinWeights.push(1, 0, 0, 0)
    }
    capGeo.setAttribute('skinIndex', new Uint16BufferAttribute(skinIndices, 4))
    capGeo.setAttribute('skinWeight', new Float32BufferAttribute(skinWeights, 4))
    return capGeo
  }

  const addCapsuleBones = (mesh: SkinnedMesh) => {
    const bones = [new Bone(), new Bone()]
    bones[0].add(bones[1])
    bones[0].position.y = -1
    bones[1].position.y = 1
    const skeleton = new Skeleton(bones)
    mesh.add(skeleton.bones[0])
    mesh.bind(skeleton)
  }

  const material = new MeshBasicMaterial({ color: color })
  //const material = new MeshNormalMaterial()
  const skinnedMesh = new SkinnedMesh(makeSkinnedCapsuleGeometry(), material)
  addCapsuleBones(skinnedMesh)

  return skinnedMesh
}



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
const normalRt = new RenderTarget(aspectRatio * window.innerWidth, window.innerHeight)

const shaderMaterial = new NodeMaterial()
shaderMaterial.colorNode = Fn(() => {
  const pos = uniform(position).add(1).mul(1 / 2)
  const circ = exp(length(pos.sub(uv()).mul(128)).negate().mul(1 / 2))
  const newuv = uv().sub(circ.mul(pos.sub(uv())))
  const color = vec4().toVar()
  const texel = texture(rt.texture, newuv)
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


//shaderMaterial.colorNode = splitScreen()
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
  _v2.set(screenPosition.x, -screenPosition.y)
  const _magnitude = _v2.x * _v2.x + _v2.y * _v2.y
  _v2.set(10000 * _v2.x / _magnitude, 10000 * _v2.y / _magnitude)

  cursor2.position.set(_v2.x, -_v2.y, 0)

  updateScene()

  controls.update()

  renderer.setRenderTarget(rt)
  renderer.renderAsync(scene, camera);

  scene.overrideMaterial = meshNormalMaterial
  renderer.setRenderTarget(normalRt)
  renderer.renderAsync(scene, camera);
  scene.overrideMaterial = null

  renderer.setRenderTarget(null)
  quadMesh.renderAsync(renderer)
  //cube.rotateY(Math.PI / 129)
  //camera.layers.set(1)
  //renderer.renderAsync(scene, camera);
  //camera.layers.set(0)


  //console.log(renderer.info)
  //console.log((await renderer.debug.getShaderAsync(scene, camera, testPlane)).fragmentShader)
  //console.log((await renderer.debug.getShaderAsync(scene, camera, testPlane)).vertexShader)


  requestAnimationFrame(animate)
}

animate()
//renderer.setAnimationLoop(animate);


