import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide } from 'three';
import { font_helper } from '../utils/text-utils'
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { RADIUS_LINE_COLOR, COSINE_LINE_COLOR, SINE_LINE_COLOR, TANGENT_LINE_COLOR, SECANT_LINE_COLOR, COTANGENT_LINE_COLOR, COSECANT_LINE_COLOR, CHORD_LINE_COLOR } from '../constants'
import scene_setup from '../scene-container';


const scene = new Scene(); scene.background = new Color(0x242424);

scene.userData.title = 'cosθ = (e<sup>jθ</sup>+e<sup>-jθ</sup>)/2'

const _v1 = new Vector3()
const _v2 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2
const RADIUS_SQUARED = RADIUS * RADIUS

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
const cursor2 = new Mesh(new SphereGeometry(2), new MeshNormalMaterial({ side: BackSide }))
scene.add(cursor, cursor2)


const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex.renderOrder = 2
const inv_exp = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xcccccc, depthTest: false })); inv_exp.renderOrder = 2
const cos = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); cos.renderOrder = 2
const exp_circle = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const inv_exp_circle = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))

const inv_exp_text = font_helper('e', '-jθ')
const exp_text = font_helper('e', 'jθ')
const half_exp_text = font_helper('  /2')
const half_inv_exp_text = font_helper('  /2')
const cos_text = font_helper('cosθ')

exp_text.add(half_exp_text)
inv_exp_text.add(half_inv_exp_text)
ex.add(exp_text, inv_exp_circle)
inv_exp.add(inv_exp_text)
cos.add(cos_text)

origin.add(exp_circle)
scene.add(unitCircle, origin)
scene.add(ex, inv_exp, cos)


const chord_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord2_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))

scene.add(chord_lin, chord2_lin)


// SCENE UPDATING
const updateScene = (screenVector: Vector2) => {
  let angle = Math.atan2(screenVector.y, screenVector.x)
  let cosAngle = 1
  let sinAngle = 0
  let tanAngle = 0
  cursor.position.set(screenVector.x, screenVector.y, 0)
  _v2.set(screenVector.x, screenVector.y, 0)
  const _magnitude = _v2.x * _v2.x + _v2.y * _v2.y
  _v2.set(RADIUS_SQUARED * _v2.x / _magnitude, RADIUS_SQUARED * _v2.y / _magnitude, 0)
  cursor2.position.set(_v2.x, -_v2.y, 0)

  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  ex.position.set(HALF_RADIUS * cosAngle, HALF_RADIUS * sinAngle, 0)
  inv_exp.position.set(HALF_RADIUS * cosAngle, -HALF_RADIUS * sinAngle, 0)
  cos.position.set(RADIUS * cosAngle, 0, 0)

  chord_lin.geometry.getAttribute('instanceEnd').setXY(0, cosAngle * HALF_RADIUS, sinAngle * HALF_RADIUS)
  chord_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord2_lin.geometry.getAttribute('instanceStart').setXY(0, cosAngle * HALF_RADIUS, sinAngle * HALF_RADIUS)
  chord2_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  chord2_lin.geometry.getAttribute('instanceStart').needsUpdate = true
  chord2_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

}
scene.userData.update = updateScene

scene_setup(scene)

