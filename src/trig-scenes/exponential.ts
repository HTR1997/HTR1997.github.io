import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, Vector2, TorusGeometry, Group, SphereGeometry, TubeGeometry, LineCurve3, Vector3, ExtrudeGeometry, CurvePath, ShapeGeometry, Shape, MeshBasicMaterial, PlaneGeometry, OrthographicCamera, CapsuleGeometry, Matrix4, SkinnedMesh, Skeleton, Bone, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, DetachedBindMode, ShaderMaterial, RenderTarget, Vector4, DoubleSide, MeshPhongMaterial, BackSide, ConeGeometry, } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh } from 'three/webgpu'
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, screenUV, add, float, exp, length } from 'three/tsl'
import { font_helper } from '../utils/text-utils'
//import { lessThan } from 'three/src/nodes/TSL.js';

//import fragment from './shaders/fragment.glsl'
//import vertex from './shaders/vertex.glsl'

const scene = new Scene(); scene.background = new Color(0x242424);

const _v1 = new Vector3()
const _v2 = new Vector3()
const _m1 = new Matrix4()
const _m2 = new Matrix4()

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2

const cursor = new Mesh(new SphereGeometry(2), new MeshNormalMaterial())
const cursor2 = new Mesh(new SphereGeometry(2), new MeshNormalMaterial({ side: BackSide }))
scene.add(cursor, cursor2)

scene.add(new Mesh(new ConeGeometry(100, 100), new MeshNormalMaterial()))

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


// SCENE UPDATING
const updateScene = (screenVector: Vector2) => {
  let angle = Math.atan2(-screenVector.y, screenVector.x)
  let cosAngle = 1
  let sinAngle = 0
  let tanAngle = 0
  cursor.position.set(screenVector.x, -screenVector.y, 0)
  _v2.set(screenVector.x, -screenVector.y, 0)
  const _magnitude = _v2.x * _v2.x + _v2.y * _v2.y
  _v2.set(10000 * _v2.x / _magnitude, 10000 * _v2.y / _magnitude, 0)
  cursor2.position.set(_v2.x, -_v2.y, 0)

  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  ex.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)
  inv_exp.position.set(RADIUS * cosAngle, -RADIUS * sinAngle, 0)

  double_exp.position.set(RADIUS * Math.cos(2 * angle), RADIUS * Math.sin(2 * angle), 0)
}
scene.userData.update = updateScene

const exp_scene = scene
export { exp_scene }
