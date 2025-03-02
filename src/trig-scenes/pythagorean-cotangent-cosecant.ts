import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, CapsuleGeometry, Uint16BufferAttribute, Float32BufferAttribute, SkinnedMesh, Bone, Skeleton } from 'three';
import { font_helper } from '../utils/text-utils'

const scene = new Scene(); scene.background = new Color(0x242424);

scene.userData.title = 'cot<sup>2</sup>θ + 1<sup>2</sup> = csc<sup>2</sup>θ'

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
const ex = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x111111, depthTest: false })); ex.renderOrder = 2
const cos = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); cos.renderOrder = 2
const sin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xff8888, depthTest: false })); sin.renderOrder = 2
const cot = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xff88ff, depthTest: false })); cot.renderOrder = 2
const csc = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x88ffff, depthTest: false })); csc.renderOrder = 2

const exp_text = font_helper('1')
const cos_text = font_helper('cosθ')
const sin_text = font_helper('jsinθ')
const cot_text = font_helper('cotθ')
const csc_text = font_helper('cscθ')

ex.add(exp_text)
//cos.add(cos_text)
//sin.add(sin_text)
cot.add(cot_text)
csc.add(csc_text)

scene.add(unitCircle, origin)
scene.add(ex, sin, cos, cot, csc)



const makeSkinnedCapsuleMesh = (color = 0xffffff, cap_radius = .75) => {

  const makeSkinnedCapsuleGeometry = () => {
    const capGeo = new CapsuleGeometry(cap_radius)
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

// 0xbbffbb
// Do .9 radius for vertical lines (so the thickeness looks the same)
const radius = makeSkinnedCapsuleMesh(0x111111)
radius.skeleton.bones[0].position.set(0, 0, 0)
radius.skeleton.bones[1].position.set(0, RADIUS, 0)

const cos_lin = makeSkinnedCapsuleMesh(0xbbbbff)
cos_lin.rotation.z = -Math.PI / 2
cos_lin.skeleton.bones[0].position.set(0, 0, 0)
cos_lin.skeleton.bones[1].position.set(0, RADIUS, 0)

const sin_lin = makeSkinnedCapsuleMesh(0xffbbbb, .9)
sin_lin.skeleton.bones[0].position.set(0, 0, 0)
sin_lin.skeleton.bones[1].position.set(0, RADIUS, 0)

const cot_lin = makeSkinnedCapsuleMesh(0xffbbff, .9)
cot_lin.rotation.z = -Math.PI / 2
cot_lin.skeleton.bones[0].position.set(0, 0, 0)
cot_lin.skeleton.bones[1].position.set(0, RADIUS, 0)


const csc_lin = makeSkinnedCapsuleMesh(0xbbffff, .5)
csc_lin.skeleton.bones[0].position.set(0, 0, 0)
csc_lin.skeleton.bones[1].position.set(0, RADIUS, 0)


scene.add(radius, cos_lin, sin_lin, cot_lin, csc_lin)

// Toggle Text
const toggleText = () => {
  exp_text.visible = false
  cos_text.visible = !cos_text.visible
  sin_text.visible = !sin_text.visible
  csc_text.visible = !csc_text.visible

}
scene.userData.toggleText = toggleText


// SCENE UPDATING
const updateScene = (screenVector: Vector2) => {
  let angle = Math.atan2(screenVector.y, screenVector.x)
  let cosAngle = 1
  let sinAngle = 0
  let tanAngle = 0
  let magnitude = 1
  cursor.position.set(screenVector.x, screenVector.y, 0)

  cosAngle = Math.cos(angle)
  sinAngle = Math.sin(angle)
  tanAngle = Math.tan(angle)

  ex.position.set(0, Math.sign(sinAngle) * RADIUS, 0)
  sin.position.set(0, RADIUS * sinAngle, 0)
  cos.position.set(RADIUS * cosAngle, 0, 0)
  cot.position.set(RADIUS * Math.sign(sinAngle) / tanAngle / 2, Math.sign(sinAngle) * RADIUS, 0)
  csc.position.set(RADIUS * Math.sign(cosAngle) / 2, RADIUS * sinAngle / cosAngle / 2 * Math.sign(cosAngle), 0)


  radius.rotation.z = sinAngle > 0 ? 0 : Math.PI

  sin_lin.position.x = cos.position.x
  sin_lin.rotation.z = sinAngle > 0 ? 0 : Math.PI
  sin_lin.skeleton.bones[1].position.y = Math.abs(RADIUS * sinAngle)

  cos_lin.rotation.z = cosAngle > 0 ? -Math.PI / 2 : Math.PI / 2
  cos_lin.skeleton.bones[1].position.y = Math.abs(RADIUS * cosAngle)

  cot_lin.rotation.z = cosAngle > 0 ? -Math.PI / 2 : Math.PI / 2
  cot_lin.position.y = sinAngle > 0 ? RADIUS : -RADIUS
  cot_lin.skeleton.bones[1].position.y = Math.abs(RADIUS / tanAngle)


  csc_lin.rotation.z = angle - Math.PI / 2
  csc_lin.skeleton.bones[1].position.y = RADIUS / Math.abs(sinAngle)

}
scene.userData.update = updateScene

const pyt_cot_csc_scene = scene
export { pyt_cot_csc_scene }
