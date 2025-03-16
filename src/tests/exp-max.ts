import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, InstancedMesh, Quaternion, CylinderGeometry, Group, CircleGeometry, RingGeometry, IcosahedronGeometry, PlaneGeometry, FrontSide } from 'three';
import { If, lessThan, Fn, vec2, vec3, vec4, uv, texture, uniform, normalLocal, mul, sub, screenUV, add, float, exp, length, positionGeometry, cameraViewMatrix, cameraProjectionMatrix, normalView, distance, viewportUV } from 'three/tsl'
import { font_helper } from '../utils/text-utils'
import { WebGPURenderer, NodeMaterial, NodeBuilder, QuadMesh, } from 'three/webgpu'
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';


const scene = new Scene(); scene.background = new Color(0x242424);

// SCENE SETUP
const RADIUS = 100
const HALF_RADIUS = RADIUS / 2
const RADIUS_SQUARED = RADIUS * RADIUS
const LINE_POINT_COUNT = 10000
const LINE_COUNT = 100
const LINE_FREQUENCE = 8


//line.computeLineDistances(); // needed if using LineDashedMaterial
const pointGroup = new Group()
pointGroup.position.y = 1.
for (let n = 0; n < LINE_COUNT; n++) {
  pointGroup.add(new Mesh(new SphereGeometry(.25), new MeshBasicMaterial({ color: 0x888822 })))
}

const lineGroup = new Group()
let c0 = new Color()
let c1 = new Color(0xffffff)
let c2 = new Color(0x000000)

const linePoints = new Float32Array(3 * LINE_POINT_COUNT)
const pointSet = new Float32Array(3)
let alpha = 0
for (let i = 0; i < LINE_COUNT; i++) {
  for (let n = 0; n < LINE_POINT_COUNT; n++) {
    alpha = LINE_FREQUENCE * 2 * Math.PI * (n / LINE_POINT_COUNT - 1 / 2)
    pointSet[0] = 0
    pointSet[1] = 1
    pointSet[2] = -alpha // Since -z is into screen

    if (i > 0 && n < LINE_POINT_COUNT - 1 && false) {
      const l: Line2 = lineGroup.children[i - 1] as Line2
      const p = l.geometry.getAttribute('instanceStart')


      pointSet[0] += 0
      pointSet[1] += p.getY(n) / i
      pointSet[2] += 0
    } else if (i > 0 && false) {
      const l: Line2 = lineGroup.children[i - 1] as Line2
      const p = l.geometry.getAttribute('instanceEnd')


      pointSet[0] += 0
      pointSet[1] += p.getY(n - 1) / i
      pointSet[2] += 0

    }


    linePoints.set(pointSet, 3 * n)


  }


  c0.lerpColors(c1, c2, i / LINE_COUNT)
  const line = new Line2(new LineGeometry().setPositions(linePoints), new LineMaterial({ color: c0, linewidth: 5 }))
  line.position.x = i / LINE_COUNT * RADIUS
  lineGroup.add(line)

}
console.log(lineGroup.children[0])

scene.add(lineGroup)
//scene.add(pointGroup)

const tempLine = new Line2(new LineGeometry().setPositions(linePoints))

//line2.renderOrder = 4
//line2.material.depthTest = false


const position = new Vector2(0.5, 0.5)
const updateScene = (screenVector: Vector2) => {
  position.x = screenVector.x
  position.y = screenVector.y
  let angle = Math.atan2(screenVector.y, screenVector.x)
  let t = position.x * Math.PI * 2 * 4

  const f: Line2 = tempLine
  const g = f.geometry.getAttribute('instanceStart')
  const h = f.geometry.getAttribute('instanceEnd')
  for (let n = 0; n < LINE_POINT_COUNT - 1; n++) {
    g.setY(n, 1)
    h.setY(n, 1)
  }

  for (let i = 1; i < LINE_COUNT; i++) {

    const m: Line2 = lineGroup.children[i - 1] as Line2
    const p = m.geometry.getAttribute('instanceStart')
    const q = m.geometry.getAttribute('instanceEnd')

    const l: Line2 = lineGroup.children[i] as Line2
    const s = l.geometry.getAttribute('instanceStart')
    const e = l.geometry.getAttribute('instanceEnd')


    if (position.x > 0) {
      c0.lerpColors(c1, c2, i / LINE_COUNT / (Math.floor(position.x * LINE_COUNT) / LINE_COUNT))
      l.material.color.set(c0)
      l.visible = position.x > i / LINE_COUNT
      if (position.x < i / LINE_COUNT) {
        continue
      }
    }


    for (let n = 0; n < LINE_POINT_COUNT - 1; n++) {
      const x = s.getY(n)
      const y = e.getY(n)

      const w = p.getY(n)
      const z = q.getY(n)

      const omega = s.getZ(n)
      const gamma = e.getZ(n)


      const a = g.getY(n) * omega * omega / ((2 * i) * (2 * i - 1))
      const b = h.getY(n) * gamma * gamma / ((2 * i) * (2 * i - 1))

      switch (i % 2) {
        case 0:
          s.setY(n, w + a)
          e.setY(n, z + b)
          break
        case 1:
          s.setY(n, w - a)
          e.setY(n, z - b)
          break
      }

      g.setY(n, a)
      h.setY(n, b)
      continue
      if (Math.abs(s.getY(n) - Math.cos(omega)) < .5) {
        pointGroup.children[i].position.z = omega
        pointGroup.children[i].position.x = i / LINE_COUNT * RADIUS
      }

    }
    s.needsUpdate = true
    e.needsUpdate = true


  }



}
scene.userData.update = updateScene

const exp_max_scene = scene
export { exp_max_scene }
