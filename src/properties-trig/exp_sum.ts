import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, Group } from 'three';
import { font_helper } from '../utils/text-utils'
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { RADIUS_LINE_COLOR, COSINE_LINE_COLOR, SINE_LINE_COLOR, TANGENT_LINE_COLOR, SECANT_LINE_COLOR, COTANGENT_LINE_COLOR, COSECANT_LINE_COLOR, CHORD_LINE_COLOR } from '../constants'


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
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 3
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


const chord1_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord2_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord3_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord4_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const cos_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: COSINE_LINE_COLOR, linewidth: 2 }))

scene.add(chord1_lin, chord2_lin, chord3_lin, chord4_lin, cos_lin)


const unitCircle2 = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin2 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin2.renderOrder = 2
const ex2 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex2.renderOrder = 2
const chord5_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const exp_group = new Group()

const exp_text2 = font_helper('e', 'jθ')
ex2.add(exp_text2)

exp_group.add(unitCircle2, origin2, ex2, chord5_lin)

exp_group.position.x = - RADIUS * 2.5
scene.add(exp_group)


const unitCircle3 = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin3 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin3.renderOrder = 3
const ex3 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex3.renderOrder = 2
const inv_exp3 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xcccccc, depthTest: false })); inv_exp3.renderOrder = 2
const cos3 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); cos3.renderOrder = 2
const exp_circle3 = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const inv_exp_circle3 = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))

const unitCircle4 = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
ex3.add(unitCircle4)

const chord6_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord7_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord8_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chord9_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const cos2_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: COSINE_LINE_COLOR, linewidth: 2 }))

const product_group = new Group()
product_group.add(unitCircle3, origin3, ex3, inv_exp3, cos3, exp_circle3, inv_exp_circle3, chord6_lin, chord7_lin, chord8_lin, chord9_lin, cos2_lin)
product_group.position.x = RADIUS * 2.5

scene.add(product_group)


const unitCircle5 = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin4 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin4.renderOrder = 3
const ex4 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex4.renderOrder = 2
const inv_exp4 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xcccccc, depthTest: false })); inv_exp4.renderOrder = 2
const cos4 = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); cos4.renderOrder = 2
const exp_circle4 = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const inv_exp_circle4 = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))

const unitCircle6 = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
inv_exp4.add(unitCircle6)

const chordA_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const chordB_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 1 }))
const cos3_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: COSINE_LINE_COLOR, linewidth: 2 }))

const sum_group = new Group()
sum_group.add(unitCircle5, origin4, ex4, inv_exp4, cos4, exp_circle4, inv_exp_circle4, chordA_lin, chordB_lin, cos3_lin)
sum_group.position.x = RADIUS * 2.5
sum_group.position.y = -RADIUS * 2.5

scene.add(sum_group)



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

  product_group.rotation.z = angle

  ex.position.set(HALF_RADIUS * cosAngle, HALF_RADIUS * sinAngle, 0)
  ex2.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)
  ex3.position.set(HALF_RADIUS * cosAngle, HALF_RADIUS * sinAngle, 0)
  inv_exp.position.set(HALF_RADIUS * cosAngle, -HALF_RADIUS * sinAngle, 0)
  inv_exp3.position.set(HALF_RADIUS * cosAngle, -HALF_RADIUS * sinAngle, 0)
  inv_exp4.position.set(HALF_RADIUS, 0, 0)
  cos.position.set(RADIUS * cosAngle, 0, 0)
  cos3.position.set(RADIUS * cosAngle, 0, 0)
  cos4.position.set(HALF_RADIUS * (1 + Math.cos(angle * 2)), HALF_RADIUS * Math.sin(angle * 2), 0)

  cos_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  cos_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord1_lin.geometry.getAttribute('instanceEnd').setXY(0, cosAngle * HALF_RADIUS, sinAngle * HALF_RADIUS)
  chord1_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord2_lin.geometry.getAttribute('instanceStart').setXY(0, cosAngle * HALF_RADIUS, sinAngle * HALF_RADIUS)
  chord2_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  chord2_lin.geometry.getAttribute('instanceStart').needsUpdate = true
  chord2_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord3_lin.geometry.getAttribute('instanceEnd').setXY(0, cosAngle * HALF_RADIUS, -sinAngle * HALF_RADIUS)
  chord3_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord4_lin.geometry.getAttribute('instanceStart').setXY(0, cosAngle * HALF_RADIUS, -sinAngle * HALF_RADIUS)
  chord4_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  chord4_lin.geometry.getAttribute('instanceStart').needsUpdate = true
  chord4_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord5_lin.geometry.getAttribute('instanceEnd').setXY(0, cosAngle * RADIUS, sinAngle * RADIUS)
  chord5_lin.geometry.getAttribute('instanceEnd').needsUpdate = true


  cos2_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  cos2_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord6_lin.geometry.getAttribute('instanceEnd').setXY(0, cosAngle * HALF_RADIUS, sinAngle * HALF_RADIUS)
  chord6_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord7_lin.geometry.getAttribute('instanceStart').setXY(0, cosAngle * HALF_RADIUS, sinAngle * HALF_RADIUS)
  chord7_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  chord7_lin.geometry.getAttribute('instanceStart').needsUpdate = true
  chord7_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord8_lin.geometry.getAttribute('instanceEnd').setXY(0, cosAngle * HALF_RADIUS, -sinAngle * HALF_RADIUS)
  chord8_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chord9_lin.geometry.getAttribute('instanceStart').setXY(0, cosAngle * HALF_RADIUS, -sinAngle * HALF_RADIUS)
  chord9_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  chord9_lin.geometry.getAttribute('instanceStart').needsUpdate = true
  chord9_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chordA_lin.geometry.getAttribute('instanceEnd').setX(0, HALF_RADIUS)
  chordA_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  chordB_lin.geometry.getAttribute('instanceStart').setX(0, HALF_RADIUS)
  chordB_lin.geometry.getAttribute('instanceEnd').setXY(0, (Math.cos(angle * 2) + 1) * HALF_RADIUS, Math.sin(angle * 2) * HALF_RADIUS)
  chordB_lin.geometry.getAttribute('instanceStart').needsUpdate = true
  chordB_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  cos3_lin.geometry.getAttribute('instanceEnd').setXY(0, (Math.cos(angle * 2) + 1) * HALF_RADIUS, Math.sin(angle * 2) * HALF_RADIUS)
  cos3_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

}
scene.userData.update = updateScene

const exp_sum_prop_scene = scene
export { exp_sum_prop_scene }
