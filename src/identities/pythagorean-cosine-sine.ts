import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, CapsuleGeometry, Uint16BufferAttribute, Float32BufferAttribute, SkinnedMesh, Bone, Skeleton } from 'three';
import { font_helper } from '../utils/text-utils'
import scene_setup from '../scene-container';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { RADIUS_LINE_COLOR, COSINE_LINE_COLOR, SINE_LINE_COLOR, TANGENT_LINE_COLOR, SECANT_LINE_COLOR, RADIUS, UNIT_CIRCLE_COLOR, ORIGIN_COLOR, EXPONENTIAL_COLOR, BACKGROUND_COLOR } from '../constants'

const scene = new Scene(); scene.background = new Color(BACKGROUND_COLOR);

scene.userData.title = 'cos<sup>2</sup>θ + sin<sup>2</sup>θ = 1<sup>2</sup>'

const _v1 = new Vector3()
const _v2 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
scene.add(cursor)


const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: UNIT_CIRCLE_COLOR }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: ORIGIN_COLOR, depthTest: false })); origin.renderOrder = 2
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: EXPONENTIAL_COLOR, depthTest: false })); ex.renderOrder = 2
const cos = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: COSINE_LINE_COLOR, depthTest: false })); cos.renderOrder = 2
const sin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: SINE_LINE_COLOR, depthTest: false })); sin.renderOrder = 2

const exp_text = font_helper('e', 'jθ')
const cos_text = font_helper('cosθ')
const sin_text = font_helper('jsinθ')

ex.add(exp_text)
cos.add(cos_text)
sin.add(sin_text)

scene.add(unitCircle, origin)
scene.add(ex, cos, sin)




const rad_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, RADIUS, 0, 0]), new LineMaterial({ color: RADIUS_LINE_COLOR, linewidth: 2 }))
const cos_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, RADIUS, 0, 0]), new LineMaterial({ color: COSINE_LINE_COLOR, linewidth: 2 }))
const sin_lin = new Line2(new LineGeometry().setPositions([0, 0, 0, 0, 0, 0]), new LineMaterial({ color: SINE_LINE_COLOR, linewidth: 2 }))


scene.add(rad_lin, cos_lin, sin_lin)


// SCENE UPDATING
const updateScene = (screenVector: Vector2) => {
  let angle = Math.atan2(screenVector.y, screenVector.x)
  let cosAngle = 1
  let sinAngle = 0
  let tanAngle = 0
  cursor.position.set(screenVector.x, screenVector.y, 0)

  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  ex.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)
  sin.position.set(0, RADIUS * sinAngle, 0)
  cos.position.set(RADIUS * cosAngle, 0, 0)


  rad_lin.rotation.z = angle

  sin_lin.position.x = cos.position.x
  sin_lin.geometry.getAttribute('instanceEnd').setY(0, sinAngle * RADIUS)
  sin_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

  cos_lin.geometry.getAttribute('instanceEnd').setX(0, cosAngle * RADIUS)
  cos_lin.geometry.getAttribute('instanceEnd').needsUpdate = true

}
scene.userData.update = updateScene

scene_setup(scene)
