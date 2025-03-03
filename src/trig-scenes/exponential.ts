import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide } from 'three';
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float, exp, length } from 'three/tsl'
import { font_helper } from '../utils/text-utils'
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = new Scene(); scene.background = new Color(0x242424);
scene.userData.title = 'e<sup>jθ</sup>'

const _v1 = new Vector3()
const _v2 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2
const RADIUS_SQUARED = RADIUS * RADIUS

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
scene.add(cursor)


const unitCircle = new Mesh(new TorusGeometry(RADIUS, 2), new MeshBasicMaterial({ color: 0x999999 }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); origin.renderOrder = 2

const exp_text = font_helper('e', 'jθ')

ex.add(exp_text)

scene.add(unitCircle, origin)
scene.add(ex)


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

}
scene.userData.update = updateScene

const exp_scene = scene
export { exp_scene }
