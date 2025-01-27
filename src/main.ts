import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new Scene(); scene.background = new Color(0x242424);
const aspectRatio = window.innerWidth / window.innerHeight
//const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const cameraSize = 200;
const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const _v1 = new Vector3()
const _v2 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2

const radSine = new CapsuleGeometry(1, RADIUS); _m1.makeTranslation(_v1.set(0, HALF_RADIUS, 0)); radSine.attributes.position.applyMatrix4(_m1)
_m1.makeTranslation(_v1.set(HALF_RADIUS, 0, 0)); _m2.makeRotationZ(Math.PI / 2); _m1.multiply(_m2)
const radCosine = new CapsuleGeometry(1, RADIUS); radCosine.attributes.position.applyMatrix4(_m1)
const radHypotenuse = new CapsuleGeometry(1, RADIUS)
const radSecant = new CapsuleGeometry(1, RADIUS)
const radCosecant = new CapsuleGeometry(1, RADIUS)
_m1.makeTranslation(_v1.set(HALF_RADIUS, 0, 0)); _m2.makeRotationZ(Math.PI / 2); _m1.multiply(_m2)
const radTangent = new CapsuleGeometry(1, RADIUS); radSecant.attributes.position.applyMatrix4(_m1)

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
scene.add(cursor)


const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2


const sine = new Mesh(radSine, new MeshBasicMaterial({ color: 0xcc8888 }));
const cosine = new Mesh(radCosine, new MeshBasicMaterial({ color: 0x8888cc }))

const hypotenuse = new Mesh(radHypotenuse, new MeshBasicMaterial({ color: 0xeeeeaa }))
const expI = new Mesh(new SphereGeometry(5), new MeshBasicMaterial({ color: 0xeeeeee, depthTest: false })); expI.renderOrder = 2
const expO = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x333333, depthTest: false })); expO.renderOrder = 3
const exp = new Group().add(expI, expO)


const secant = new Mesh(radSecant, new MeshBasicMaterial({ color: 0x88cc88 }))
const cosecant = new Mesh(radCosecant, new MeshBasicMaterial({ color: 0xaa8844 })) //0xcc88cc

const tangent = new Mesh(radTangent, new MeshBasicMaterial({ color: 0xeeaa44 }))


scene.add(unitCircle, origin, sine, cosine, hypotenuse, exp, secant, cosecant)



// SCENE UPDATING
let angle = 0
const updateScene = () => {
  angle = Math.atan2(screenPosition.y, screenPosition.x)
  sine.rotation.x = angle - Math.PI / 2
  cosine.rotation.y = angle

  hypotenuse.rotation.z = -angle + Math.PI / 2
  hypotenuse.position.set(HALF_RADIUS * Math.cos(angle), HALF_RADIUS * Math.sin(angle), 0)

  exp.position.set(RADIUS * Math.cos(angle), RADIUS * Math.sin(angle), 0)

  //secant.position.x = RADIUS
  const clampedSecant = Math.min(Math.max(1 / Math.cos(angle), -5), 5)
  secant.rotation.x = Math.cos(angle) > 0 ? 0 : Math.PI
  secant.scale.x = Math.cos(angle) > 0 ? 1 - clampedSecant : -1 - clampedSecant
  secant.position.x = Math.cos(angle) > 0 ? clampedSecant * RADIUS + Math.abs(Math.sin(angle)) * 2 : clampedSecant * RADIUS - Math.abs(Math.sin(angle)) * 2

  const clampedCosecant = Math.min(Math.max(1 / Math.sin(angle), -5), 5)
  cosecant.rotation.y = Math.sin(angle) > 0 ? 0 : Math.PI
  cosecant.scale.y = Math.sin(angle) > 0 ? 1 - clampedCosecant : -1 - clampedCosecant
  cosecant.position.y = Math.sin(angle) > 0 ? clampedCosecant * RADIUS + Math.abs(Math.sin(angle)) * 2 : clampedCosecant * RADIUS - Math.cos(Math.sin(angle)) * 2

}



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
const onMouseMove = (e: MouseEvent) => {
  position.x = 2 * (e.clientX / window.innerWidth) - 1;
  position.y = -2 * (e.clientY / window.innerHeight) + 1;

  screenPosition.set(position.x * cameraSize * aspectRatio, position.y * cameraSize)

  if (clicking) {
  }

}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

const controls = new OrbitControls(camera, renderer.domElement)
// ANIMATION LOOP

camera.position.z = 10
let speed = 0.05
const animate = () => {

  cursor.position.set(screenPosition.x, screenPosition.y, 0)

  updateScene()

  controls.update()

  renderer.render(scene, camera);
  requestAnimationFrame(animate)
}

renderer.setAnimationLoop(animate);


