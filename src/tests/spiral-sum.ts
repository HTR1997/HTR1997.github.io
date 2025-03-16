import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, InstancedMesh, Quaternion, CylinderGeometry, Group, CircleGeometry, RingGeometry } from 'three';
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float, exp, length, color } from 'three/tsl'
import { font_helper } from '../utils/text-utils'
import { QuadMesh } from 'three/webgpu';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = new Scene(); scene.background = new Color(0x242424);
scene.userData.title = 'e<sup>jθ</sup>'

const _v1 = new Vector3()
const _v2 = new Vector3()
const _v3 = new Vector3()
const _v4 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()
const _q0 = new Quaternion()
const _q1 = new Quaternion()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2
const RADIUS_SQUARED = RADIUS * RADIUS

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
scene.add(cursor)


const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex.renderOrder = 2

const SUM_COUNT = 200
const sum_geometry = new CylinderGeometry(1, 1, 1)
//const circle_geometry = new RingGeometry(1, 1.01)
const circle_geometry = new CircleGeometry(1)
sum_geometry.translate(0, .5, 0)
const sum = new InstancedMesh(sum_geometry, new MeshBasicMaterial({ color: 0x8b43dd }), SUM_COUNT)
let height = 0
let magnitude = 0
const exp_text = font_helper('e', 'jθ')
const cir = new InstancedMesh(circle_geometry, new MeshBasicMaterial({ color: 0xffffff }), SUM_COUNT)

ex.add(exp_text)

scene.add(origin, unitCircle)
scene.add(ex)

const sum_lin = new Group();
for (let n = 0, l = SUM_COUNT; n < l; n++) {
  sum_lin.add(new Line2(new LineGeometry(), new LineMaterial()))
}
//scene.add(sum_lin)
scene.add(sum)
scene.add(cir)
sum_lin.position.set(100, 0, 0)

// SCENE UPDATING
let arc_percentage = 1
let facorial = 1
let sign = 1
let previous_height = 0
let previous_magnitude = 0
let x = 0
let total = 0
let largest_n = 0
const j = new Quaternion(0, 0, Math.SQRT1_2, Math.SQRT1_2)
const previous_position = new Vector2(0, 0)
let modulo = 0
let col = new Color()
let c1 = new Color(0xffffff)
let c2 = new Color(0x000000)
const updateScene = (screenVector: Vector2) => {
  let angle = Math.atan2(screenVector.y, screenVector.x)
  let x = 1 * screenVector.x / 100 * Math.PI
  //x = Math.floor(screenVector.x / 25) * Math.PI / 2
  angle = x
  let cosAngle = 1
  let sinAngle = 0
  let tanAngle = 0
  cursor.position.set(screenVector.x, screenVector.y, 0)

  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  ex.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)
  arc_percentage = angle > 0 ? angle / Math.PI / 2 : 1 + angle / Math.PI / 2



  previous_height = 0
  previous_magnitude = 0
  previous_position.set(0, 0)
  for (let n = 0, l = sum.count; n < l; n++) {
    facorial *= n


    magnitude = previous_magnitude * x / n
    //height = -1 * previous_height * x / (n * (n - 1))

    if (n === 0) { facorial = 1; magnitude = 1; previous_position.set(0, 0); total = 0; previous_magnitude = 0; _q1.identity() }

    _v3.set(previous_position.x * RADIUS, previous_position.y * RADIUS, n / l)
    _v1.set(RADIUS + 3 * n / 2, total * RADIUS, 0)
    _v2.set(1, magnitude * RADIUS, 1)
    modulo = n % 4
    switch (modulo) {
      case 0:
        previous_position.x += magnitude
        break
      case 1:
        previous_position.y += magnitude
        break
      case 2:
        previous_position.x -= magnitude
        break
      case 3:
        previous_position.y -= magnitude
        break
    }

    //total += magnitude
    //if (n === 2) { console.log(); console.log(height); console.log(x) }
    //if (Math.abs(height) > 0.001) { largest_n = n }
    _q1.multiply(j)

    _v1.set(previous_position.x * RADIUS, previous_position.y * RADIUS, 0)
    _v2.set(1, RADIUS * magnitude, 2)
    _m1.compose(_v1, _q1, _v2)
    sum.setMatrixAt(n, _m1)

    if (Math.abs(magnitude) > 1) {
      _v4.setScalar(RADIUS / magnitude)
    } else {
      _v4.setScalar(RADIUS * magnitude)
    }
    _v4.setScalar(RADIUS * magnitude)
    _m2.compose(_v3, _q0, _v4)
    cir.setMatrixAt(n, _m2)

    col.lerpColors(c1, c2, n / 10 % 1)
    cir.setColorAt(n, col)
    const lin = sum_lin.children[0] as Line2
    previous_magnitude = magnitude
    previous_height = height
  }
  sum.instanceMatrix.needsUpdate = true
  cir.instanceMatrix.needsUpdate = true
  cir.instanceColor.needsUpdate = true
  //sum.rotation.z = -Math.PI / 2
  //console.log(largest_n / 2)


}
scene.userData.update = updateScene

const spiral_sum_scene = scene
export { spiral_sum_scene }
