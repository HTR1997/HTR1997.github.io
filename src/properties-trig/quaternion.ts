import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, Group, BoxGeometry, Quaternion } from 'three';
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


const cube = new Mesh(new BoxGeometry(RADIUS, RADIUS, RADIUS), new MeshBasicMaterial({ color: 0x888888, wireframe: false }))
const x = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xff0000 }))
const y = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x00ff00 }))
const z = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x0000ff }))
x.position.x = HALF_RADIUS
y.position.y = HALF_RADIUS
z.position.z = HALF_RADIUS
cube.add(x, y, z)

const x_gimbal_geometry = new TorusGeometry(RADIUS * 1.0, 2, 12, 4); x_gimbal_geometry.rotateZ(Math.PI / 4); x_gimbal_geometry.rotateX(Math.PI / 2)
const y_gimbal_geometry = new TorusGeometry(RADIUS * 1.2, 2, 12, 4); y_gimbal_geometry.rotateZ(Math.PI / 4); y_gimbal_geometry.rotateZ(Math.PI / 2)
const z_gimbal_geometry = new TorusGeometry(RADIUS * 1.4, 2, 12, 4); z_gimbal_geometry.rotateZ(Math.PI / 4); z_gimbal_geometry.rotateY(Math.PI / 2)
const x_gimbal = new Mesh(x_gimbal_geometry, new MeshBasicMaterial({ color: 0x998888 }))
const y_gimbal = new Mesh(y_gimbal_geometry, new MeshBasicMaterial({ color: 0x889988 }))
const z_gimbal = new Mesh(z_gimbal_geometry, new MeshBasicMaterial({ color: 0x888899 }))
//z_gimbal.add(y_gimbal); y_gimbal.add(x_gimbal); scene.add(z_gimbal)

const hud = new Group()
hud.add(cube)
scene.add(hud)



const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 3
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex.renderOrder = 2
const inv_exp = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xcccccc, depthTest: false })); inv_exp.renderOrder = 2
const cos = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); cos.renderOrder = 2
const exp_circle = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const inv_exp_circle = new Mesh(new TorusGeometry(HALF_RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))



const i_r = new Mesh(new TorusGeometry(HALF_RADIUS, 1.5), new MeshBasicMaterial({ color: 0x999999 }))
const j_r = new Mesh(new TorusGeometry(HALF_RADIUS, 1.5), new MeshBasicMaterial({ color: 0x999999 }))
const k_r = new Mesh(new TorusGeometry(HALF_RADIUS, 1.5), new MeshBasicMaterial({ color: 0x999999 }))
const r_r = new Mesh(new TorusGeometry(HALF_RADIUS, 1.5), new MeshBasicMaterial({ color: 0x999999 }))

const ri_r = new Mesh(new TorusGeometry(HALF_RADIUS, 1.5), new MeshBasicMaterial({ color: 0x999999 }))
const jk_r = new Mesh(new TorusGeometry(HALF_RADIUS, 1.5), new MeshBasicMaterial({ color: 0x999999 }))
scene.add(i_r, j_r, k_r, r_r)
scene.add(ri_r, jk_r)
i_r.position.set(-3.5 * RADIUS, 1.25 * RADIUS, 0)
j_r.position.set(-3.5 * RADIUS, 0 * RADIUS, 0)
k_r.position.set(-3.5 * RADIUS, -1.25 * RADIUS, 0)
r_r.position.set(-2.0 * RADIUS, 0 * RADIUS, 0)

ri_r.position.set(2.0 * RADIUS, 1.0 * RADIUS, 0)
jk_r.position.set(2.0 * RADIUS, -1.0 * RADIUS, 0)


const i_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 2 }))
const j_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 2 }))
const k_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 2 }))
const r_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 2 }))

const ri_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 2 }))
const jk_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: CHORD_LINE_COLOR, linewidth: 2 }))

const ex_i = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xff8888, depthTest: false })); ex.renderOrder = 2
const ex_j = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x88ff88, depthTest: false })); ex.renderOrder = 2
const ex_k = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); ex.renderOrder = 2
const ex_r = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x888888, depthTest: false })); ex.renderOrder = 2

const ex_ri = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xffff88, depthTest: false })); ex.renderOrder = 2
const ex_jk = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xff88ff, depthTest: false })); ex.renderOrder = 2

i_r.add(i_lin, ex_i)
j_r.add(j_lin, ex_j)
k_r.add(k_lin, ex_k)
r_r.add(r_lin, ex_r)

ri_r.add(ri_lin, ex_ri)
jk_r.add(jk_lin, ex_jk)


