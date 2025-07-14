import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, CircleGeometry, DoubleSide } from 'three';
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float, exp, length } from 'three/tsl'
import { font_helper } from '../utils/text-utils'
import scene_setup from '../scene-container';
import { RADIUS, BACKGROUND_COLOR, EXPONENTIAL_COLOR, ORIGIN_COLOR, UNIT_CIRCLE_COLOR } from '../constants';
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = new Scene(); scene.background = new Color(BACKGROUND_COLOR);
scene.userData.title = 'e<sup>jθ</sup>'

// SCENE SETUP

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
//scene.add(cursor)


const unitCircle = new Mesh(new TorusGeometry(RADIUS, 1), new MeshBasicMaterial({ color: UNIT_CIRCLE_COLOR }))
const origin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: ORIGIN_COLOR, depthTest: false })); origin.renderOrder = 2
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: EXPONENTIAL_COLOR, depthTest: false })); ex.renderOrder = 2


const exp_text = font_helper('e', 'jθ')

ex.add(exp_text)


scene.add(unitCircle, origin)
scene.add(ex)


// SCENE UPDATING
const updateScene = (screenVector: Vector2) => {
  cursor.position.set(screenVector.x, screenVector.y, 0)
  let angle = Math.atan2(screenVector.y, screenVector.x)
  let cosAngle = 1
  let sinAngle = 0
  let tanAngle = 0

  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  ex.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)

}
scene.userData.update = updateScene

scene_setup(scene)

