import { Group, Mesh, MeshBasicMaterial } from "three"
import { Font, FontLoader, TextGeometry } from "three/examples/jsm/Addons.js"

const loader = new FontLoader()
const TYPEFACE_PATH = './src/utils/CascadiaMonoPL_RegularInverted.json'
const MAJOR_FONT = { size: 12, depth: 5 }
const MINOR_FONT = { size: 6, depth: 5 }

export const font_helper = (text: string, superscript: string = "") => {
  let x = new Group()
  loader.load(TYPEFACE_PATH, (font) => {

    const main_geometry = new TextGeometry(text, {
      font: font,
      size: MAJOR_FONT.size,
      depth: MAJOR_FONT.depth,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.25,
      bevelOffset: 0,
      bevelSegments: 12

    })
    const main_geometry_outline = new TextGeometry(text, {
      font: font,
      size: MAJOR_FONT.size,
      depth: MAJOR_FONT.depth,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1.45,
      bevelOffset: 0,
      bevelSegments: 12

    })


    const main_text = new Mesh(main_geometry, new MeshBasicMaterial({ color: 0x242424 }))
    const main_text_outline = new Mesh(main_geometry_outline, new MeshBasicMaterial({ color: 0x999999 }))
    main_text.add(main_text_outline)

    main_text_outline.position.set(0, 0, -5)

    x.add(main_text)

    if (superscript === "") { return }

    const upper_geometry = new TextGeometry(superscript, {
      font: font,
      size: MINOR_FONT.size,
      depth: MINOR_FONT.depth,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.25,
      bevelOffset: 0,
      bevelSegments: 12

    })
    const upper_geometry_outline = new TextGeometry(superscript, {
      font: font,
      size: MINOR_FONT.size,
      depth: MINOR_FONT.depth,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1.45,
      bevelOffset: 0,
      bevelSegments: 12

    })


    const upper_text = new Mesh(upper_geometry, new MeshBasicMaterial({ color: 0x242424 }))
    const upper_text_outline = new Mesh(upper_geometry_outline, new MeshBasicMaterial({ color: 0x999999 }))
    upper_text.add(upper_text_outline)
    upper_text_outline.position.z = -5

    upper_text.position.set(text.length * 11, 13, 0)

    x.add(upper_text)



  })
  return x
}
