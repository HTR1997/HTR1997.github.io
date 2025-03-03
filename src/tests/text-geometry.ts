import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const loader = new FontLoader()
loader.load('./node_modules/three/examples/fonts/helvetiker_regular.typeface.json', (font: string) => {
  const geometry = new TextGeometry('Hello there', {
    font: font,
    size: 12,
    depth: 5,

  })
  const x = new Mesh(geometry, new MeshNormalMaterial())
  x.position.set(-cameraSize * aspectRatio + 10, cameraSize - 24, 0)
  scene.add(x)
})

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

_m1.makeTranslation(_v1.set(100 * HALF_RADIUS, 0, 0)); _m2.makeRotationZ(Math.PI / 2); _m1.multiply(_m2)
const radSecant = new CapsuleGeometry(1, 100 * RADIUS); radSecant.attributes.position.applyMatrix4(_m1)

const radCosecant = new CapsuleGeometry(1, 100 * RADIUS); _m1.makeTranslation(_v1.set(0, 100 * HALF_RADIUS, 0)); radCosecant.attributes.position.applyMatrix4(_m1)

const radTangent = new CapsuleGeometry(1, RADIUS)

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
scene.add(cursor)

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


const sine = new Mesh(radSine, new MeshBasicMaterial({ color: 0xcc8888 }));
const cosine = new Mesh(radCosine, new MeshBasicMaterial({ color: 0x8888cc }))

const hypotenuse = new Mesh(radHypotenuse, new MeshBasicMaterial({ color: 0xeeeeaa }))
const expI = new Mesh(new SphereGeometry(5), new MeshBasicMaterial({ color: 0xeeeeee, depthTest: false })); expI.renderOrder = 2
const expO = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x333333, depthTest: false })); expO.renderOrder = 3
const exp = new Group().add(expI, expO)

const secant = makeSkinnedCapsuleMesh(0x88cc88)
secant.position.set(0, 0, -RADIUS); secant.rotateZ(-Math.PI / 2)

const cosecant = makeSkinnedCapsuleMesh(0xaa8844) // 0xcc88cc
cosecant.position.set(0, 0, -RADIUS)

const tangent = makeSkinnedCapsuleMesh(0xee44ee) //0xeeaa44
tangent.position.set(0, 0, -RADIUS)
const cotangent = makeSkinnedCapsuleMesh(0x44aaee)
cotangent.position.set(0, 0, -RADIUS)

scene.add(unitCircle, origin, sine, cosine, hypotenuse, exp, secant, cosecant, tangent, cotangent)



// SCENE UPDATING
let angle = 0
let cosAngle = 1
let sinAngle = 0
let tanAngle = 0
const updateScene = () => {
  angle = Math.atan2(screenPosition.y, screenPosition.x)
  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  sine.rotation.x = angle - Math.PI / 2
  cosine.rotation.y = angle

  hypotenuse.rotation.z = -angle + Math.PI / 2
  hypotenuse.position.set(HALF_RADIUS * cosAngle, HALF_RADIUS * sinAngle, 0)

  exp.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)

  secant.skeleton.bones[1].position.y = cosAngle > 0 ? RADIUS / cosAngle : -RADIUS / cosAngle
  cosecant.skeleton.bones[1].position.y = sinAngle > 0 ? RADIUS / sinAngle : -RADIUS / sinAngle

  secant.rotation.y = cosAngle > 0 ? 0 : Math.PI
  cosecant.rotation.x = sinAngle > 0 ? 0 : Math.PI


  tangent.position.x = RADIUS * cosAngle
  tangent.position.y = RADIUS * sinAngle
  tangent.skeleton.bones[1].position.y = RADIUS * tanAngle
  tangent.rotation.z = angle - Math.PI

  cotangent.position.x = RADIUS * cosAngle
  cotangent.position.y = RADIUS * sinAngle
  cotangent.skeleton.bones[1].position.y = RADIUS / tanAngle
  cotangent.rotation.z = angle

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
  //console.log(renderer.info)
  requestAnimationFrame(animate)
}

animate()
//renderer.setAnimationLoop(animate);