const keys = {}
let autoClearToggle = true
let colorTheta = Math.PI
const c1 = new Color()
const c2 = new Color()
const onKeyDown = (e: KeyboardEvent) => {
  keys[e.key] = true
  if (e.key === ' ') {
    hud.quaternion.identity()
    x_gimbal.quaternion.identity()
    y_gimbal.quaternion.identity()
    z_gimbal.quaternion.identity()
  }
  if (e.key === 't') {
    autoClearToggle = !autoClearToggle
    i_lin.visible = autoClearToggle
    j_lin.visible = autoClearToggle
    k_lin.visible = autoClearToggle
    r_lin.visible = autoClearToggle

    ri_lin.visible = autoClearToggle
    jk_lin.visible = autoClearToggle

  }

  if (e.key === 't' && autoClearToggle === true) {
    colorTheta = Math.PI
    ex_i.material.color.set(0xff8888)
    ex_j.material.color.set(0x88ff88)
    ex_k.material.color.set(0x8888ff)
    ex_r.material.color.set(0x888888)

    ex_ri.material.color.set(0xffff88)
    ex_jk.material.color.set(0xff88ff)
  }

  if (autoClearToggle === false) {
    console.log(Math.cos(colorTheta))
    colorTheta += .1
    ex_i.material.color.lerpColors(c1.set(0xff8888), c2.set(0xffaaaaa), Math.sin(colorTheta))
    ex_j.material.color.lerpColors(c1.set(0x88ff88), c2.set(0xaaffaaa), Math.sin(colorTheta))
    ex_k.material.color.lerpColors(c1.set(0x8888ff), c2.set(0xaaaaff), Math.sin(colorTheta))
    ex_r.material.color.lerpColors(c1.set(0x888888), c2.set(0xaaaaaa), Math.sin(colorTheta))

    ex_ri.material.color.lerpColors(c1.set(0xffff88), c2.set(0xffffaa), Math.sin(colorTheta))
    ex_jk.material.color.lerpColors(c1.set(0xff88ff), c2.set(0xffaaff), Math.sin(colorTheta))

  }

}
const onKeyUp = (e: KeyboardEvent) => {
  keys[e.key] = false
}
const q = new Quaternion()
const magnitude = 0.05
const realPart = Math.sqrt(1 - magnitude * magnitude)
const rotateCodeQuaternion = () => {
  if (keys['w']) {
    hud.quaternion.multiply(q.set(magnitude, 0, 0, realPart))
  }
  if (keys['s']) {
    hud.quaternion.multiply(q.set(-magnitude, 0, 0, realPart))
  }
  if (keys['a']) {
    hud.quaternion.multiply(q.set(0, magnitude, 0, realPart))
  }
  if (keys['d']) {
    hud.quaternion.multiply(q.set(0, -magnitude, 0, realPart))
  }
  if (keys['q']) {
    hud.quaternion.multiply(q.set(0, 0, magnitude, realPart))
  }
  if (keys['e']) {
    hud.quaternion.multiply(q.set(0, 0, -magnitude, realPart))
  }
  hud.matrixWorldNeedsUpdate = true
}
const rotateCodeEuler = () => {
  if (keys['w']) {
    hud.rotation.x -= .10
    x_gimbal.rotation.x -= .10
  }
  if (keys['s']) {
    hud.rotation.x += .10
    x_gimbal.rotation.x += .10
  }
  if (keys['a']) {
    hud.rotation.y -= .10
    y_gimbal.rotation.y -= .10
  }
  if (keys['d']) {
    hud.rotation.y += .10
    y_gimbal.rotation.y += .10
  }
  if (keys['q']) {
    hud.rotation.z += .10
    z_gimbal.rotation.z += .10
  }
  if (keys['e']) {
    hud.rotation.z -= .10
    z_gimbal.rotation.z -= .10
  }
  hud.matrixWorldNeedsUpdate = true
  x_gimbal.matrixWorldNeedsUpdate = true
  y_gimbal.matrixWorldNeedsUpdate = true
  z_gimbal.matrixWorldNeedsUpdate = true
}

const rotateCode = rotateCodeQuaternion
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);



// SCENE UPDATING
const updateScene = () => {
  rotateCode()

  ex_i.position.set(hud.quaternion.w * HALF_RADIUS, hud.quaternion.x * HALF_RADIUS, 0)
  ex_j.position.set(hud.quaternion.w * HALF_RADIUS, hud.quaternion.y * HALF_RADIUS, 0)
  ex_k.position.set(hud.quaternion.w * HALF_RADIUS, hud.quaternion.z * HALF_RADIUS, 0)
  ex_r.position.set(hud.quaternion.w * HALF_RADIUS, 0 * HALF_RADIUS, 0)
  ex_ri.position.set(hud.quaternion.w * HALF_RADIUS, hud.quaternion.x * HALF_RADIUS, 0)
  ex_jk.position.set(hud.quaternion.y * HALF_RADIUS, hud.quaternion.z * HALF_RADIUS, 0)


  i_lin.geometry.getAttribute('instanceEnd').setXY(0, hud.quaternion.w * HALF_RADIUS, hud.quaternion.x * HALF_RADIUS)
  i_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  j_lin.geometry.getAttribute('instanceEnd').setXY(0, hud.quaternion.w * HALF_RADIUS, hud.quaternion.y * HALF_RADIUS)
  j_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  k_lin.geometry.getAttribute('instanceEnd').setXY(0, hud.quaternion.w * HALF_RADIUS, hud.quaternion.z * HALF_RADIUS)
  k_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  r_lin.geometry.getAttribute('instanceEnd').setX(0, hud.quaternion.w * HALF_RADIUS)
  r_lin.geometry.getAttribute('instanceEnd').needsUpdate = true


  ri_lin.geometry.getAttribute('instanceEnd').setXY(0, hud.quaternion.w * HALF_RADIUS, hud.quaternion.x * HALF_RADIUS)
  ri_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  jk_lin.geometry.getAttribute('instanceEnd').setXY(0, hud.quaternion.y * HALF_RADIUS, hud.quaternion.z * HALF_RADIUS)
  jk_lin.geometry.getAttribute('instanceEnd').needsUpdate = true
}
scene.userData.update = updateScene

const quaternion_scene = scene
export { quaternion_scene }
