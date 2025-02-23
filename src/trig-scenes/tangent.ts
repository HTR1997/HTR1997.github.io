import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, CapsuleGeometry, Uint16BufferAttribute, Float32BufferAttribute, SkinnedMesh, Bone, Skeleton } from 'three';
import { font_helper } from '../utils/text-utils'

const scene = new Scene(); scene.background = new Color(0x242424);

scene.userData.title = 'jtanθ = jsinθ / cosθ'

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
const cos = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x8888ff, depthTest: false })); cos.renderOrder = 2
const sin = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0xff8888, depthTest: false })); sin.renderOrder = 2
const tan = new Mesh(new SphereGeometry(3), new MeshBasicMaterial({ color: 0x88ff88, depthTest: false })); sin.renderOrder = 2

const exp_text = font_helper('e', 'jθ')
const cos_text = font_helper('cosθ')
const sin_text = font_helper('jsinθ')
const tan_text = font_helper('jtanθ')

ex.add(exp_text)
cos.add(cos_text)
sin.add(sin_text)
tan.add(tan_text)

scene.add(unitCircle, origin)
scene.add(ex, cos, sin, tan)



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
const tan_lin = makeSkinnedCapsuleMesh(0xbbffbb, .9)
tan_lin.skeleton.bones[0].position.set(0, 0, 0)
tan_lin.skeleton.bones[1].position.set(0, RADIUS, 0)

const sec_lin = makeSkinnedCapsuleMesh(0xffffbb, .5)
sec_lin.skeleton.bones[0].position.set(0, 0, 0)
sec_lin.skeleton.bones[1].position.set(0, RADIUS, 0)

scene.add(radius, cos_lin, sin_lin, tan_lin, sec_lin)


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

  ex.position.set(RADIUS * cosAngle, RADIUS * sinAngle, 0)
  sin.position.set(0, RADIUS * sinAngle, 0)
  cos.position.set(RADIUS * cosAngle, 0, 0)
  tan.position.set(RADIUS * Math.sign(cosAngle), Math.sign(cosAngle) * RADIUS * tanAngle, 0)


  radius.rotation.z = angle - Math.PI / 2

  sin_lin.position.x = cos.position.x
  sin_lin.rotation.z = sinAngle > 0 ? 0 : Math.PI
  sin_lin.skeleton.bones[1].position.y = Math.abs(RADIUS * sinAngle)

  cos_lin.rotation.z = cosAngle > 0 ? -Math.PI / 2 : Math.PI / 2
  cos_lin.skeleton.bones[1].position.y = Math.abs(RADIUS * cosAngle)

  tan_lin.position.x = cosAngle > 0 ? RADIUS : -RADIUS
  tan_lin.rotation.z = sinAngle > 0 ? 0 : Math.PI
  tan_lin.skeleton.bones[1].position.y = Math.abs(RADIUS * tanAngle)


  sec_lin.rotation.z = angle - Math.PI / 2
  sec_lin.skeleton.bones[1].position.y = RADIUS / Math.abs(cosAngle)

}
scene.userData.update = updateScene

const tan_scene = scene
export { tan_scene }
