import { Scene, Mesh, MeshNormalMaterial, Color, Vector2, TorusGeometry, SphereGeometry, Vector3, MeshBasicMaterial, Matrix4, BackSide, CircleGeometry, DoubleSide, Group, BoxGeometry } from 'three';
import { CSS2DObject } from 'three/examples/jsm/Addons.js';
import scene_setup from './scene-container';
import * as CONSTANTS from './constants';

const scene = new Scene(); scene.background = new Color(CONSTANTS.BACKGROUND_COLOR);
scene.userData.title = 'Color Check'


const colors: number[] = []
const names: string[] = []
const labels: CSS2DObject[] = []

const keys = Object.keys(CONSTANTS)
for (const key of keys) {
  const is_color = key.includes('COLOR')
  if (is_color) {
    colors.push(CONSTANTS[key])
    names.push(key)
  }
  const number = Number(CONSTANTS[key])
  let hex_number = '0x'
  if (number > 0xffff) {
    hex_number += number.toString(16)
  } else if (number > 0xff) {
    hex_number += '00' + number.toString(16)
  } else {
    hex_number += '0000' + number.toString(16)
  }
  if (is_color) {
    console.log(key, hex_number)
  } else {
    console.log(key, CONSTANTS[key])
  }

}

for (let n = 0; n < colors.length; n++) {
  const mesh = new Mesh(new BoxGeometry(CONSTANTS.RADIUS, CONSTANTS.RADIUS, CONSTANTS.RADIUS), new MeshBasicMaterial({ color: colors[n] }))
  const text = document.createElement('div')
  text.textContent = names[n]
  text.style.fontSize = '24px'
  text.style.textShadow = '0px 0px 20px black'
  const label = new CSS2DObject(text)
  mesh.add(label)

  mesh.position.set((n - colors.length / 2) * CONSTANTS.RADIUS * 1.5, 0, 0)
  label.position.z += CONSTANTS.RADIUS
  scene.add(mesh)

  labels.push(label)
}
scene.userData.labels = labels



// SCENE UPDATING
let angle = 0
let cosAngle = 1
let sinAngle = 0
let tanAngle = 0
const updateScene = (screenVector: Vector2) => {
  //cursor.position.set(screenVector.x, screenVector.y, 0)
  //angle = Math.atan2(screenVector.y, screenVector.x)

}
scene.userData.update = updateScene

scene_setup(scene)

